import axios from "axios";

const configs = [
    {
    id: 0,
    autoLoad: true,
    panorama: 'http://127.0.0.1:8080/static/panos/pano_0.jpg',
    hotSpots: [
        {
            pitch:  -3.562,
            yaw: -14.748,
            type: 'scene',
            clickHandlerFunc: getNextPanorama,
            clickHandlerArgs: ['+']
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
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -16.714,
                yaw: 100.570,
                type: 'scene',
                clickHandlerFunc: getNextPanorama,
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
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -11.200,
                yaw: -149.777,
                type: 'scene',
                clickHandlerFunc: getNextPanorama,
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
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    }
]

function getNextPanorama(event, args) {
    const current_pano = window.panoramaViewer.getConfig().id
    const direction = args[0]

    // 发送HTTP请求给后端: 传当前场景ID、参数给后端
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
            window.panoramaViewer.loadScene(next_pano_id, window.panoramaViewer.getPitch(), window.panoramaViewer.getYaw(), window.panoramaViewer.getHfov())
        })
        .catch(error => {
            console.error('请求失败', error);
        });
}

export default configs;