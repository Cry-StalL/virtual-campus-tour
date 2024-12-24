<template>
  <div class="street-viewer-container">
    <div ref="streetPanorama" :style="{position: 'absolute', width: '100%', height: '100%'}"></div>

    <el-button type="primary" class="back-to-aerial-button" @click="state.isStreetVisible=false">返回航拍图</el-button>
  </div>>
</template>

<script>
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import {street_configs, state} from "@/config/PanoramaConfig.js";

  export default {
    data() {
      return {
        streetViewer: null,
        state,
      }
    },

    mounted() {
      this.initStreetPanorama();
    },

    methods: {
      initStreetPanorama() {
        this.$nextTick(() => {
          if (this.$refs.streetPanorama){
            this.streetViewer = pannellum.viewer(this.$refs.streetPanorama, {
              scenes: {},
              "sceneFadeDuration": 1000,
              "minPitch": -65,
            });

            for (let i = 0; i < street_configs.length; i++) {
              this.streetViewer.addScene(street_configs[i].id, street_configs[i]);
            }

            this.streetViewer.loadScene(state.street_sceneID)

            this.streetViewer.on('mousedown', (event) =>{
              console.log(this.streetViewer.mouseEventToCoords(event));
            });

            window.streetViewer = this.streetViewer; // TODO: 目前viewer是全局的

          }else{
            console.error('streetPanorama reference is not available');
          }
        })
      },
    }
  }
</script>

<style scoped>
.street-viewer-container {
  position: relative;
  width: 100%; /* 占满整个屏幕宽度 */
  height: 100vh; /* 占满整个屏幕高度 */
}

.back-to-aerial-button {
  position: absolute;
  bottom: 15px;
  left: 15px;
}
</style>