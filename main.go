package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Static("/static/panos", "./static/panos")
	// 启动服务器
	r.Run(":8080")
}
