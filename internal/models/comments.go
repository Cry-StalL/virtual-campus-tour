package models

type Comments struct {
	ID      uint    `gorm:"primaryKey"` // 主键
	SceneID string  `gorm:"primaryKey"` // 场景 ID (复合主键)
	UserID  uint    `gorm:"not null"`   // 外键
	Message string  `gorm:"not null"`   // 评论信息
	Pitch   float64 `gorm:"not null"`   // 俯仰角
	Yaw     float64 `gorm:"not null"`   // 偏航角
}