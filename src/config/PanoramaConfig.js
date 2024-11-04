import axios from "axios";
// import ../

const configs = [
    {
        id: '1-1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/1-1.jpg',
        hotSpots: [
            {
                pitch:  -17.058,
                yaw: -87.394,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            }
        ]
    },
    {
        id: '1-2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/1-2.jpg',
        hotSpots: [
            {
                pitch:  -9.591,
                yaw: -179.579,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -10.126,
                yaw: 0.463,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            }
        ]
    },
    {
        id: '1-3,2-3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/1-3,2-3.jpg',
        hotSpots: [
            {
                pitch:  -8.621,
                yaw: -89.989,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['1']
            },
            {
                pitch:  -13.782,
                yaw: 90.910,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['2']
            },
            {
                pitch:  -11.780,
                yaw: 0.945,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['3']
            },
            {
                pitch:  -9.924,
                yaw: 178.715,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['4']
            }
        ]
    },
    {
        id: '1-4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/1-4.jpg',
        hotSpots: [
            {
                pitch:  -10.085,
                yaw: -0.082,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -10.715,
                yaw: 172.109,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            }
        ]
    },
    {
        id: '1-5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/1-5.jpg',
        hotSpots: [
            {
                pitch:  -10.085,
                yaw: -0.082,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: '2-1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/2-1.jpg',
        hotSpots: [
            {
                pitch:  -11.925,
                yaw: -89.813,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            }
        ]
    },
    {
        id: '2-2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/2-2.jpg',
        hotSpots: [
            {
                pitch:  -8.448,
                yaw: 179.257,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -12.518,
                yaw: 0.365,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            }
        ]
    },
    {
        id: '2-4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/2-4.jpg',
        hotSpots: [
            {
                pitch:  -11.268,
                yaw: -2.188,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -8.059,
                yaw: -179.963,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            }
        ]

    },
    {
        id: '2-5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/2-5.jpg',
        hotSpots: [
            {
                pitch:  -9.690,
                yaw: -0.108,
                type: 'scene',
                cssClass: "custom-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
]

function getNextPanorama(event, args) {
    const current_pano_id = window.panoramaViewer.getConfig().id
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
                window.panoramaViewer.loadScene(next_pano_real_id, window.panoramaViewer.getPitch(), window.panoramaViewer.getYaw(), window.panoramaViewer.getHfov())
                // window.panoramaViewer.loadScene(next_pano_id)
            })


        })
        .catch(error => {
            console.error('请求失败', error);
        });
}

export default configs;