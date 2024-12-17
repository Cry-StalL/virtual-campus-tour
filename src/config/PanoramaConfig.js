import { reactive } from 'vue'

export const aerial_configs = [
    {
        "id": "aerial1",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/aerials/aerial_1",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
    {
        "id": "aerial2",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/aerials/aerial_2",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
    {
        "id": "aerial3",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/aerials/aerial_3",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
    {
        "id": "aerial4",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/aerials/aerial_4",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
]

export const configs = [
    {
        id: '1-1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/1-1.jpg',
        hotSpots: [
            {
                pitch:  -12.2,
                yaw: 4.2,
                type: 'scene',
                cssClass: "scene-hotspot",
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
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene
            }
        ]
    },
]

export const state = reactive({
    isSceneVisible: false,
});

function getNextPanorama(event, args) {
    const current_scene_id = window.panoramaViewer.getConfig().id
    const direction = args[0]

    const [current_road, current_point] = current_scene_id.split('/');
    const current_point_id = parseInt(current_point, 10);
    let next_point_id = current_point_id;
    let next_scene_id = current_scene_id;

    if (direction == '-') {
        const current_point_id = parseInt(current_scene_id.split('/')[1], 10);
        next_point_id = current_point_id - 1;
        next_scene_id = current_road + '/' + next_point_id
    }else if (direction == '+') {
        const current_point_id = parseInt(current_scene_id.split('/')[1], 10);
        next_point_id = current_point_id + 1;
        next_scene_id = current_road + '/' + next_point_id
    }else{
        next_scene_id = direction;
    }

    // 加载新场景
    window.panoramaViewer.loadScene(next_scene_id, window.panoramaViewer.getPitch(), window.panoramaViewer.getYaw(), window.panoramaViewer.getHfov())
}

function enterScene() {
    state.isSceneVisible = true;
}