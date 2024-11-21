package api

import (
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"golang.org/x/crypto/bcrypt"
	"log"
	"net/http"
	"virtual-campus-tour-backend/internal/database"
	"virtual-campus-tour-backend/internal/models"
)

func Login(c *gin.Context) {
	//获取数据库实例
	db := database.DB

	//获取参数
	var request struct {
		Telephone string `json:"telephone"`
		Password  string `json:"password"`
	}

	// 绑定 JSON 数据
	if err := c.BindJSON(&request); err != nil {
		log.Printf("Error binding JSON: %v", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	// 记录请求体
	log.Printf("telephone: %s,Password:%s", request.Telephone, request.Password)

	//判断手机号是否存在
	var user models.Users
	db.Where("telephone = ?", request.Telephone).First(&user)
	if user.ID == 0 {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code":    422,
			"message": "用户不存在",
		})
		return
	}

	//判断密码是否正确
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(request.Password)); err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code":    422,
			"message": "密码错误",
		})
		return
	}

	//返回结果
	c.JSON(http.StatusOK, gin.H{
		"code":    200,
		"message": "登录成功",
	})
}