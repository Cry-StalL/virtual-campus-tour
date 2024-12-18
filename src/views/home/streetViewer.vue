<template>
  <div ref="streetPanorama" :style="{position: 'absolute', width: '100%', height: '100%', zIndex: 1}"></div>
</template>

<script>
  import 'pannellum'
  import 'pannellum/build/pannellum.css'
  import {configs} from "@/config/PanoramaConfig.js";
  import axios from "axios";

  export default {
    data() {
      return {
        streetViewer: null
      }
    },

    mounted() {
      this.initStreetPanorama();
    },

    methods: {
      initStreetPanorama() {
        this.$nextTick(() => {
          if (this.$refs.streetPanorama){
            this.viewer = pannellum.viewer(this.$refs.streetPanorama, {
              scenes: {},
              "sceneFadeDuration": 1000,
            });

            for (let i = 0; i < configs.length; i++) {
              this.viewer.addScene(configs[i].id, configs[i]);
            }

            this.viewer.loadScene('1-1')

            this.viewer.on('mousedown', (event) =>{
              console.log(this.viewer.mouseEventToCoords(event));
            });

            window.streetViewer = this.viewer; // TODO: 目前viewer是全局的

          }else{
            console.error('streetPanorama reference is not available');
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>