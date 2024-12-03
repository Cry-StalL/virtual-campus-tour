import axios from "axios";

const configs = [
    {
        id: '1-1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/1-1.jpg',
        hotSpots: [
            {
                pitch:  -13.876,
                yaw: 68.804,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: enterScene
            }
        ]
    },
    {
        id: '1-2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/1-2.jpg',
        hotSpots: [
            {
                pitch:  -33.737,
                yaw: -118.142,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: enterScene
            }
        ]
    },
]

function getNextPanorama(event, args) {
    const current_pano_id = window.streetPanoViewer.getConfig().id
    const direction = args[0]

    // 发送HTTP请求给后端: 传当前场景ID、参数给后端
    axios.get('http://localhost:8080/api/pano/next-pano', {
        params: {
            current_pano_id: current_pano_id,
            direction: direction
        },
    })
        .then(response => {
            // 切换到下张全景图
            const next_pano_id = response.data["next_pano_id"]

            // 获取真实ID
            axios.get('http://localhost:8080/api/pano/real-id', {
                params: {
                    id: next_pano_id,
                }
            }).then(response => {
                const next_pano_real_id = response.data["real-id"]

                // 加载新场景
                window.streetPanoViewer.loadScene(next_pano_real_id, window.streetPanoViewer.getPitch(), window.streetPanoViewer.getYaw(), window.streetPanoViewer.getHfov())
                // window.panoramaViewer.loadScene(next_pano_id)
            })


        })
        .catch(error => {
            console.error('请求失败', error);
        });
}

export default configs;