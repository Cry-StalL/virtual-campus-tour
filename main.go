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

			// 获取该crossing的roads信息
			parts := strings.Split(current_pano_id, ",")
			var road_list []int
			var point_list []int
			for _, part := range parts {

				firstNum := strings.Split(part, "-")[0] // 取每个部分的第一个数字（以"-"分隔）
				secondNum := strings.Split(part, "-")[1]
				road, err := strconv.Atoi(firstNum)
				if err != nil {
					fmt.Println("转换错误:", err)
					return
				}
				point, err := strconv.Atoi(secondNum)
				if err != nil {
					fmt.Println("转换错误:", err)
					return
				}
				road_list = append(road_list, road)
				point_list = append(point_list, point)
			}
			var road_list_str []string
			for _, road := range road_list {
				road_list_str = append(road_list_str, strconv.Itoa(road))
			}

			roads := strings.Join(road_list_str, ",") // 将结果连接为一个字符串

			// 使用roads值在crossings表中查询id
			var crossing models.Crossings
			if err := db.Where("roads = ?", roads).First(&crossing).Error; err != nil {
				fmt.Println("查询路口失败:", err)
				return
			}

			crossingID := crossing.ID

			// 查询crossing_directions表
			var operationData models.Crossing_Directions
			if err := db.Where("crossing_id = ? AND direction = ?", crossingID, direction).First(&operationData).Error; err != nil {
				fmt.Println("查询失败:", err)
				return
			}
			road_operation := operationData.Road_Operation
			point_operation := operationData.Point_Operation

			// 执行操作
			var next_road_id, current_point_id, next_point_id int

			next_road_id = road_list[road_operation]

			current_point_id = point_list[road_operation]

			if point_operation == "+" {
				next_point_id = current_point_id + 1
			} else if point_operation == "-" {
				next_point_id = current_point_id - 1
			}

			// 返回响应(下一张图的ID)
			c.JSON(http.StatusOK, gin.H{
				"next_pano_id": fmt.Sprintf("%d-%d", next_road_id, next_point_id),
			})

		}
	})

	// 启动服务器
	r.Run(":" + config.Server.Port)
}
