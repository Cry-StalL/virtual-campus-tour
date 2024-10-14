package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	// 将后端的"assets”文件夹与 URI"/static”关联
	r.static("/static", "./assets")
	// 启动服务器
	r.Run(":8080")
}
