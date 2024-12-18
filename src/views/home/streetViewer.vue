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

            const scene_id = this.viewer.getScene();  // 获取当前场景的ID

            axios.get('http://localhost:8080/api/user/GetComment', {
              params: {
                scene_id: scene_id,
              },
            })
                .then(response => {
                  console.log(response.data);

                  const comments = response.data.data;  // 获取评论数组
                  const num = response.data.num;        // 当前场景的留言数量

                  this.hotspotId = num + 1;    //新建hotspots的id

                  if (num > 0) {
                    for (let i = 0; i < num; i++) {
                      const comment = comments[i];

                      console.log(comment);

                      this.viewer.addHotSpot({
                        pitch: comment.Pitch,
                        yaw: comment.Yaw,
                        type: "info",
                        text: comment.Message,
                      });
                    }
                  }
                });
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