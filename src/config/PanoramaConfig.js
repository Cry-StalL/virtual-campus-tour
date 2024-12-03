import axios from "axios";
// import ../

const configs = [
    {
        id: 'aerial1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/aerial/1.jpg',
    },
]

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

export default configs;