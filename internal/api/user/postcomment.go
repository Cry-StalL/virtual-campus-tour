package api

import (
	"log"
	"net/http"
	"virtual-campus-tour-backend/internal/database"
	"virtual-campus-tour-backend/internal/models"

	"github.com/gin-gonic/gin"
)

func PostComment(c *gin.Context) {
	// 获取数据库实例
	db := database.DB

	// 获取参数
	var request struct {
		SceneID uint    `json:"scene_id"` // 场景 ID
		UserID  uint    `json:"user_id"`  // 用户 ID
		Message string  `json:"message"`  // 评论内容
		Pitch   float64 `json:"pitch"`    // 俯仰角
		Yaw     float64 `json:"yaw"`      // 偏航角
	}

	// 绑定 JSON 数据
	if err := c.BindJSON(&request); err != nil {
		log.Printf("Error binding JSON: %v", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// 构建新的 Comment 记录
	newComment := models.Comments{
		SceneID: request.SceneID,
		UserID:  request.UserID,
		Message: request.Message,
		Pitch:   request.Pitch,
		Yaw:     request.Yaw,
	}

	// 将评论插入数据库
	if err := db.Create(&newComment).Error; err != nil {
		log.Printf("Error creating comment: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to post comment"})
		return
	}

	// 返回成功响应
	c.JSON(http.StatusOK, gin.H{
		"code":    200,
		"message": "评论发布成功",
		"data":    newComment,
	})
}
