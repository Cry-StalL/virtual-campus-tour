<template>
  <div ref="panoramaContainer" style="width: 100%; height: 100vh; position: relative;">

    <!-- 全景图容器 -->
    <scene-viewer v-if="state.isSceneVisible" :style="{zIndex: 3}" />
    <street-viewer v-if="state.isStreetVisible" :style="{zIndex: 2}" :constructorArg="streetConstructorArg" />
    <aerial-viewer :style="{zIndex: 1}"/>

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
        <el-button type="" style="margin-left:10px">用户名：{{username}}</el-button>
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
import Cookies from 'js-cookie'
import {state} from "@/config/PanoramaConfig.js";
import streetViewer from "@/views/home/streetViewer.vue";
import sceneViewer from "@/views/home/sceneViewer.vue";
import aerialViewer from "@/views/home/aerialViewer.vue";
import audioFile from '@/assets/song.mp3'

export default {
  data() {
    return {
      userID: '0',
      username: '',
      streetConstructorArg: null,
      state,
      audioSrc: audioFile,
      isLoop: true,    // 默认开启循环播放
      isMuted: false   // 默认不静音
    };
  },

  mounted() {
    this.initPanorama();
    this.audioAutoPlay();
  },

  components: {
    streetViewer,
    sceneViewer,
    aerialViewer,
  },

  watch: {
    // 监听 `state.isSceneVisible` 的变化
    'state.isSceneVisible': function (newValue, oldValue) {
      console.log(`state.isSceneVisible changed from ${oldValue} to ${newValue}`);
    },
  },

  computed: {
    isLoggedIn() {
      this.username = Cookies.get('username');
      this.userID = Cookies.get('userId');
      // 通过检查 cookie 判断用户是否已登录
      if(Number(this.userID || 0) === 0)
        return false;
      else
        return true;
    },
  },

  methods: {
    Cookies,
    logout() {
      // 将 cookie 中的 userId 改为 0 ，表示用户已退出登录
      Cookies.set('userId', 0, { expires: 1 });
      Cookies.set('username', '', { expires: 1 });
      this.$router.push('/login');
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

.btnGroup1 {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10; /* 确保按钮在全景图之上 */
}

</style>