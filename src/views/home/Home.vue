<template>
    <div ref="panoramaContainer" style="width: 100%; height: 100vh; position: relative;">
      <!-- 全景图容器 -->
<!--      <div ref="streetPanorama" :style="{position: 'absolute', width: '100%', height: '100%', zIndex: 1}"></div>-->
<!--      <scene-viewer v-if="state.isSceneVisible"/>-->
      <multires-viewer />

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

    </div>
</template>
  
<script>
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import { bundlerModuleNameResolver } from 'typescript';
  import axios from 'axios'
  import Cookies from 'js-cookie'
  // import PanoramaConfig from "@/config/PanoramaConfig.js";
  import {configs, state} from "@/config/PanoramaConfig.js";
  import sceneViewer from "@/views/home/sceneViewer.vue";
  import multiresViewer from "@/views/home/multiresViewer.vue";
  
  export default {
    data() {
      return {
        isChatVisible: false,
        isChatPreviewVisible: false,
        username:'',
        message: '',
        state,
      };
    },

    components: {
      sceneViewer,
      multiresViewer
    },

    mounted() {
      this.initStreetPanorama();
    },

    watch: {
      message(newMessage) {
        // 当留言框内容变化时，显示预览框
        this.isChatPreviewVisible = newMessage.trim() !== '';
      },

      // 监听 `state.isSceneVisible` 的变化
      'state.isSceneVisible': function (newValue, oldValue) {
        console.log(`state.isSceneVisible changed from ${oldValue} to ${newValue}`);
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
      initStreetPanorama(){
        this.$nextTick(() => {

          if (this.$refs.streetPanorama) {
            this.streetViewer = pannellum.viewer(this.$refs.streetPanorama, {
              scenes: {},
              "sceneFadeDuration": 1000,
              "minPitch": -62
            });
            for (let i = 0; i < configs.length; i++) {
              this.streetViewer.addScene(configs[i].id, configs[i]);
            }
            this.streetViewer.loadScene('1-1')
            this.streetViewer.on('mousedown', (event) =>{
              console.log(this.streetViewer.mouseEventToCoords(event));
            });
            window.streetPanoViewer = this.streetViewer; // TODO: 目前viewer是全局的
          }else{
            console.error('streetPanorama reference is not available');
          }
        })
      },

      logout() {
        // 将 cookie 中的 userId 改为 0 ，表示用户已退出登录
        Cookies.set('userId', 0, { expires: 1 });
        Cookies.set('username', '', { expires: 1 });
        this.$router.push('/login');
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

.btnGroup1 {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10; /* 确保按钮在全景图之上 */
}

</style>