<template>
  <div>
    <div class="container">
      <el-card class="box-card">
        <h2>注册</h2>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-position="left"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="uname">
            <el-input v-model="ruleForm.uname"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="telephone">
            <el-input
              v-model="ruleForm.telephone"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="btnGroup">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            v-loading="loading"
            >提交</el-button
          >
          <el-button @click="goBack">返回</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios'

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          if (this.ruleForm.checkPass !== "") {
            this.$refs.ruleForm.validateField("checkPass");
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          uname: "",
          telephone: "",
          pass: "",
          password: "",
        },
        rules: {
          uname: [
            { required: true, message: "用户名不能为空！", trigger: "blur" },
          ],
          telephone: [
            { required: true, message: "电话号码不能为空！", trigger: "blur" },
          ],
          pass: [{ required: true, validator: validatePass, trigger: "blur" }],
          password: [
            { required: true, validator: validatePass2, trigger: "blur" },
          ],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          this.loading = true;

          if (valid) {
            let _this = this;

            // 获取表单数据
            const name = _this.ruleForm.uname;
            const telephone = _this.ruleForm.telephone;
            const password = _this.ruleForm.password;

            // 使用 axios 将登录信息发送到后端
            axios.post(
              'http://localhost:8080/api/register', 
              {
                name: name,
                telephone: telephone,
                password: password
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                }
              }
            )
            .then(response => {
              console.log(response.data);

              if (response.data.code === 200) {
                // 显示后端响应的成功信息
                this.$message({
                  message: response.data.message,
                  type: "success",
                });
              }
              _this.loading = false;
            })
            .catch(error => {
              //校验请求返回结果
              console.error("登录请求失败:", error);
              console.log('Request Headers:', error.config.headers);
              console.log('Request Data:', error.config.data); // 打印请求体
              console.log('Response Status:', error.response ? error.response.status : 'No response');
              console.log('Response Data:', error.response ? error.response.data : 'No response data');

              this.$message({
                message: error.response.data.message,
                type: "warning",
              });
              _this.loading = false;
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      goBack() {
        this.$router.go(-1);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh; 
  }
  .box-card {
    margin: auto auto;
    width: 400px;
  }
  .login-from {
    margin: auto auto;
  }
  </style>