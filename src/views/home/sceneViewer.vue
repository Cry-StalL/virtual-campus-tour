<template>
  <div ref="scenePanorama" :style="{position: 'absolute', width: '100%', height: '100%', zIndex: 2}"></div>

  <!--返回按钮-->
  <el-button class="leaveSceneButton" type="primary" @click="leaveScene">返回</el-button>

  <!-- 留言按钮 -->
  <el-button class="custom-button" type="primary" @click="toggleChat">留言</el-button>

  <!-- 留言框 -->
  <div v-if="isChatVisible" class="chat-box">
    <el-input type="textarea" :rows="4" placeholder="请输入留言..." v-model="message"></el-input>
    <div class="btnGroup2">
      <el-button @click="sendMessage">发送</el-button>
      <el-button @click="toggleChat">返回</el-button>
    </div>
  </div>

  <!-- 留言发表框 -->
  <div
      v-if="isChatPreviewVisible"
      ref="previewBox"
      class="comment-box preview"
      :style="{ top: previewTop, left: previewLeft, zIndex: 1 }"
      @mousedown="dragStart"
  >
    {{ message }}
  </div>
</template>

<script>
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import {configs, state} from "@/config/PanoramaConfig.js";
  import Cookies from "js-cookie";
  export default {
    data() {
      return {
        state,
      };
    },

    mounted() {
      this.initScenePanorama();
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
      initScenePanorama() {
        this.$nextTick(() => {
          if (this.$refs.scenePanorama) {
            this.sceneViewer = pannellum.viewer(this.$refs.scenePanorama, {
              scenes: {},
            })
            for (let i = 0; i < configs.length; i++) {
              this.sceneViewer.addScene(configs[i].id, configs[i]);
            }
            this.sceneViewer.loadScene('1-2')
            window.scenePanoViewer = this.sceneViewer; // TODO: 目前viewer是全局的
          } else {
            console.error('scenePanorama reference is not available');
          }
        })
      },

      leaveScene() {
        state.isSceneVisible = false;
      },

      toggleChat() {
        if (this.isLoggedIn) {
          this.isChatVisible = !this.isChatVisible; // 切换聊天框的显示和隐藏
          if (this.isChatVisible) {
            this.isChatPreviewVisible = true;
          }
          else{
            this.isChatPreviewVisible = false;
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
  }

</script>

<style scoped>
  .leaveSceneButton {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 10;
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
</style>