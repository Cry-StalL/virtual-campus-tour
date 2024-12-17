<template>
  <div ref="aerialPanorama" :style="{position: 'absolute', width: '100%', height: '100%', zIndex: 1}"></div>
</template>

<script >
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import {aerial_configs, state} from "@/config/PanoramaConfig.js";

  export default {
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
          } else {
            console.error('aerialPanorama reference is not available');
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>