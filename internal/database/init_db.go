package database

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDatabase(dsn, dbName string) error {
	// 创建数据库连接，不指定数据库名称
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return err
	}

	// 检查数据库是否存在
	var result int64
	db.Raw("SELECT COUNT(*) FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?", dbName).Scan(&result)

	// 创建数据库
	if result == 0 {
		fmt.Printf("数据库 %s 不存在，正在创建...\n", dbName)
		if err := db.Exec("CREATE DATABASE " + dbName).Error; err != nil {
			return err
		}
		fmt.Printf("数据库 %s 创建成功\n", dbName)
	}

	// 重新连接到指定数据库
	dsnWithDB := fmt.Sprintf("%s%s", dsn, dbName)
	db, err = gorm.Open(mysql.Open(dsnWithDB), &gorm.Config{})
	if err != nil {
		return err
	}
	fmt.Printf("成功连接数据库 %s\n", dbName)

	DB = db

	return nil
}
