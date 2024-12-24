<template>
    <div ref="panoramaContainer" style="width: 100%; height: 100vh; position: relative;">
      <!-- 全景图容器 -->
      <scene-viewer v-if="state.isSceneVisible" :style="{zIndex: 3}" />
      <street-viewer v-if="state.isStreetVisible" :style="{zIndex: 2}" :constructorArg="streetConstructorArg" />
      <aerial-viewer :style="{zIndex: 1}"/>

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
  import Cookies from 'js-cookie'
  import {state} from "@/config/PanoramaConfig.js";
  import streetViewer from "@/views/home/streetViewer.vue";
  import sceneViewer from "@/views/home/sceneViewer.vue";
  import aerialViewer from "@/views/home/aerialViewer.vue";

  export default {
    data() {
      return {
        userId: 0,
        username:'',
        streetConstructorArg: null,
        state,
      };
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