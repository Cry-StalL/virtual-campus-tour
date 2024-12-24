<template>
  <div class="aerial-viewer-container">
    <div ref="aerialPanorama" :style="{position: 'absolute', width: '100%', height: '100%'}"></div>

    <!-- 按钮 -->
    <div class="switch-aerial-button-group">
      <el-button type="primary" class="aerial-button" @click="aerialViewer.loadScene('aerial0')">xxx上空</el-button>
      <el-button type="primary" class="aerial-button" @click="aerialViewer.loadScene('aerial1')">若海湖上空</el-button>
      <el-button type="primary" class="aerial-button" @click="aerialViewer.loadScene('aerial2')">教学楼上空</el-button>
      <el-button type="primary" class="aerial-button" @click="aerialViewer.loadScene('aerial3')">榕园上空</el-button>
    </div>
  </div>
</template>

<script >
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import {aerial_configs} from "@/config/PanoramaConfig.js";

  export default {
    data() {
      return {
        aerialViewer: null,
      }
    },

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

            this.aerialViewer.on('mousedown', (event) =>{
              console.log(this.aerialViewer.mouseEventToCoords(event));
            });

          } else {
            console.error('aerialPanorama reference is not available');
          }


        })
      }
    }
  }
</script>

<style scoped>
.aerial-viewer-container {
  position: relative;
  width: 100%; /* 占满整个屏幕宽度 */
  height: 100vh; /* 占满整个屏幕高度 */
}

.switch-aerial-button-group {
  position: absolute;
  bottom: 10px; /* 位于屏幕底部 */
  left: 50%; /* 水平中心 */
  transform: translateX(-50%); /* 向左偏移自身宽度的50%实现水平居中 */
}
</style>