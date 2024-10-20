<template>
    <div ref="panorama" style="width: 100%; height: 100vh;"></div>
</template>
  
<script>
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  
  export default {
    mounted() {
      this.initPanorama();
    },
    methods: {
      initPanorama() {
        const viewer = pannellum.viewer(this.$refs.panorama, {
          autoLoad: true,
          panorama: 'http://127.0.0.1:8080/static/panos/pano_7000.jpg',
          hotSpots: [
            {
              pitch:  -3.562,
              yaw: -14.748,
              type: 'scene',
              clickHandlerFunc: this.getNextPanorama,
              clickHandlerArgs: ['+']
            },
            {
              pitch:  -16.495,
              yaw: 138.978,
              type: 'scene',
              clickHandlerFunc: this.getNextPanorama,
              clickHandlerArgs: ['-']
            }
          ]
        });

        viewer.on('mousedown', function(event){
          console.log(viewer.mouseEventToCoords(event));
        });

      },

      getNextPanorama(event, arg) {
        console.log(arg);
        // 请求后端: 传当前场景、参数给后端

        //
      }

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