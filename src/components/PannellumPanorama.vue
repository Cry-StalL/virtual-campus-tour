<template>
    <div ref="panorama" style="width: 100%; height: 100vh;"></div>
</template>
  
<script>
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import configs from '../config/PanoramaConfig.js'
  
  export default {
    mounted() {
      this.initPanorama();
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
</style>