package api

import (
	"log"
	"net/http"
	"virtual-campus-tour-backend/internal/database"
	"virtual-campus-tour-backend/internal/models"

	"github.com/gin-gonic/gin"
)

// GetComment 通过 ID 获取评论信息
func GetComment(c *gin.Context) {
	// 获取数据库实例
	db := database.DB

	// 从查询参数获取场景ID字符串
	sceneIDStr := c.Query("scene_id")
	if sceneIDStr == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Scene ID is required"})
		return
	}

	// 定义用于存储相关评论的切片
	var comments []models.Comments

	// 假设数据库中的 scene_id 也是以字符串形式存储的
	// 根据场景ID字符串查询所有评论
	if err := db.Where("scene_id = ?", sceneIDStr).Find(&comments).Error; err != nil {
		log.Printf("Error retrieving comments: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve comments"})
		return
	}

	// 返回评论列表和评论数量
	c.JSON(http.StatusOK, gin.H{
		"code":    200,
		"message": "评论获取成功",
		"data":    comments,
		"num":     len(comments), // 当前场景的留言数量
	})
}

func PostComment(c *gin.Context) {
	// 获取数据库实例
	db := database.DB

	// 获取参数
	var request struct {
		SceneID string  `json:"scene_id"` // 场景 ID
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

	log.Printf("Received request: %+v", request)

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
