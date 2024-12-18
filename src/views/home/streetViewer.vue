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
            this.streetViewer = pannellum.viewer(this.$refs.streetPanorama, {
              scenes: {},
              "sceneFadeDuration": 1000,
            });

            for (let i = 0; i < configs.length; i++) {
              this.streetViewer.addScene(configs[i].id, configs[i]);
            }

            this.streetViewer.loadScene('byy_road1/1')

            // this.streetViewer.on('mousedown', (event) =>{
            //   console.log(this.viewer.mouseEventToCoords(event));
            // });

            window.streetViewer = this.streetViewer; // TODO: 目前viewer是全局的

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