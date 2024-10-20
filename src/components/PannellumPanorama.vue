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
        });

        viewer.on('mousedown', function(event){
          console.log(viewer.mouseEventToCoords(event));
        });

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