<template>
    <div ref="panorama" style="width: 100%; height: 100vh;"></div>
</template>
  
<script>
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import axios from 'axios'
  
  export default {
    mounted() {
      this.initPanorama();
    },
    methods: {
      initPanorama() {
        this.viewer = pannellum.viewer(this.$refs.panorama, {
          autoLoad: true,
          panorama: 'http://127.0.0.1:8080/static/panos/pano_1.jpg',
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

        this.viewer.on('mousedown', function(event){
          console.log(viewer.mouseEventToCoords(event));
        });

      },

      getNextPanorama(event, arg) {
        const current_pano = this.viewer.getConfig().panorama

        // 发送HTTP请求给后端: 传当前场景、参数给后端
        axios.get('http://localhost:8080/api/next-pano', {
          params: {
            current_pano: current_pano,
            arg: arg
          },
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('请求失败', error);
        });

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