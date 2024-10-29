package main

import (
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"
	"virtual-campus-tour-backend/internal/database"
	"virtual-campus-tour-backend/internal/models"
	"virtual-campus-tour-backend/utils"
)

func main() {
	r := gin.Default()

	// 加载配置
	config, err := ConfigLoader.LoadConfig("config.yml")
	if err != nil {
		log.Fatalf("error loading config: %v", err)
	}

	// 配置 CORS, 解决跨域引用问题
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{config.Frontend.URL}, // 允许的前端地址
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// 绑定静态资源
	r.Static("/static/panos", "./static/panos")

	// 连接mysql数据库
	dsn := fmt.Sprintf("%s:%s@tcp(127.0.0.1:%s)/", config.Database.Username, config.Database.Password, config.Database.Port)
	dbName := "virtual_campus_tour"
	db, nil := database.InitDatabase(dsn, dbName)

	// 创建数据表
	if err := db.AutoMigrate(&models.Crossings{}, &models.Crossing_Directions{}); err != nil {
		fmt.Println("自动迁移失败:", err)
		return
	}
	fmt.Println("数据表创建成功")

	// 定义getNextPanorama接口
	r.GET("/api/next-pano", func(c *gin.Context) {
		// 接收请求，获取查询参数
		direction := c.Query("direction")
		current_pano_id := c.Query("current_pano_id")

		// 如果direction参数为'+'或'-'
		if direction == "+" || direction == "-" {
			// 以 "-" 为分隔符切分字符串
			parts := strings.Split(current_pano_id, "-")
			var point_id int
			if len(parts) == 2 {
				point_id, err = strconv.Atoi(parts[1])
				if err != nil {
					log.Fatalf("error parsing current pano")
				}
			} else {
				log.Fatalf("error parsing current pano")
			}

			if direction == "+" {
				point_id++
			} else { //if direction == "-"
				point_id--
			}

			// 返回响应(下一张图的ID)
			c.JSON(http.StatusOK, gin.H{
				"next_pano_id": fmt.Sprintf("%s-%d", parts[0], point_id),
			})

		} else {
			// TODO: 如果direction参数为数字(十字路口的情况)
		}
	})

	// 启动服务器
	r.Run(":" + config.Server.Port)
}
