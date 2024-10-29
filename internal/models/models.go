package models

type Crossings struct {
	ID                  uint                `gorm:"primary_key;auto_increment"`
	Roads               string              `gorm:"not null"`
	Crossing_Directions Crossing_Directions `gorm:"foreignKey:Crossing_ID"`
}

type Crossing_Directions struct {
	Crossing_ID     uint   `gorm:"primary_key"`
	Direction       uint   `gorm:"primary_key"`
	Road_Operation  string `gorm:"not null"`
	Point_Operation string `gorm:"not null"`
}
