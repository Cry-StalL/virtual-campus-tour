<template>
  <div ref="multiResPanorama" :style="{position: 'absolute', width: '100%', height: '100%', zIndex: 1}"></div>
</template>

<script >
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import {configs, state} from "@/config/PanoramaConfig.js";

  export default {
    mounted() {
      this.initMultiResPanorama();
    },

    methods: {
      initMultiResPanorama() {
        this.$nextTick(() => {
          if (this.$refs.multiResPanorama) {
            this.multiResViewer = pannellum.viewer(this.$refs.multiResPanorama, {
              "type": "multires",
              "multiRes": {
                "basePath": "http://127.0.0.1:8080/static/panos/aerials/aerial_1",
                "path": "/%l/%s%y_%x",
                "fallbackPath": "/fallback/%s",
                "extension": "jpg",
                "tileResolution": 512,
                "maxLevel": 4,
                "cubeResolution": 3816
              }
            })
            for (let i = 0; i < configs.length; i++) {
              this.multiResViewer.addScene(configs[i].id, configs[i]);
            }
            this.multiResViewer.loadScene('aerial1')
            window.scenePanoViewer = this.multiResViewer; // TODO: 目前viewer是全局的
          } else {
            console.error('multiResPanorama reference is not available');
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>