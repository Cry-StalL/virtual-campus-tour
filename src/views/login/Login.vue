<template>
  <div>
    <div class="container">
      <el-card class="box-card">
        <h2>登录</h2>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-position="left"
          label-width="70px"
          class="login-from"
        >
          <el-form-item label="电话" prop="telephone">
            <el-input v-model="ruleForm.telephone"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
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
            >登录</el-button
          >
          <router-link to="/register">
            <el-button style="margin-left:10px">注册</el-button>
          </router-link>
        </div>
      </el-card>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        ruleForm: {
          telephone: "",
          password: "",
        },
        rules: {
          telephone: [
            { required: true, message: "电话号码不能为空！", trigger: "blur" },
          ],
          password: [
            { required: true, message: "密码不能为空！", trigger: "blur" },
          ],
        },
        loading: false,
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          this.loading = true;

          if (valid) {
            let _this = this;

            // 获取表单数据
            const telephone = _this.ruleForm.telephone;
            const password = _this.ruleForm.password;

            // 使用 axios 将登录信息发送到后端
            axios.post(
              'http://localhost:8080/api/user/login',
              {
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

                this.$router.push('/home');
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
            this.loading = false;
            return false;
          }
        });
      }
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