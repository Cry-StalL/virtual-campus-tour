<template>
  <div ref="scenePanorama" :style="{position: 'absolute', width: '100%', height: '100%', zIndex: 2}"></div>

  <!--返回按钮-->
  <el-button class="leaveSceneButton" type="primary" @click="leaveScene">返回</el-button>
</template>

<script>
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import {configs, state} from "@/config/PanoramaConfig.js";
  export default {
    data() {
      return {
        state,
      };
    },

    mounted() {
      this.initScenePanorama();
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
      }
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
</style>