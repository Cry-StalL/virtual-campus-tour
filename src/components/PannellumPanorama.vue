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
        const configs = [{
          id: 0,
          autoLoad: true,
          panorama: 'http://127.0.0.1:8080/static/panos/pano_0.jpg',  
          hotSpots: [
            {
              pitch:  -3.562,
              yaw: -14.748,
              type: 'scene',

              cssClass: "custom-hotspot",

              createTooltipFunc: this.hotspot,
              createTooltipArgs: "xxx", 

              clickHandlerFunc: this.getNextPanorama,
              clickHandlerArgs: ['+'],
            }
          ]
        },
          {
            id: 1,
            autoLoad: true,
            panorama: 'http://127.0.0.1:8080/static/panos/pano_1.jpg',
            hotSpots: [
              {
                pitch:  -25.727,
                yaw: -95.330,
                type: 'scene',
                //cssClass: "custom-hotspot",
                clickHandlerFunc: this.getNextPanorama,
                clickHandlerArgs: ['+']
              },
              {
                pitch:  -16.714,
                yaw: 100.570,
                type: 'scene',
                clickHandlerFunc: this.getNextPanorama,
                clickHandlerArgs: ['-']
              }
            ]
          },
          {
            id: 2,
            autoLoad: true,
            panorama: 'http://127.0.0.1:8080/static/panos/pano_2.jpg',
            hotSpots: [
              {
                pitch:  -14.975,
                yaw: -7.043,
                type: 'scene',
                clickHandlerFunc: this.getNextPanorama,
                clickHandlerArgs: ['+']
              },
              {
                pitch:  -11.200,
                yaw: -149.777,
                type: 'scene',
                clickHandlerFunc: this.getNextPanorama,
                clickHandlerArgs: ['-']
              }
            ]
          },
          {
            id: 3,
            autoLoad: true,
            panorama: 'http://127.0.0.1:8080/static/panos/pano_3.jpg',
            hotSpots: [
              {
                pitch:  -16.203,
                yaw: 179.270,
                type: 'scene',
                clickHandlerFunc: this.getNextPanorama,
                clickHandlerArgs: ['-']
              }
            ]
          }
          ]

        this.viewer = pannellum.viewer(this.$refs.panorama, {
          scenes: {},
          "sceneFadeDuration": 1000,
        });

        this.viewer.addScene('0', configs[0])
        this.viewer.addScene('1', configs[1])
        this.viewer.addScene('2', configs[2])
        this.viewer.addScene('3', configs[3])

        this.viewer.loadScene('0')

        this.viewer.on('mousedown', (event) =>{
          console.log(this.viewer.mouseEventToCoords(event));
        });

      },

      // Hot spot creation function
      hotspot(hotSpotDiv, args) {
        hotSpotDiv.classList.add('custom-tooltip');
        var span = document.createElement('span');
        span.innerHTML = args;
        hotSpotDiv.appendChild(span);
        span.style.width = span.scrollWidth - 20 + 'px';
        span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
        span.style.marginTop = -span.scrollHeight - 12 + 'px';
      },

      getNextPanorama(event, args) {
        const current_pano = this.viewer.getConfig().panorama
        const direction = args[0]

        // 发送HTTP请求给后端: 传当前场景、参数给后端
        axios.get('http://localhost:8080/api/next-pano', {
          params: {
            current_pano: current_pano,
            direction: direction
          },
        })
        .then(response => {
          console.log(response.data);

          // 切换到下张全景图
          const next_pano_id = response.data["next_pano_id"]

          // 加载新场景
          this.viewer.loadScene(next_pano_id, this.viewer.getPitch(), this.viewer.getYaw(), this.viewer.getHfov())
        })
        .catch(error => {
          console.error('请求失败', error);
        });
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