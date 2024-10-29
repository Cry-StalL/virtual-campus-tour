package ConfigLoader

import (
	"gopkg.in/yaml.v3"
	"io/ioutil"
)

type ServerConfig struct {
	Port string `yaml:"port"`
}

type FrontendConfig struct {
	URL string `yaml:"url"`
}

type DatabaseConfig struct {
	Username string `yaml:"username"`
	Password string `yaml:"password"`
	Port     string `yaml:"port"`
}

type Config struct {
	Server   ServerConfig   `yaml:"server"`
	Frontend FrontendConfig `yaml:"frontend"`
	Database DatabaseConfig `yaml:"database"`
}

func LoadConfig(configPath string) (*Config, error) {
	config := &Config{}

	// 读取文件
	data, err := ioutil.ReadFile(configPath)
	if err != nil {
		return nil, err
	} // 读取文件如果有报错

	// 解析YAML数据
	err = yaml.Unmarshal(data, config)
	if err != nil {
		return nil, err
	} // 解析YAML如果有报错

	return config, nil
}
