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
          panorama: 'src/assets/img/pano_7000.jpg',
          haov: 360, // 水平视角范围（360 表示全范围）
          vaov: 180, // 垂直视角范围（180 表示全范围）
          vOffset: 0, // 垂直偏移
          vOffset: 0, // 水平偏移
          // 其他配置项...

        });
  
        // 你可以在这里添加一些其他逻辑
  
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