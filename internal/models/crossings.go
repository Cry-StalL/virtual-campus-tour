package models

type Crossings struct {
	ID                 uint               `gorm:"primary_key;auto_increment"`
	Roads              string             `gorm:"not null"`
	CrossingDirections CrossingDirections `gorm:"foreignKey:CrossingID"`
}
