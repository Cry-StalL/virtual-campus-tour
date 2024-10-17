package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"log"
	"time"
	"virtual-campus-tour-backend/utils"
)

func main() {
	r := gin.Default()

	// 加载配置
	config, err := ConfigLoader.LoadConfig("config.yaml")
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
	// 启动服务器
	r.Run(":" + config.Server.Port)
}
