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
          <el-form-item label="用户名" prop="uname">
            <el-input v-model="ruleForm.uname"></el-input>
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
          <el-button type="primary" @click="submitForm('ruleForm')"
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
  export default {
    data() {
      return {
        ruleForm: {
          uname: "",
          password: "",
        },
        rules: {
          uname: [
            { required: true, message: "用户名不能为空！", trigger: "blur" },
          ],
          password: [
            { required: true, message: "密码不能为空！", trigger: "blur" },
          ],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          // 点击登录后，让登录按钮开始转圈圈（展示加载动画）
          this.loading = true;
          // 如果经过校验，账号密码都不为空，则发送请求到后端登录接口
          if (valid) {
            let _this = this;
            // 使用 axios 将登录信息发送到后端
            this.axios({
              url: "http://localhost:5173/login",   // 请求地址
              method: "post",                       // 请求方法
              headers: {                            // 请求头
                "Content-Type": "application/json",
              },
              params: {                             // 请求参数
                uname: _this.ruleForm.uname,
                password: _this.ruleForm.password,
              },
            }).then((res) => { // 当收到后端的响应时执行该括号内的代码，res 为响应信息，也就是后端返回的信息
              if (res.data.code === "0") {  // 当响应的编码为 0 时，说明登录成功
                // 将用户信息存储到sessionStorage中
                sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
                // 跳转页面到首页
                this.$router.push('/home');
                // 显示后端响应的成功信息
                this.$message({
                  message: res.data.msg,
                  type: "success",
                });
              } else {  // 当响应的编码不为 0 时，说明登录失败
                // 显示后端响应的失败信息
                this.$message({
                  message: res.data.msg,
                  type: "warning",
                });
              }
              // 不管响应成功还是失败，收到后端响应的消息后就不再让登录按钮显示加载动画了
              _this.loading = false;
              console.log(res);
            });
          } else {  // 如果账号或密码有一个没填，就直接提示必填，不向后端请求
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