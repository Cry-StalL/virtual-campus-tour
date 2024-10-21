package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

// 定义图片的URL
var images = []string{
	"http://localhost:8080/assets/1.jpg",
	"http://localhost:8080/assets/2.jpg",
	"http://localhost:8080/assets/3.jpg",
	"http://localhost:8080/assets/4.jpg",
	"http://localhost:8080/assets/5.jpg",
	"http://localhost:8080/assets/6.jpg",
	"http://localhost:8080/assets/7.jpg",
	"http://localhost:8080/assets/8.jpg",
}

func main() {
	router := gin.Default()

	// 将 ./static 文件夹中的资源与 /assets URI 关联
	router.Static("/assets", "./static")

	// 定义获取图片URL的路由
	router.GET("/getImage", func(c *gin.Context) {
		currentID := c.Query("id")
		action := c.Query("action")

		// 解析当前ID
		var index int
		if _, err := fmt.Sscanf(currentID, "%d", &index); err != nil || index < 1 || index > len(images) {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid image ID"})
			return
		}

		// 根据动作决定下一个图片的ID
		if action == "+" {
			index = (index % len(images)) + 1 // 循环到下一个
		} else if action == "-" {
			index = (index+len(images)-2)%len(images) + 1 // 循环到上一个
		} else {
			fmt.Println("Current ID:", currentID, "Action:", action)

			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid action"})
			return
		}

		// 返回对应图片的URL
		c.JSON(http.StatusOK, gin.H{"url": images[index-1]})
	})

	// 启动服务器
	router.Run(":8080") // 启动后，前端可以通过 http://localhost:8080/assets 访问 ./static 文件夹中的资源
}
