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

        // 添加鼠标点击事件监听器
        this.$refs.panorama.addEventListener('mousedown', this.getMouseCoords);
      },

      getMouseCoords(event) {
        // 使用 viewer.mouseEventToCoords 获取光标位置的 yaw 和 pitch
        const coords = this.viewer.mouseEventToCoords(event);

        if (coords) {
          const yaw = coords[0];   // 水平方向的角度
          const pitch = coords[1]; // 垂直方向的角度

          console.log(`Yaw: ${yaw}, Pitch: ${pitch}`);

        }

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