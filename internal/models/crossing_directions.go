package models

type CrossingDirections struct {
	CrossingID     uint   `gorm:"primary_key"`
	Direction      uint   `gorm:"primary_key"`
	RoadOperation  uint   `gorm:"not null"`
	PointOperation string `gorm:"not null"`
}
