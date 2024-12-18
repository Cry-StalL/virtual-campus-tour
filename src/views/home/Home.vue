<template>
    <div ref="panoramaContainer" style="width: 100%; height: 100vh; position: relative;">
      <!-- 全景图容器 -->
      <div ref="panorama" style="width: 100%; height: 100%;"></div>

      <!-- 登录和注册 -->
      <div class="btnGroup1">
        <template v-if="isLoggedIn">
          <el-button type="" style="margin-left:10px">{{ username }}</el-button>
          <el-button type="primary" style="margin-left:10px" @click="logout">退出登录</el-button>
        </template>
        <template v-else>
          <router-link to="/login">
            <el-button type="primary" style="margin-left:10px">登录</el-button>
          </router-link>
          <router-link to="/register">
            <el-button type="primary" style="margin-left:10px">注册</el-button>
          </router-link>
        </template>
      </div>

      <!-- 留言按钮 -->
      <el-button class="custom-button" type="primary" @click="toggleChat">留言</el-button>

      <!-- 留言框 -->
      <div v-if="isVisible" class="chat-box">
        <el-input type="textarea" :rows="4" placeholder="请输入留言..." v-model="message"></el-input>
        <div class="btnGroup2">
          <el-button @click="sendMessage">发送</el-button>
          <el-button @click="toggleChat">返回</el-button>
        </div>
      </div>

      <!-- 留言发表框 -->
      <div
        v-if="isPreviewVisible"
        ref="previewBox"
        class="comment-box preview"
        :style="{ top: previewTop, left: previewLeft, zIndex: zIndex }"
        @mousedown="dragStart"
      >
        {{ message }}
      </div>

    </div>
</template>
  
<script>
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import configs from '@/config/PanoramaConfig.js'
  import { bundlerModuleNameResolver } from 'typescript';
  import axios from 'axios'
  import Cookies from 'js-cookie'
  
  export default {
    data() {
      return {
        isVisible: false,
        isPreviewVisible: false,
        username:'',
        message: '',
        zIndex: 1, // 用于控制层级
      };
    },

    mounted() {
      this.initPanorama();
    },

    watch: {
      message(newMessage) {
        // 当留言框内容变化时，显示预览框
        this.isPreviewVisible = newMessage.trim() !== '';
      },
    },

    computed: {
      isLoggedIn() {
        // 通过检查 cookie 判断用户是否已登录
        const userId = Cookies.get('userId')||0;
        this.username = "用户名：" + Cookies.get('username');
        if(userId == 0)
          return false;
        else
          return true;
      },
    },

    methods: {
      initPanorama() {
        this.viewer = pannellum.viewer(this.$refs.panorama, {
          scenes: {},
          "sceneFadeDuration": 1000,
        });

        for (let i = 0; i < configs.length; i++) {
          this.viewer.addScene(configs[i].id, configs[i]);
        }

        this.viewer.loadScene('jy_road2/30')

        this.viewer.on('mousedown', (event) =>{
          console.log(this.viewer.mouseEventToCoords(event));
        });

        window.panoramaViewer = this.viewer; // TODO: 目前viewer是全局的
      },

      toggleChat() {
        if (this.isLoggedIn) {
          this.isVisible = !this.isVisible; // 切换聊天框的显示和隐藏
          if (this.isVisible) {
            this.isPreviewVisible = true;
          }
          else{
            this.isPreviewVisible = false;
          }
          this.message = '';
        }
        else{
          this.$message({
            message: '用户未登录，无法使用留言功能!',
            type: "warning",
          });
        }
      },

      logout() {
        // 将 cookie 中的 userId 改为 0 ，表示用户已退出登录
        Cookies.set('userId', 0, { expires: 1 });
        Cookies.set('username', '', { expires: 1 });
        this.$router.push('/login');
      },

      sendMessage() {
        if (this.message.trim() === '') {
          return;
        }

        /*const scene_id = this.viewer.getScene(); // 获取当前场景的ID

        axios.post(
          'http://localhost:8080/api/user/PostComment',
          {
            scene_id: scene_id,
            user_id: this.user_id,
            message: this.message,
            pitch: pitch,
            yaw: yaw,
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
            // 处理成功响应
            this.$message.success('留言已成功提交');
            this.message = '';
          } else {


            // 处理其他响应代码
            this.$message.error('留言提交失败: ' + response.data.message);
          }
        })
        .catch(error => {
          // 处理请求错误
          this.$message.error('留言提交失败: ' + error.message);
        });*/
      },
           
    }
  };

</script>
  
<style>
body, html, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.custom-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10; /* 确保按钮在全景图之上 */
}

.chat-box {
  position: absolute;
  bottom: 160px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;
  color: white;
}
.chat-box h3 {
  margin-top: 0;
  color: white;
}
.chat-box .el-textarea__inner {
  background-color: white;
  color: black;
}
.chat-box .el-button {
  margin-top: 10px;
  color: black;
  background-color: white;
}

.btnGroup1 {
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>