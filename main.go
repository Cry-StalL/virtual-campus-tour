package main

import (
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"log"
	"time"
	"virtual-campus-tour-backend/internal/api"
	"virtual-campus-tour-backend/internal/database"
	"virtual-campus-tour-backend/internal/models"
	"virtual-campus-tour-backend/utils"
)

func main() {
	r := gin.Default()

	// 加载配置
	config, err1 := ConfigLoader.LoadConfig("config.yml")
	if err1 != nil {
		log.Fatalf("error loading config: %v", err1)
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
	err2 := database.InitDatabase(dsn, dbName)
	if err2 != nil {
		return
	}

	// 获取数据库实例
	db := database.DB
	if db == nil {
		log.Fatalf("error connecting to database")
	}

	// 创建数据表
	if err := db.AutoMigrate(&models.Crossings{}, &models.Crossing_Directions{}); err != nil {
		fmt.Println("自动迁移失败:", err)
		return
	}
	fmt.Println("数据表创建成功")

	// 定义接口
	r.GET("/api/pano/next-pano", api.GetNextPanorama) // getNextPanorama接口
	r.GET("/api/pano/real-id", api.GetRealID)

	// 启动服务器
	r.Run(":" + config.Server.Port)
}
