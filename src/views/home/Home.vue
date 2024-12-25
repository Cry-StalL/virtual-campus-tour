<template>
    <div ref="panoramaContainer" style="width: 100%; height: 100vh; position: relative;">
      
      <!-- 全景图容器 -->
      <div ref="panorama" style="width: 100%; height: 100%;"></div>

      <!-- 控制声音开关 -->
      <el-button 
        @click="toggleMute" 
        type="" style="position: absolute; top: 100px; left: 5px; z-index: 10; width: 10px;"
      >
      <el-icon>
        <component :is="isMuted ? 'MuteNotification' : 'Bell'"></component>
      </el-icon>
      </el-button>

      <!-- 背景音乐 -->
      <audio id="audio" :src="audioSrc" :loop="isLoop" controls></audio>

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
    </div>

</template>
  
<script>
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import configs from '@/config/PanoramaConfig.js'
  import { bundlerModuleNameResolver } from 'typescript';
  import axios from 'axios'
  import Cookies from 'js-cookie'
  import audioFile from '@/assets/song.mp3'   //背景音乐

  export default {
    data() {
      return {
        audioSrc: audioFile,   //背景音乐
        viewer: null,
        isVisible: false,
        userId: 0,
        username:'',
        message: '',
        pitch: 0,
        yaw: 0,
        hotspotId: 0,    //留言hotspots的编号，便于修改和删除
        zIndex: 1,       // 用于控制层级
        isLoop: true,    // 默认开启循环播放
        isMuted: false   // 默认不静音
      };
    },

    mounted() {
      this.initPanorama();
      this.audioAutoPlay();
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
        this.userId = Cookies.get('userId');
        this.username = "用户名：" + Cookies.get('username');
        if(this.userId === 0)
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

        this.viewer.loadScene('1-2')

        this.viewer.on('mousedown', (event) =>{
          console.log(this.viewer.mouseEventToCoords(event));
        });

        window.panoramaViewer = this.viewer; // TODO: 目前viewer是全局的


        const scene_id = this.viewer.getScene();  // 获取当前场景的ID

        axios.get('http://localhost:8080/api/user/GetComment', {
          params: {
            scene_id: scene_id,
          },
        })
        .then(response => {
          console.log(response.data);

          const comments = response.data.data;  // 获取评论数组
          const num = response.data.num;        // 当前场景的留言数量

          this.hotspotId = num + 1;    //新建hotspots的id

          if (num > 0) {
            for (let i = 0; i < num; i++) {
              const comment = comments[i];

              console.log(comment);

              this.viewer.addHotSpot({
                pitch: comment.Pitch,
                yaw: comment.Yaw,
                type: "info",
                text: comment.Message,
              });
            }
          }    
        });
      },

      toggleChat() {
        if (this.isLoggedIn) {
          this.isVisible = !this.isVisible; // 切换聊天框的显示和隐藏

          if(this.isVisible){
            this.pitch = this.viewer.getPitch();
            this.yaw = this.viewer.getYaw();
            this.hotspotId++;

            this.viewer.addHotSpot({
              pitch: this.pitch,
              yaw: this.yaw,
              type: "info",
              draggable: true,     // 设置热点为可拖动
              id: this.hotspotId,
            });

            //留言拖动功能 待修改。。。


          }
          else{
            this.viewer.removeHotSpot(this.hotspotId);
            this.hotspotId--;
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

        const scene_id = this.viewer.getScene();   // 获取当前场景的ID
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

            //创建留言
            this.viewer.addHotSpot({
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

      //播放音乐
      audioAutoPlay() {
        let audio = document.getElementById("audio");
        audio.loop = true; // 设置循环播放
        audio.play().catch(error => {
          console.error("无法自动播放音频:", error);
        });
      },

      //控制音乐开关
      toggleMute() {
        let audio = document.getElementById("audio");
        this.isMuted = !this.isMuted;
        audio.muted = this.isMuted; // 设置静音状态
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