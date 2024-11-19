package pano

import (
	"github.com/gin-gonic/gin"
	"io/fs"
	"log"
	"net/http"
	"path/filepath"
	"strings"
)

func SearchFiles(dir, keyword string) ([]string, error) {
	var matchedFiles []string

	// 遍历目录
	err := filepath.Walk(dir, func(path string, info fs.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// 判断是否是文件，并且文件名包含关键词
		if !info.IsDir() && strings.Contains(info.Name(), keyword) {
			matchedFiles = append(matchedFiles, path)
		}
		return nil
	})

	if err != nil {
		return nil, err
	}

	return matchedFiles, nil
}

func GetRealID(c *gin.Context) {
	// 接收请求，获取查询参数
	id := c.Query("id")

	dir := "static/panos"

	// 搜索文件
	matchedFiles, err := SearchFiles(dir, id)
	if err != nil {
		log.Fatalf(err.Error())
	}

	realID := matchedFiles[0]

	// 去掉前缀 "static\\panos\\"
	realID = strings.TrimPrefix(realID, "static\\panos\\")

	// 去掉后缀 ".jpg"
	realID = strings.TrimSuffix(realID, ".jpg")

	// 返回参数 path
	c.JSON(http.StatusOK, gin.H{
		"real-id": realID,
	})
}
