package main

import (
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"net/url"
	"path"
	"strconv"
	"strings"
	"time"
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

	// getNextPanorama接口
	r.GET("/api/next-pano", func(c *gin.Context) {
		// 接收请求，获取所有查询参数
		params := c.Request.URL.Query()

		//log.Println(params)

		direction := params["direction"][0]
		current_pano := params["current_pano"][0]

		log.Println(direction)
		log.Println(current_pano)

		// 解析URL
		parsedUrl, err := url.Parse(current_pano)
		if err != nil {
			fmt.Println("解析URL出错:", err)
			return
		}

		// 获取路径中的文件名
		current_pano_filename := path.Base(parsedUrl.Path)

		// 查找下划线和扩展名的位置
		underscoreIndex := strings.LastIndex(current_pano_filename, "_")
		dotIndex := strings.LastIndex(current_pano_filename, ".")

		// 提取下划线和扩展名之间的数字部分
		var current_pano_id int
		if underscoreIndex != -1 && dotIndex != -1 && underscoreIndex < dotIndex {
			current_pano_id, err = strconv.Atoi(current_pano_filename[underscoreIndex+1 : dotIndex])
		} else {
			fmt.Println("文件名格式不符合预期")
		}

		var next_pano_id int
		if direction == "+" {
			next_pano_id = current_pano_id + 1
		} else { // if direction == "-"
			next_pano_id = current_pano_id - 1
		}

		//next_pano_url := "http://127.0.0.1:8080/static/panos/pano_" + strconv.Itoa(next_pano_id) + ".jpg"

		// 返回响应

		c.JSON(http.StatusOK, gin.H{
			"next_pano_id": next_pano_id,
		})
	})

	// 启动服务器
	r.Run(":" + config.Server.Port)
}
