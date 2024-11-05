package database

import (
	"errors"
	"fmt"
	"gorm.io/gorm"
	"log"
	"virtual-campus-tour-backend/internal/models"
)

func InitTables() error {
	db := DB
	if db == nil {
		log.Fatalf("db instace is nil")
	}

	// 创建数据表(AutoMigrate方法可以检测数据表是否存在)
	if err := db.AutoMigrate(&models.Crossings{}, &models.CrossingDirections{}); err != nil {
		fmt.Println("自动迁移失败:", err)
		return err
	}
	fmt.Println("数据表创建成功")

	// 往crossings数据表中插入数据
	InsertCrossingsTable(db)

	// 往crossing_directions数据表中插入数据
	InsertCrossingDirectionsTable(db)

	return nil
}

func InsertCrossingsTable(db *gorm.DB) error {
	// 检测数据表内原先是否有数据
	var count int64
	if err := db.Model(&models.Crossings{}).Count(&count).Error; err != nil {
		fmt.Println("获取行数失败:", err)
	} else {
		if count != 0 {
			return errors.New("表中已有数据")
		}
	}

	record := models.Crossings{
		ID:    1,
		Roads: "1,2",
	}

	result := db.Create(&record)

	if result.Error != nil {
		return result.Error
	}

	return nil
}

func InsertCrossingDirectionsTable(db *gorm.DB) error {
	// 检测数据表内原先是否有数据
	var count int64
	if err := db.Model(&models.CrossingDirections{}).Count(&count).Error; err != nil {
		fmt.Println("获取行数失败:", err)
	} else {
		if count != 0 {
			return errors.New("表中已有数据")
		}
	}

	records := []models.CrossingDirections{
		{CrossingID: 1, Direction: 1, RoadOperation: 0, PointOperation: "+"},
		{CrossingID: 1, Direction: 2, RoadOperation: 0, PointOperation: "-"},
		{CrossingID: 1, Direction: 3, RoadOperation: 1, PointOperation: "+"},
		{CrossingID: 1, Direction: 4, RoadOperation: 1, PointOperation: "-"},
	}

	result := db.Create(&records)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
