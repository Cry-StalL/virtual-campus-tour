package models

type Users struct {
	ID        uint   `gorm:"primary_key;auto_increment"`
	Name      string `gorm:"varchar(20);not null"`
	Telephone string `gorm:"varchar(20);not null;unique"`
	Password  string `gorm:"size:255;not null"`
}
