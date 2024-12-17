<template>
  <div ref="aerialPanorama" :style="{position: 'absolute', width: '100%', height: '100%', zIndex: 1}"></div>

  <div class="container">
    <!-- 按钮 -->
    <div class="switch-aerial-button-group">
      <el-button type="primary" class="aerial-button" @click="aerialViewer.loadScene('aerial1')">若海湖上空</el-button>
      <el-button type="primary" class="aerial-button" @click="aerialViewer.loadScene('aerial2')">教学楼上空</el-button>
      <el-button type="primary" class="aerial-button" @click="aerialViewer.loadScene('aerial3')">荔园上空</el-button>
      <el-button type="primary" class="aerial-button" @click="aerialViewer.loadScene('aerial4')">榕园上空</el-button>
    </div>
  </div>
</template>

<script >
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import {aerial_configs, state} from "@/config/PanoramaConfig.js";

  export default {
    mounted() {
      this.initAerialPanorama();
    },

    methods: {
      initAerialPanorama() {
        this.$nextTick(() => {
          if (this.$refs.aerialPanorama) {
            this.aerialViewer = pannellum.viewer(this.$refs.aerialPanorama, {
              "type": "multires",
              scenes: {},
            })
            for (let i = 0; i < aerial_configs.length; i++) {
              this.aerialViewer.addScene(aerial_configs[i].id, aerial_configs[i]);
            }
            this.aerialViewer.loadScene('aerial1')
            window.aerialViewer = this.aerialViewer; // TODO: 目前viewer是全局的
          } else {
            console.error('aerialPanorama reference is not available');
          }
        })
      }
    }
  }
</script>

<style scoped>
.switch-aerial-button-group {
  position: absolute;
  bottom: 10px; /* 位于屏幕底部 */
  left: 50%; /* 水平中心 */
  transform: translateX(-50%); /* 向左偏移自身宽度的50%实现水平居中 */
  z-index: 10; /* 确保按钮在全景图之上 */
}
</style>