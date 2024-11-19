package api

import (
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"log"
	"net/http"
	"virtual-campus-tour-backend/internal/database"
	"virtual-campus-tour-backend/internal/models"
)

func Register(c *gin.Context) {
	//获取数据库实例
	db := database.DB

	//获取参数
	var request struct {
		Name      string `json:"name"`
		Telephone string `json:"telephone"`
		Password  string `json:"password"`
	}

	// 绑定 JSON 数据
	if err := c.BindJSON(&request); err != nil {
		log.Printf("Error binding JSON: %v", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	//判断手机号是否存在
	var user models.Users
	db.Where("telephone = ?", request.Telephone).First(&user)
	if user.ID != 0 {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code":    422,
			"message": "用户已存在",
		})
		return
	}

	//创建用户
	hasedPassword, err := bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code":    500,
			"message": "密码加密错误",
		})
		return
	}
	newUser := models.Users{
		Name:      request.Name,
		Telephone: request.Telephone,
		Password:  string(hasedPassword),
	}
	db.Create(&newUser)

	//返回结果
	c.JSON(http.StatusOK, gin.H{
		"code":    200,
		"message": "注册成功",
	})
}
