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

        this.viewer.addScene('0', configs[0])
        this.viewer.addScene('1', configs[1])
        this.viewer.addScene('2', configs[2])
        this.viewer.addScene('3', configs[3])

        this.viewer.loadScene('0')

        this.viewer.on('mousedown', (event) =>{
          console.log(this.viewer.mouseEventToCoords(event));
        });
      },
    }
  };
</script>
  
<style>
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>