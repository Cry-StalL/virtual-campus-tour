<template>
  <div ref="scenePanorama" :style="{position: 'absolute', width: '100%', height: '100%', zIndex: 2}"></div>

  <!--返回按钮-->
  <el-button class="leaveSceneButton" type="primary" @click="leaveScene">返回</el-button>

  <!-- 留言按钮 -->
  <el-button class="custom-button" type="primary" @click="handleCommentButtonClick">留言</el-button>

  <!-- 留言框 -->
  <div v-if="isChatVisible" class="chat-box">
    <el-input type="textarea" :rows="4" placeholder="请输入留言..." v-model="message"></el-input>
    <div class="btnGroup2">
      <el-button @click="sendMessage">发送</el-button>
      <el-button @click="handleCommentBackButtonClick">返回</el-button>
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
  import axios from "axios";
  import sceneViewer from "@/views/home/sceneViewer.vue";
  export default {
    data() {
      return {
        sceneViewer: null,
        isChatVisible: false,
        isChatPreviewVisible: false,
        message: '',
        hotspotId: 0,    //留言hotspots的编号，便于修改和删除
        pitch: 0,
        yaw: 0,
        state,
      };
    },

    mounted() {
      this.initScenePanorama();
    },

    watch: {
      message(newMessage) {
        // 当留言框内容变化时，显示预览框
        this.isChatPreviewVisible = newMessage.trim() !== '';
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

      handleCommentButtonClick() {
        if (!this.isLoggedIn) {
          // 如果用户未登录
          this.$message({
            message: '用户未登录，无法使用留言功能!',
            type: "warning",
          });
          return;
        }

        this.isChatVisible = !this.isChatVisible; // 切换聊天框的显示和隐藏

        if(this.isChatVisible){
          this.pitch = this.sceneViewer.getPitch();
          this.yaw = this.sceneViewer.getYaw();
          this.hotspotId++;

          this.sceneViewer.addHotSpot({
            pitch: this.pitch,
            yaw: this.yaw,
            type: "info",
            draggable: true,     // 设置热点为可拖动
            id: this.hotspotId,
          });

          //留言拖动功能 待修改。。。


        }
        else{
          this.sceneViewer.removeHotSpot(this.hotspotId);
          this.hotspotId--;
        }
        this.message = '';
      },

      handleCommentBackButtonClick() {
        this.isChatVisible = false;
        this.sceneViewer.removeHotSpot(this.hotspotId);
        this.hotspotId--;
      },

      sendMessage() {
        if (this.message.trim() === '') {
          return;
        }

        const scene_id = this.sceneViewer.getScene();   // 获取当前场景的ID
        const Pitch1 = parseFloat(this.pitch.toFixed(2));   //Pitch 和 Yaw 保留两位小数
        const Yaw1 = parseFloat(this.yaw.toFixed(2));
        const UserId1 = parseInt(Cookies.get('userId'), 10);   //userId转化为整数类型

        axios.post(
            'http://localhost:8080/api/user/PostComment',
            {
              scene_id: scene_id,
              user_id: UserId1,
              message: this.message,
              pitch: Pitch1,
              yaw: Yaw1,
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
                this.isChatVisible = false;

                //创建留言
                this.sceneViewer.addHotSpot({
                  pitch: this.pitch,
                  yaw: this.yaw,
                  type: "info",
                  text: this.message,
                });

              } else {
                // 处理其他响应代码
                this.$message.error('留言提交失败: ' + response.data.message);
              }
            })
            .catch(error => {
              // 处理请求错误
              this.$message.error('留言提交失败: ' + error.message);
            });

        this.isVisible = !this.isVisible;
      },
    }
  }

</script>

<style scoped>
  .leaveSceneButton {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 10; /* 确保按钮在全景图之上 */
  }

  .custom-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 10;
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