import { reactive } from 'vue'

export const street_configs = [
    {
        id: 'byy_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/1.jpg',
        hotSpots: [
            {
                pitch:  -12.3,
                yaw: 7.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ry_road1/17']
            }
        ]
    },
    {
        id: 'ry_road2/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/1.jpg',
        hotSpots: [
            {
                pitch:  -22.3,
                yaw: -85.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.8,
                yaw: 111.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ry_road1/17']
            }
        ]
    },
    {
        id: 'ry_road2/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/2.jpg',
        hotSpots: [
            {
                pitch:  -15.2,
                yaw: -138.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.4,
                yaw: 68.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/3.jpg',
        hotSpots: [
            {
                pitch:  -19.4,
                yaw: 177.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.3,
                yaw: 16.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/4.jpg',
        hotSpots: [
            {
                pitch:  -18.1,
                yaw: 173.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.6,
                yaw: -2.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/5.jpg',
        hotSpots: [
            {
                pitch:  -20.3,
                yaw: 171.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.2,
                yaw: -2.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/6.jpg',
        hotSpots: [
            {
                pitch:  -16.0,
                yaw: 173.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.2,
                yaw: -4.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/7.jpg',
        hotSpots: [
            {
                pitch:  -17.7,
                yaw: 174.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.5,
                yaw: -7.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/8.jpg',
        hotSpots: [
            {
                pitch:  -17.4,
                yaw: 170.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.6,
                yaw: -7.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/9.jpg',
        hotSpots: [
            {
                pitch:  -19.1,
                yaw: 172.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.9,
                yaw: -5.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/10.jpg',
        hotSpots: [
            {
                pitch:  -23.6,
                yaw: 172.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.1,
                yaw: -6.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/11.jpg',
        hotSpots: [
            {
                pitch:  -20.2,
                yaw: 178.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.0,
                yaw: 1.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/12.jpg',
        hotSpots: [
            {
                pitch:  -18.6,
                yaw: 179.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -31.1,
                yaw: 3.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/13.jpg',
        hotSpots: [
            {
                pitch:  -19.3,
                yaw: 177.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {

                pitch: -27.4,
                yaw: 1.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/14.jpg',
        hotSpots: [
            {
                pitch:  -26.0,
                yaw: 177.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.1,
                yaw: 3.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/15.jpg',
        hotSpots: [
            {
                pitch:  -21.3,
                yaw: 153.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.0,
                yaw: 2.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/16.jpg',
        hotSpots: [
            {
                pitch:  -25.4,
                yaw: 142.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.8,
                yaw: -28.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road2/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road2/17.jpg',
        hotSpots: [
            {
                pitch:  -20.1,
                yaw: 145.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/13']
            },
            {
                pitch: -24.3,
                yaw: -27.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/2.jpg',
        hotSpots: [
            {
                pitch:  -10.7,
                yaw: 12.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.2,
                yaw: -166.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ry_road1/17']
            }
        ]
    },
    {
        id: 'byy_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -12.5,
                yaw: 11.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -14.4,
                yaw: 14.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.2,
                yaw: -163.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/5.jpg',
        hotSpots: [
            {
                pitch:  -19.1,
                yaw: 14.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -30.1,
                yaw: -154.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -10.2,
                yaw: 14.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -30.0,
                yaw: -160.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/7.jpg',
        hotSpots: [
            {
                pitch:  -12.1,
                yaw: 16.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -31.6,
                yaw: -161.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/8.jpg',
        hotSpots: [
            {
                pitch:  -19.1,
                yaw: 17.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.7,
                yaw: -163.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/9.jpg',
        hotSpots: [
            {
                pitch:  -19.5,
                yaw: 16.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.5,
                yaw: -165.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/10.jpg',
        hotSpots: [
            {
                pitch:  -17.5,
                yaw: 15.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.2,
                yaw: -162.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/11.jpg',
        hotSpots: [
            {
                pitch:  -12.3,
                yaw: 7.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.7,
                yaw: -166.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/12.jpg',
        hotSpots: [
            {
                pitch:  -17.5,
                yaw: 2.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/13.jpg',
        hotSpots: [
            {
                pitch:  -13.0,
                yaw: -1.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -18.4,
                yaw: -172.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/14.jpg',
        hotSpots: [
            {
                pitch:  -20.3,
                yaw: -20.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.6,
                yaw: 167.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/15.jpg',
        hotSpots: [
            {
                pitch:  -13.0,
                yaw: -11.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.4,
                yaw: 175.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/16.jpg',
        hotSpots: [
            {
                pitch:  -15.0,
                yaw: 14.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.9,
                yaw: -171.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -8.9,
                yaw: 34.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['byy_road2/1']
            }
        ]
    },
    {
        id: 'byy_road2/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road2/1.jpg',
        hotSpots: [
            {
                pitch:  -17.9,
                yaw: 39.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.5,
                yaw: -154.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['byy_road1/16']
            }
        ]
    },
    {
        id: 'byy_road2/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road2/2.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 44.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.6,
                yaw: -136.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },{
        id: 'byy_road2/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road2/3.jpg',
        hotSpots: [
            {
                pitch:  -25.8,
                yaw: 45.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -30.1,
                yaw: -135.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },{
        id: 'byy_road2/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road2/4.jpg',
        hotSpots: [
            {
                pitch:  -29.2,
                yaw: 44.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.1,
                yaw: -135.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },{
        id: 'byy_road2/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road2/5.jpg',
        hotSpots: [
            {
                pitch:  -29.2,
                yaw: 42.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -35.0,
                yaw: -136.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },{
        id: 'byy_road2/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road2/6.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -139.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/17.jpg',
        hotSpots: [
            {
                pitch:  -12.3,
                yaw: 7.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.5,
                yaw: -154.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/18.jpg',
        hotSpots: [
            {
                pitch:  -16.0,
                yaw: 12.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.6,
                yaw: -168.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/19.jpg',
        hotSpots: [
            {
                pitch:  -20.9,
                yaw: 10.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.7,
                yaw: -165.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/20.jpg',
        hotSpots: [
            {
                pitch:  -12.3,
                yaw: 11.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.5,
                yaw: -166.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'byy_road1/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/21.jpg',
        hotSpots: [
            {
                pitch:  -12.3,
                yaw: 7.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.3,
                yaw: -166.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'byy_road1/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/22.jpg',
        hotSpots: [
            {
                pitch:  -13.2,
                yaw: 56.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.5,
                yaw: -154.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'byy_road1/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/23.jpg',
        hotSpots: [
            {
                pitch:  -19.5,
                yaw: 57.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -12.4,
                yaw: -131.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'byy_road1/24',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/24.jpg',
        hotSpots: [
            {
                pitch:  -12.3,
                yaw: 7.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.5,
                yaw: -154.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'byy_road1/25',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/25.jpg',
        hotSpots: [
            {
                pitch:  -18.6,
                yaw: 1.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -18.5,
                yaw: -170.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'byy_road1/26',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/26.jpg',
        hotSpots: [
            {
                pitch:  -12.3,
                yaw: 7.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -15.8,
                yaw: -172.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'byy_road1/27',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/27.jpg',
        hotSpots: [
            {
                pitch:  -17.1,
                yaw: 2.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -16.2,
                yaw: -172.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'byy_road1/28',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/28.jpg',
        hotSpots: [
            {
                pitch:  -19.1,
                yaw: 2.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -19.9,
                yaw: -172.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'byy_road1/29',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/29.jpg',
        hotSpots: [
            {
                pitch:  -22.3,
                yaw: 8.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.4,
                yaw: -171.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'byy_road1/30',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/byy_road1/30.jpg',
        hotSpots: [
            {
                pitch: -14.6,
                yaw: -174.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/1.jpg',
        hotSpots: [
            {
                pitch:  -14.8,
                yaw: -148.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.7,
                yaw: 17.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/16']
            }
        ]
    },
    {
        id: 'ry_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/2.jpg',
        hotSpots: [
            {
                pitch:  -9.9,
                yaw: 121.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.5,
                yaw: -60.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -21.5,
                yaw: 119.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.2,
                yaw: -57.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -23.0,
                yaw: 120.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {

                pitch: -23.9,
                yaw: -55.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/5.jpg',
        hotSpots: [
            {
                pitch:  -28.6,
                yaw: 123.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.3,
                yaw: -56.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -22.3,
                yaw: 124.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.7,
                yaw: -57.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/7.jpg',
        hotSpots: [
            {
                pitch:  -25.8,
                yaw: 129.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.9,
                yaw: -54.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/8.jpg',
        hotSpots: [
            {
                pitch:  -20.0,
                yaw: 123.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.9,
                yaw: -53.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/9.jpg',
        hotSpots: [
            {
                pitch:  -25.0,
                yaw: 126.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.9,
                yaw: -56.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/10.jpg',
        hotSpots: [
            {
                pitch:  -22.4,
                yaw: 122.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.5,
                yaw: -56.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/11.jpg',
        hotSpots: [
            {
                pitch:  -23.6,
                yaw: 114.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.1,
                yaw: -60.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/12.jpg',
        hotSpots: [
            {
                pitch:  -26.1,
                yaw: 111.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.6,
                yaw: -67.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/13.jpg',
        hotSpots: [
            {
                pitch:  -21.9,
                yaw: 112.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-23.0,
                yaw: -66.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/14.jpg',
        hotSpots: [
            {
                pitch:  -19.3,
                yaw: 114.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.1,
                yaw: -67.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/15.jpg',
        hotSpots: [
            {
                pitch:  -22.3,
                yaw: 121.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.2,
                yaw: -56.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/16.jpg',
        hotSpots: [
            {
                pitch:  -22.7,
                yaw: 128.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.5,
                yaw: -48.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ry_road1/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ry_road1/17.jpg',
        hotSpots: [
            {
                pitch:   -14.9,
                yaw: 139.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['byy_road1/2']
            },
            {
                pitch: -31.7,
                yaw: -48.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -17.1,
                yaw: 39.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ry_road2/1']
            }
        ]
    },
    {
        id: 'yxdd_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/1.jpg',
        hotSpots: [
            {
                pitch:  -19.4,
                yaw: -171.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.5,
                yaw: -77.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road2/1']
            },
            {
                pitch: -25.6,
                yaw: 12.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tq_road1/1']
            }
        ]
    },
    {
        id: 'yxdd_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/2.jpg',
        hotSpots: [
            {
                pitch:  -25.4,
                yaw: 169.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.3,
                yaw: -7.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -26.7,
                yaw: 169.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.8,
                yaw: -3.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -27.5,
                yaw: 168.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.3,
                yaw: -1.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/5.jpg',
        hotSpots: [
            {
                pitch:  -27.1,
                yaw: 169.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.9,
                yaw: 1.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -27.2,
                yaw: 170.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.1,
                yaw: -0.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/7.jpg',
        hotSpots: [
            {
                pitch:  -26.2,
                yaw: 160.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.7,
                yaw: 14.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/8.jpg',
        hotSpots: [
            {
                pitch:  -28.7,
                yaw: 173.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.8,
                yaw: 5.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/9.jpg',
        hotSpots: [
            {
                pitch:  -28.7,
                yaw: 169.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.6,
                yaw: 7.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/10.jpg',
        hotSpots: [
            {
                pitch:  -27.7,
                yaw: 175.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.0,
                yaw: 5.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/11.jpg',
        hotSpots: [
            {
                pitch:  -29.0,
                yaw: 175.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.7,
                yaw: 4.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/12.jpg',
        hotSpots: [
            {
                pitch:  -29.2,
                yaw: 167.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.4,
                yaw: 12.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/13.jpg',
        hotSpots: [
            {
                pitch:  -30.3,
                yaw: 173.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.4,
                yaw: 7.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -24.9,
                yaw: 68.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ry_road2/17']
            }
        ]
    },
    {
        id: 'yxdd_road1/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/14.jpg',
        hotSpots: [
            {
                pitch:  -28.5,
                yaw: 177.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -31.3,
                yaw: 5.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/15.jpg',
        hotSpots: [
            {
                pitch: -30.6,
                yaw: 176.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.5,
                yaw: 7.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/16.jpg',
        hotSpots: [
            {
                pitch:  -27.9,
                yaw: -178.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.3,
                yaw: 7.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -23.0,
                yaw: 92.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ry_road1/1']
            }
        ]
    },
    {
        id: 'yxdd_road1/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/17.jpg',
        hotSpots: [
            {
                pitch:  -29.9,
                yaw: 178.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -36.1,
                yaw: 12.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/18.jpg',
        hotSpots: [
            {
                pitch:  -27.8,
                yaw: 177.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -34.7,
                yaw: 9.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -22.9,
                yaw: -86.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road5/1']
            }
        ]
    },
    {
        id: 'hl_road5/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road5/1.jpg',
        hotSpots: [
            {
                pitch:  -21.3,
                yaw: -81.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.4,
                yaw: 85.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/18']
            }
        ]
    },
    {
        id: 'hl_road5/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road5/2.jpg',
        hotSpots: [
            {
                pitch:  -23.3,
                yaw: -82.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.1,
                yaw: 89.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road5/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road5/3.jpg',
        hotSpots: [
            {
                pitch:  -27.2,
                yaw: -85.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.5,
                yaw: 88.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road5/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road5/4.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw: -88.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road3/25']
            },
            {
                pitch: -27.0,
                yaw: 97.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/19.jpg',
        hotSpots: [
            {
                pitch:  -28.7,
                yaw: 176.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.9,
                yaw: 10.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/20.jpg',
        hotSpots: [
            {
                pitch:  -29.9,
                yaw: 177.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.6,
                yaw: 9.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/21.jpg',
        hotSpots: [
            {
                pitch:  -30.3,
                yaw: 175.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.9,
                yaw: 12.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/22.jpg',
        hotSpots: [
            {
                pitch:  -32.8,
                yaw: 174.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -32.7,
                yaw: 14.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/23.jpg',
        hotSpots: [
            {
                pitch:  -32.0,
                yaw: -179.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.9,
                yaw: 9.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/24',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/24.jpg',
        hotSpots: [
            {
                pitch:  -31.0,
                yaw: 177.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.8,
                yaw: 10.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/25',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/25.jpg',
        hotSpots: [
            {
                pitch:  -29.7,
                yaw: 175.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.0,
                yaw: 12.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/26',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/26.jpg',
        hotSpots: [
            {
                pitch:  -30.3,
                yaw: -179.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.0,
                yaw: 8.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/27',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/27.jpg',
        hotSpots: [
            {
                pitch:  -29.7,
                yaw: 179.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.5,
                yaw: 7.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/28',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/28.jpg',
        hotSpots: [
            {
                pitch:  -31.1,
                yaw: -179.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.4,
                yaw: 7.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/29',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/29.jpg',
        hotSpots: [
            {
                pitch:  -28.6,
                yaw: -178.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.6,
                yaw: 7.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/30',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/30.jpg',
        hotSpots: [
            {
                pitch:  -29.7,
                yaw: -178.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.8,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/31',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/31.jpg',
        hotSpots: [
            {
                pitch:  -30.6,
                yaw: -178.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.8,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/32',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/32.jpg',
        hotSpots: [
            {
                pitch:  -29.4,
                yaw: -179.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.4,
                yaw: 9.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:25.5,
                yaw:-84.8,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['hl_2']
            },
        ]
    },
    {
        id: 'yxdd_road1/33',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/33.jpg',
        hotSpots: [
            {
                pitch: -30.9,
                yaw: 179.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.8,
                yaw: 11.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -17.4,
                yaw: 105.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ly_road4/7']
            }
        ]
    },
    {
        id: 'yxdd_road1/34',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/34.jpg',
        hotSpots: [
            {
                pitch:  -30.5,
                yaw: -179.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.5,
                yaw: 12.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -20.7,
                yaw: -89.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road4/8']
            },
            {
                pitch:24.8,
                yaw:-55.9,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['hl_2']
            },
        ]
    },
    {
        id: 'hl_road4/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road4/8.jpg',
        hotSpots: [
            {
                pitch:  -17.0,
                yaw: 93.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/34']
            },
            {
                pitch:  -17.0,
                yaw: -86.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:27.6,
                yaw:-49.5,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['hl_2']
            },
        ]
    },
    {
        id: 'hl_road4/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road4/7.jpg',
        hotSpots: [
            {
                pitch:  -21.8,
                yaw: 92.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.6,
                yaw: -86.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:33.9,
                yaw:-36.6,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['hl_2']
            },
        ]
    },
    {
        id: 'hl_road4/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road4/6.jpg',
        hotSpots: [
            {
                pitch:  -18.0,
                yaw: 93.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -17.6,
                yaw: -86.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -13.3,
                yaw: 4.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road3/16']
            },
            {
                pitch: -14.8,
                yaw: -174.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road3/15']
            },
            {
                pitch:36.5,
                yaw:-15.6,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['hl_2']
            },
        ]
    },
    {
        id: 'hl_road4/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road4/5.jpg',
        hotSpots: [
            {
                pitch:  -19.7,
                yaw: 94.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -15.6,
                yaw: -82.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road4/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road4/4.jpg',
        hotSpots: [
            {
                pitch:  -27.9,
                yaw: 92.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.0,
                yaw: -79.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road4/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road4/3.jpg',
        hotSpots: [
            {
                pitch:  -25.8,
                yaw: 96.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -21.1,
                yaw: -81.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road4/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road4/2.jpg',
        hotSpots: [
            {
                pitch:  -17.3,
                yaw: 96.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.8,
                yaw: -82.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road4/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road4/1.jpg',
        hotSpots: [
            {
                pitch:  -27.1,
                yaw: 95.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -21.1,
                yaw: -83.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road2/33']
            }
        ]
    },
    {
        id: 'yxdd_road1/35',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/35.jpg',
        hotSpots: [
            {
                pitch:  -32.6,
                yaw: -179.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.4,
                yaw: 15.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/36',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/36.jpg',
        hotSpots: [
            {
                pitch:  -31.1,
                yaw: 178.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.2,
                yaw: 11.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/37',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/37.jpg',
        hotSpots: [
            {
                pitch:  -31.3,
                yaw: 178.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.3,
                yaw: 14.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -17.4,
                yaw: 88.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ly_road1/1']
            }
        ]
    },
    {
        id: 'yxdd_road1/38',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/38.jpg',
        hotSpots: [
            {
                pitch:  -29.9,
                yaw: 177.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.3,
                yaw: 14.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/39',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/39.jpg',
        hotSpots: [
            {
                pitch:  -30.6,
                yaw: 176.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.6,
                yaw: 18.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/40',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/40.jpg',
        hotSpots: [
            {
                pitch:  -30.6,
                yaw: 177.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.2,
                yaw: 17.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/41',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/41.jpg',
        hotSpots: [
            {
                pitch:  -30.2,
                yaw: 176.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.4,
                yaw: 17.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -13.2,
                yaw: 78.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ly_road3/14']
            }
        ]
    },
    {
        id: 'yxdd_road1/42',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/42.jpg',
        hotSpots: [
            {
                pitch:  -32.1,
                yaw: 177.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.3,
                yaw: 15.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/43',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/43.jpg',
        hotSpots: [
            {
                pitch:   -28.0,
                yaw: -179.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.3,
                yaw: 13.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -30.8,
                yaw: -81.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road3/13']
            }
        ]
    },
    {
        id: 'yxdd_road1/44',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/44.jpg',
        hotSpots: [
            {
                pitch:  -30.2,
                yaw: -179.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -31.6,
                yaw: 15.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/45',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/45.jpg',
        hotSpots: [
            {
                pitch:  -29.2,
                yaw: 179.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.2,
                yaw: 12.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/46',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/46.jpg',
        hotSpots: [
            {
                pitch:  -31.1,
                yaw: -179.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.1,
                yaw: 13.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/47',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/47.jpg',
        hotSpots: [
            {
                pitch:  -30.6,
                yaw: 179.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.9,
                yaw: 12.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -12.2,
                yaw: 88.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ly_road2/1']
            }
        ]
    },
    {
        id: 'yxdd_road1/48',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/48.jpg',
        hotSpots: [
            {
                pitch:  -31.5,
                yaw: -176.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -30.6,
                yaw: 12.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/49',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/49.jpg',
        hotSpots: [
            {
                pitch:  -29.4,
                yaw: -178.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.9,
                yaw: 12.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/50',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/50.jpg',
        hotSpots: [
            {
                pitch:  -29.9,
                yaw: -177.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.7,
                yaw: 10.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/51',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/51.jpg',
        hotSpots: [
            {
                pitch:  -29.4,
                yaw: -177.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.2,
                yaw: 9.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/52',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/52.jpg',
        hotSpots: [
            {
                pitch:  -26.6,
                yaw: -175.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.2,
                yaw: 13.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -17.8,
                yaw: -83.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road3/1']
            }
        ]
    },
    {
        id: 'yxdd_road1/53',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/53.jpg',
        hotSpots: [
            {
                pitch:  -29.3,
                yaw: -177.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.2,
                yaw: 11.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/54',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/54.jpg',
        hotSpots: [
            {
                pitch:  -28.5,
                yaw: -177.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.5,
                yaw: 10.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/55',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/55.jpg',
        hotSpots: [
            {
                pitch: -29.3,
                yaw: -174.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.9,
                yaw: 13.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/56',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/56.jpg',
        hotSpots: [
            {
                pitch:  -28.9,
                yaw: -175.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.8,
                yaw: 14.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/57',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/57.jpg',
        hotSpots: [
            {
                pitch:  -26.5,
                yaw: 178.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.8,
                yaw: 15.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/58',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/58.jpg',
        hotSpots: [
            {
                pitch:  -25.8,
                yaw: 177.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.7,
                yaw: 17.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/59',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/59.jpg',
        hotSpots: [
            {
                pitch:  -26.3,
                yaw: -179.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.9,
                yaw: 13.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -21.8,
                yaw: -98.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jxl_road2/6']
            }
        ]
    },
    {
        id: 'yxdd_road1/60',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/60.jpg',
        hotSpots: [
            {
                pitch:  -27.4,
                yaw: 177.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.0,
                yaw: 15.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/61',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/61.jpg',
        hotSpots: [
            {
                pitch:  -27.6,
                yaw: 178.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.6,
                yaw: 15.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/62',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/62.jpg',
        hotSpots: [
            {
                pitch:  -27.6,
                yaw: 178.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.6,
                yaw: 14.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/63',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/63.jpg',
        hotSpots: [
            {
                pitch:  -26.5,
                yaw: 176.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.0,
                yaw: 15.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/64',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/64.jpg',
        hotSpots: [
            {
                pitch:  -30.3,
                yaw: 179.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.7,
                yaw: 15.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/65',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/65.jpg',
        hotSpots: [
            {
                pitch:  -30.5,
                yaw: 179.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.6,
                yaw: 13.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/66',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/66.jpg',
        hotSpots: [
            {
                pitch:  -30.8,
                yaw: -178.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.5,
                yaw: 12.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/67',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/67.jpg',
        hotSpots: [
            {
                pitch:  -31.2,
                yaw: -175.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.3,
                yaw: 10.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road1/68',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road1/68.jpg',
        hotSpots: [
            {
                pitch:  -22.7,
                yaw: 143.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road1/9']
            },
            {
                pitch: -29.8,
                yaw: 14.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -20.4,
                yaw: -131.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road1/0']
            }
        ]
    },
    {
        id: 'tq_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/1.jpg',
        hotSpots: [
            {
                pitch:  -21.2,
                yaw: -10.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.3,
                yaw: 174.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/1']
            }
        ]
    },
    {
        id: 'tq_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/2.jpg',
        hotSpots: [
            {
                pitch:  -30.2,
                yaw: -12.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.3,
                yaw: 174.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -35.6,
                yaw: -7.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -32.1,
                yaw: 177.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -38.3,
                yaw: 3.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -33.1,
                yaw: 166.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/5.jpg',
        hotSpots: [
            {
                pitch:  -33.2,
                yaw: 26.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -21.0,
                yaw: -151.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -35.5,
                yaw: 37.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.0,
                yaw: -137.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/7.jpg',
        hotSpots: [
            {
                pitch:   -31.4,
                yaw: 34.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.8,
                yaw: -137.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/8.jpg',
        hotSpots: [
            {
                pitch:  -31.6,
                yaw: -5.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.6,
                yaw: -168.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/9.jpg',
        hotSpots: [
            {
                pitch:  -37.4,
                yaw: -37.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.8,
                yaw: 154.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/10.jpg',
        hotSpots: [
            {
                pitch:  -27.9,
                yaw: -77.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -32.7,
                yaw: 120.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/11.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -83.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.61,
                yaw: 105.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/12.jpg',
        hotSpots: [
            {
                pitch:  -32.0,
                yaw: -90.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -31.2,
                yaw: 108.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/13.jpg',
        hotSpots: [
            {
                pitch: -34.9,
                yaw: -97.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -32.2,
                yaw: 103.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/14.jpg',
        hotSpots: [
            {
                pitch:  -29.4,
                yaw: -100.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -31.0,
                yaw: 97.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/15.jpg',
        hotSpots: [
            {
                pitch:  -28.1,
                yaw: -110.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -30.7,
                yaw: 89.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/16.jpg',
        hotSpots: [
            {
                pitch:  -30.0,
                yaw: -126.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -34.5,
                yaw: 80.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/17.jpg',
        hotSpots: [
            {
                pitch:  -30.5,
                yaw: -141.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.3,
                yaw: 52.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/18.jpg',
        hotSpots: [
            {
                pitch:  -30.3,
                yaw: -141.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.7,
                yaw: 53.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/19.jpg',
        hotSpots: [
            {
                pitch:  -28.2,
                yaw: -119.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.6,
                yaw: 65.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/20.jpg',
        hotSpots: [
            {
                pitch:   -30.3,
                yaw: -99.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.8,
                yaw: 82.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/21.jpg',
        hotSpots: [
            {
                pitch:  -30.0,
                yaw: -89.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.2,
                yaw: 103.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/22.jpg',
        hotSpots: [
            {
                pitch:  -27.4,
                yaw: -137.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.3,
                yaw: 57.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/23.jpg',
        hotSpots: [
            {
                pitch:  -27.7,
                yaw: -179.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.1,
                yaw: 14.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/24',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/24.jpg',
        hotSpots: [
            {
                pitch:  -26.3,
                yaw: 161.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.1,
                yaw: -6.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/25',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/25.jpg',
        hotSpots: [
            {
                pitch:  -22.7,
                yaw: 143.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.2,
                yaw: -26.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/26',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/26.jpg',
        hotSpots: [
            {
                pitch:  -22.7,
                yaw: 143.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.3,
                yaw: -27.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/27',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/27.jpg',
        hotSpots: [
            {
                pitch:  -22.7,
                yaw: 143.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.9,
                yaw: -30.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tq_road1/28',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tq_road1/28.jpg',
        hotSpots: [
            {
                pitch:  -22.7,
                yaw: 143.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road2/8']
            },
            {
                pitch: -21.8,
                yaw: -33.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/1.jpg',
        hotSpots: [
            {
                pitch:  -29.9,
                yaw: 178.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -36.1,
                yaw: 12.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/1']
            }
        ]
    },
    {
        id: 'hl_road2/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/2.jpg',
        hotSpots: [
            {
                pitch:  -29.9,
                yaw: 178.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.4,
                yaw: 2.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/3.jpg',
        hotSpots: [
            {
                pitch:  -29.9,
                yaw: 178.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -21.9,
                yaw: 2.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -21.9,
                yaw: 88.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road3/33']
            }
        ]
    },
    {
        id: 'hl_road2/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/4.jpg',
        hotSpots: [
            {
                pitch:  -29.9,
                yaw: 178.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.8,
                yaw: 2.53,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/5.jpg',
        hotSpots: [
            {
                pitch:  -29.9,
                yaw: 178.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -17.3,
                yaw: -0.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/6.jpg',
        hotSpots: [
            {
                pitch:  -27.9,
                yaw: 165.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -17.2,
                yaw: -8.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/7.jpg',
        hotSpots: [
            {
                pitch:   -28.7,
                yaw: 155.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-18.8,
                yaw: -16.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/8.jpg',
        hotSpots: [
            {
                pitch:  -30.5,
                yaw:  148.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.3,
                yaw: -21.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -22.5,
                yaw: -121.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tq_road1/28']
            }
        ]
    },
    {
        id: 'hl_road2/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/9.jpg',
        hotSpots: [
            {
                pitch:  -31.2,
                yaw: 142.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -15.9,
                yaw: -33.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/10.jpg',
        hotSpots: [
            {
                pitch:  -26.5,
                yaw: 132.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -15.5,
                yaw: -40.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/11.jpg',
        hotSpots: [
            {
                pitch:  -21.2,
                yaw: 121.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -10.4,
                yaw: -52.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/12.jpg',
        hotSpots: [
            {
                pitch:  -27.6,
                yaw: 111.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.1,
                yaw: -61.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/13.jpg',
        hotSpots: [
            {
                pitch:  -35.1,
                yaw: 95.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.9,
                yaw: -71.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/14.jpg',
        hotSpots: [
            {
                pitch:  -32.4,
                yaw: 94.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -21.7,
                yaw: -75.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/15.jpg',
        hotSpots: [
            {
                pitch:  -27.2,
                yaw: 86.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.5,
                yaw: -81.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/16.jpg',
        hotSpots: [
            {
                pitch:  -25.1,
                yaw: 83.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.6,
                yaw: -88.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/17.jpg',
        hotSpots: [
            {
                pitch:  -24.8,
                yaw: 73.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -14.8,
                yaw: -93.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/18.jpg',
        hotSpots: [
            {
                pitch:  -30.2,
                yaw: 68.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -13.5,
                yaw: -100.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/19.jpg',
        hotSpots: [
            {
                pitch:  -29.1,
                yaw: 67.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -15.6,
                yaw: -104.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/20.jpg',
        hotSpots: [
            {
                pitch:  -25.7,
                yaw: 64.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.2,
                yaw: -112.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/21.jpg',
        hotSpots: [
            {
                pitch:  -27.3,
                yaw: 59.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -16.6,
                yaw: -113.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/22.jpg',
        hotSpots: [
            {
                pitch:  -25.8,
                yaw: 54.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -14.5,
                yaw: -117.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/23.jpg',
        hotSpots: [
            {
                pitch:  -24.0,
                yaw:  46.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -13.4,
                yaw: -119.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/24',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/24.jpg',
        hotSpots: [
            {
                pitch:  -32.0,
                yaw: 44.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -13.9,
                yaw: -123.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/25',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/25.jpg',
        hotSpots: [
            {
                pitch:  -29.3,
                yaw: 49.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -16.7,
                yaw: -125.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/26',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/26.jpg',
        hotSpots: [
            {
                pitch:  -26.2,
                yaw: 44.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -17.8,
                yaw: -125.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/27',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/27.jpg',
        hotSpots: [
            {
                pitch:  -27.8,
                yaw: 47.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.1,
                yaw: -126.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/28',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/28.jpg',
        hotSpots: [
            {
                pitch:  -22.1,
                yaw: 48.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.4,
                yaw: -129.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/29',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/29.jpg',
        hotSpots: [
            {
                pitch:  -26.3,
                yaw: 45.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.4,
                yaw: -126.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/30',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/30.jpg',
        hotSpots: [
            {
                pitch:  -21.2,
                yaw: 55.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.3,
                yaw: -123.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/31',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/31.jpg',
        hotSpots: [
            {
                pitch:  -25.6,
                yaw: 62.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -17.5,
                yaw: -115.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/32',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/32.jpg',
        hotSpots: [
            {
                pitch:  -20.8,
                yaw: 68.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.1,
                yaw: -110.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/33',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/33.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: 77.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.5,
                yaw: -113.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -13.4,
                yaw: -22.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road4/1']
            }
        ]
    },
    {
        id: 'hl_road2/34',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/34.jpg',
        hotSpots: [
            {
                pitch:  -23.8,
                yaw: 70.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.5,
                yaw: -98.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/35',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/35.jpg',
        hotSpots: [
            {
                pitch:   -24.9,
                yaw: 76.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.7,
                yaw: -98.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/36',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/36.jpg',
        hotSpots: [
            {
                pitch:  -20.1,
                yaw: 80.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.2,
                yaw: -96.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/37',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/37.jpg',
        hotSpots: [
            {
                pitch:  -27.5,
                yaw: 83.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.8,
                yaw: -91.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/38',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/38.jpg',
        hotSpots: [
            {
                pitch:  -29.2,
                yaw: 83.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.5,
                yaw: -84.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road2/39',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road2/39.jpg',
        hotSpots: [
            {
                pitch:  -28.9,
                yaw: 88.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road1/11']
            },
            {
                pitch: -24.7,
                yaw: -87.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/1.jpg',
        hotSpots: [
            {
                pitch:  -14.3,
                yaw: 108.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.7,
                yaw: -87.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/52']
            }
        ]
    },
    {
        id: 'yxdd_road3/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/2.jpg',
        hotSpots: [
            {
                pitch:  -18.0,
                yaw: 106.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.2,
                yaw: -73.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/3.jpg',
        hotSpots: [
            {
                pitch:  -20.0,
                yaw: 143.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.2,
                yaw: -54.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/4.jpg',
        hotSpots: [
            {
                pitch:  -14.7,
                yaw: -170.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -21.9,
                yaw: -4.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/5.jpg',
        hotSpots: [
            {
                pitch:  -21.7,
                yaw:  -165.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.6,
                yaw: 16.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/6.jpg',
        hotSpots: [
            {
                pitch:  -18.2,
                yaw: -166.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.4,
                yaw: 16.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/7.jpg',
        hotSpots: [
            {
                pitch:   -29.3,
                yaw: -165.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -21.2,
                yaw: 15.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/8.jpg',
        hotSpots: [
            {
                pitch: -28.1,
                yaw: -165.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.4,
                yaw: 14.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/9.jpg',
        hotSpots: [
            {
                pitch:   -26.6,
                yaw: -167.91,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road3/10']
            },
            {
                pitch: -27.2,
                yaw: 16.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/10.jpg',
        hotSpots: [
            {
                pitch:  -29.6,
                yaw: -168.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.4,
                yaw: 16.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road3/10']
            }
        ]
    },
    {
        id: 'yxdd_road3/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/11.jpg',
        hotSpots: [
            {
                pitch:  -23.3,
                yaw: -171.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.4,
                yaw: 17.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/12.jpg',
        hotSpots: [
            {
                pitch:  -21.7,
                yaw: -174.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.3,
                yaw: 19.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/13.jpg',
        hotSpots: [
            {
                pitch:  -22.5,
                yaw: -169.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.3,
                yaw: 16.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/14.jpg',
        hotSpots: [
            {
                pitch:  -21.6,
                yaw: -168.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.5,
                yaw: 15.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/15.jpg',
        hotSpots: [
            {
                pitch:  -21.9,
                yaw: -169.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road4/6']
            },
            {
                pitch: -24.0,
                yaw: 14.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/16.jpg',
        hotSpots: [
            {
                pitch:  -22.6,
                yaw: -169.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.4,
                yaw: 14.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road4/6']
            },
            {
                pitch:47.0,
                yaw:157.7,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['hl_2']
            },
        ]
    },
    {
        id: 'yxdd_road3/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/17.jpg',
        hotSpots: [
            {
                pitch: -19.5,
                yaw: -169.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.3,
                yaw: 13.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:64.3,
                yaw:102.9,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['hl_2']
            },
        ]
    },
    {
        id: 'yxdd_road3/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/18.jpg',
        hotSpots: [
            {
                pitch:  -23.06,
                yaw: -169.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -17.3,
                yaw: 12.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:51.3,
                yaw:49.8,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['hl_2']
            },
        ]
    },
    {
        id: 'yxdd_road3/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/19.jpg',
        hotSpots: [
            {
                pitch:  -23.8,
                yaw: -171.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.9,
                yaw:  13.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:37.8,
                yaw:36.8,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['hl_2']
            },
        ]
    },
    {
        id: 'yxdd_road3/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/20.jpg',
        hotSpots: [
            {
                pitch:  -20.3,
                yaw: -171.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -17.4,
                yaw: 12.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:25.6,
                yaw:26.8,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['hl_2']
            },
        ]
    },
    {
        id: 'yxdd_road3/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/21.jpg',
        hotSpots: [
            {
                pitch:  -22.5,
                yaw: -172.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -16.2,
                yaw: 11.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/22.jpg',
        hotSpots: [
            {
                pitch:  -23.2,
                yaw:  -172.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.5,
                yaw: 9.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/23.jpg',
        hotSpots: [
            {
                pitch:  -19.8,
                yaw: -173.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.9,
                yaw: 11.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/24',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/24.jpg',
        hotSpots: [
            {
                pitch:  -19.7,
                yaw: -173.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -21.6,
                yaw: 9.1 ,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/25',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/25.jpg',
        hotSpots: [
            {
                pitch:  -20.6,
                yaw: -172.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.1,
                yaw: 7.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -15.4,
                yaw: -28.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road5/4']
            }
        ]
    },
    {
        id: 'yxdd_road3/26',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/26.jpg',
        hotSpots: [
            {
                pitch:  -21.3,
                yaw: -174.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.2,
                yaw: 9.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/27',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/27.jpg',
        hotSpots: [
            {
                pitch:  -21.2,
                yaw: -175.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -21.6,
                yaw: 8.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/28',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/28.jpg',
        hotSpots: [
            {
                pitch:  -19.3,
                yaw: -174.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.5,
                yaw: 8.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/29',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/29.jpg',
        hotSpots: [
            {
                pitch:  -24.2,
                yaw: -175.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.8,
                yaw: 7.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/30',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/30.jpg',
        hotSpots: [
            {
                pitch:  -16.8,
                yaw: -177.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.6,
                yaw:  6.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/31',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/31.jpg',
        hotSpots: [
            {
                pitch:  -21.9,
                yaw: -177.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.5,
                yaw: 2.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/32',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/32.jpg',
        hotSpots: [
            {
                pitch:  -20.8,
                yaw: -175.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.8,
                yaw: 6.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'yxdd_road3/33',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road3/33.jpg',
        hotSpots: [
            {
                pitch:  -15.1,
                yaw: -175.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.4,
                yaw: 4.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/1.jpg',
        hotSpots: [
            {
                pitch: -15.2,
                yaw: -167.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.0,
                yaw: 17.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road1/11']
            }
        ]
    },
    {
        id: 'hl_road3/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/2.jpg',
        hotSpots: [
            {
                pitch:  -16.6,
                yaw: -168.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.1,
                yaw: 15.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/3.jpg',
        hotSpots: [
            {
                pitch:  -21.5,
                yaw: -167.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.2,
                yaw: 13.91,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/4.jpg',
        hotSpots: [
            {
                pitch:  -18.0,
                yaw: -166.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.4,
                yaw: 15.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/5.jpg',
        hotSpots: [
            {
                pitch:  -19.4,
                yaw: -166.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.1,
                yaw: 11.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/6.jpg',
        hotSpots: [
            {
                pitch:  -21.7,
                yaw: -167.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.4,
                yaw: 15.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/7.jpg',
        hotSpots: [
            {
                pitch:  -20.4,
                yaw: -166.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.9,
                yaw: 13.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/8.jpg',
        hotSpots: [
            {
                pitch:  -20.5,
                yaw: -166.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.2,
                yaw: 12.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/9.jpg',
        hotSpots: [
            {
                pitch:  -20.3,
                yaw: -169.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.4,
                yaw: 4.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/10.jpg',
        hotSpots: [
            {
                pitch: -16.0,
                yaw: -166.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.4,
                yaw: 4.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -21.2,
                yaw: 101.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road3/10']
            },
            {
                pitch: -17.2,
                yaw: -80.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road3/9']
            }
        ]
    },
    {
        id: 'hl_road3/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/11.jpg',
        hotSpots: [
            {
                pitch:  -20.0,
                yaw: -169.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -31.1,
                yaw: 15.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/12.jpg',
        hotSpots: [
            {
                pitch:  -15.1,
                yaw: -175.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.4,
                yaw: 4.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road3/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road3/13.jpg',
        hotSpots: [
            {
                pitch:  -15.1,
                yaw: -175.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/43']
            },
            {
                pitch: -20.4,
                yaw: 4.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/1.jpg',
        hotSpots: [
            {
                pitch:  -17.1,
                yaw: 157.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -17.7,
                yaw: -25.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tsg_road1/1']
            },
            {
                pitch:  -12.7,
                yaw: -96.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jxl_road3/15']
            }
        ]
    },
    {
        id: 'hl_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/2.jpg',
        hotSpots: [
            {
                pitch:  -14.9,
                yaw: 167.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.4,
                yaw: -6.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -17.3,
                yaw: 160.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.6,
                yaw: -10.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -17.0,
                yaw: 156.37,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.9,
                yaw: -15.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/5.jpg',
        hotSpots: [
            {
                pitch:  -19.3,
                yaw: 150.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.2,
                yaw: -20.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -19.51,
                yaw: 146.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.0,
                yaw: -27.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/7.jpg',
        hotSpots: [
            {
                pitch: -20.1,
                yaw: 142.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -15.0,
                yaw: -31.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road1/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/8.jpg',
        hotSpots: [
            {
                pitch:  -22.0,
                yaw: 140.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.9,
                yaw: -32.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road1/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/9.jpg',
        hotSpots: [
            {
                pitch:  -19.2,
                yaw: 136.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.1,
                yaw: -35.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road1/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/10.jpg',
        hotSpots: [
            {
                pitch:  -17.4,
                yaw: 135.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.2,
                yaw: -35.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hl_road1/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hl_road1/11.jpg',
        hotSpots: [
            {
                pitch:  -18.4,
                yaw: 130.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road2/39']
            },
            {
                pitch: -17.2,
                yaw: -39.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -15.9,
                yaw: -156.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road3/1']
            }
        ]
    },
    {
        id: 'ly_road2/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/1.jpg',
        hotSpots: [
            {
                pitch:  -18.8,
                yaw: 67.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.8,
                yaw:  -84.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/47']
            }
        ]
    },
    {
        id: 'ly_road2/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/2.jpg',
        hotSpots: [
            {
                pitch: -36.5,
                yaw: 77.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -30.5,
                yaw: -103.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/3.jpg',
        hotSpots: [
            {
                pitch:  -28.5,
                yaw: 79.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.5,
                yaw: -100.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/4.jpg',
        hotSpots: [
            {
                pitch:  -23.2,
                yaw: 79.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.6,
                yaw: -101.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/5.jpg',
        hotSpots: [
            {
                pitch:  -29.7,
                yaw: 83.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -32.0,
                yaw: -102.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/6.jpg',
        hotSpots: [
            {
                pitch:  -28.5,
                yaw: 83.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -27.9,
                yaw: -98.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/7.jpg',
        hotSpots: [
            {
                pitch:  -28.2,
                yaw: 81.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.3,
                yaw: -101.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/8.jpg',
        hotSpots: [
            {
                pitch:  -22.7,
                yaw: 79.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.4,
                yaw: -99.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/9.jpg',
        hotSpots: [
            {
                pitch:  -28.9,
                yaw: 82.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -31.6,
                yaw: -101.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/10.jpg',
        hotSpots: [
            {
                pitch:  -33.7,
                yaw: 81.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -33.7,
                yaw: -98.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/11.jpg',
        hotSpots: [
            {
                pitch:  -35.7,
                yaw: 87.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.7,
                yaw: -101.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/12.jpg',
        hotSpots: [
            {
                pitch:  -22.2,
                yaw: 81.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.3,
                yaw: -97.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/13.jpg',
        hotSpots: [
            {
                pitch:  -24.5,
                yaw: 82.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.5,
                yaw: -98.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/14.jpg',
        hotSpots: [
            {
                pitch: -20.4,
                yaw: 78.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.6,
                yaw: -97.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/15.jpg',
        hotSpots: [
            {
                pitch:  -22.2,
                yaw: 80.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -28.8,
                yaw: -99.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/16.jpg',
        hotSpots: [
            {
                pitch:  -24.0,
                yaw: 78.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.9,
                yaw: -99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/17.jpg',
        hotSpots: [
            {
                pitch:  -26.0,
                yaw: 72.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -29.9,
                yaw: -106.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/18.jpg',
        hotSpots: [
            {
                pitch:  -23.0,
                yaw: 35.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -24.4,
                yaw: -124.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/19.jpg',
        hotSpots: [
            {
                pitch:  -23.4,
                yaw: -8.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.5,
                yaw: 178.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/20.jpg',
        hotSpots: [
            {
                pitch:  -26.6,
                yaw: -11.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.2,
                yaw: 169.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/21.jpg',
        hotSpots: [
            {
                pitch:  -25.7,
                yaw: -13.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.0,
                yaw: 168.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/22.jpg',
        hotSpots: [
            {
                pitch: -25.0,
                yaw: -10.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.5,
                yaw: 167.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road2/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road2/23.jpg',
        hotSpots: [
            {
                pitch:  -32.7,
                yaw: -82.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ly_road3/1']
            },
            {
                pitch:  -20.9,
                yaw: 153.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -20.9,
                yaw: 0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ly_road1/15']
            }
        ]
    },
    {
        id: 'ly_road3/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/1.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: -101.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:   -25.1,
                yaw: 77.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ly_road2/23']
            }
        ]
    },
    {
        id: 'ly_road3/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/2.jpg',
        hotSpots: [
            {
                pitch:  -24.4,
                yaw: -102.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.9,
                yaw: 79.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/3.jpg',
        hotSpots: [
            {
                pitch: -21.4,
                yaw: -100.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.5,
                yaw: 77.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/4.jpg',
        hotSpots: [
            {
                pitch:  -22.7,
                yaw: -99.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.97,
                yaw: 76.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/5.jpg',
        hotSpots: [
            {
                pitch:  -20.5,
                yaw: -99.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -11.7,
                yaw: 77.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/6.jpg',
        hotSpots: [
            {
                pitch:  -21.7,
                yaw: -99.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -18.0,
                yaw: 79.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/7.jpg',
        hotSpots: [
            {
                pitch:  -20.0,
                yaw: -99.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -19.6,
                yaw: 78.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/8.jpg',
        hotSpots: [
            {
                pitch:  -32.7,
                yaw: -82.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -19.9,
                yaw: 76.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/9.jpg',
        hotSpots: [
            {
                pitch:  -19.8,
                yaw: -99.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -18.4,
                yaw: 74.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/10.jpg',
        hotSpots: [
            {
                pitch:  -19.7,
                yaw: -97.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.0,
                yaw: 81.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/11.jpg',
        hotSpots: [
            {
                pitch: -25.2,
                yaw: -99.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.9,
                yaw: 78.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/12.jpg',
        hotSpots: [
            {
                pitch:  -24.7,
                yaw: -105.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.5,
                yaw: 80.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/13.jpg',
        hotSpots: [
            {
                pitch: -22.3,
                yaw: -95.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -18.5,
                yaw: 78.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road3/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road3/14.jpg',
        hotSpots: [
            {
                pitch:  -32.7,
                yaw: -82.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/41']
            },
            {
                pitch:  -20.2,
                yaw: 77.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/1.jpg',
        hotSpots: [
            {
                pitch:   -28.0,
                yaw: 70.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -32.8,
                yaw: -106.3,

                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/37']
            }
        ]
    },
    {
        id: 'ly_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/2.jpg',
        hotSpots: [
            {
                pitch:   -23.2,
                yaw: 72.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.4,
                yaw: -109.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -30.7,
                yaw: 70.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.2,
                yaw:  -106.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -34.8,
                yaw: 70.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -33.5,
                yaw: -107.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/5.jpg',
        hotSpots: [
            {
                pitch: -30.7,
                yaw:  68.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -33.9,
                yaw:-107.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -29.8,
                yaw: 67.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.4,
                yaw: -110.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/7.jpg',
        hotSpots: [
            {
                pitch:  -30.5,
                yaw: 65.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:   -33.3,
                yaw: -109.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/8.jpg',
        hotSpots: [
            {
                pitch:  -30.4,
                yaw: 72.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.1,
                yaw: -109.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -21.1,
                yaw: -22.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ly_road4/1']
            }
        ]
    },
    {
        id: 'ly_road1/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/9.jpg',
        hotSpots: [
            {
                pitch:  -32.2,
                yaw: 63.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:   -25.8,
                yaw: -114.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/10.jpg',
        hotSpots: [
            {
                pitch:  -32.0,
                yaw: 69.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.8,
                yaw: -111.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/11.jpg',
        hotSpots: [
            {
                pitch: -31.1,
                yaw: 74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.5,
                yaw: -114.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/12.jpg',
        hotSpots: [
            {
                pitch:  -20.2,
                yaw: 77.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.9,
                yaw: -114.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/13.jpg',
        hotSpots: [
            {
                pitch:  -20.2,
                yaw: 77.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -31.0,
                yaw: -103.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/14.jpg',
        hotSpots: [
            {
                pitch:  -22.8,
                yaw: 85.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:   -29.4,
                yaw: -106.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road1/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road1/15.jpg',
        hotSpots: [
            {
                pitch:  -20.3,
                yaw: 99.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ly_road2/23']
            },
            {
                pitch:  -30.4,
                yaw: -99.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road4/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road4/1.jpg',
        hotSpots: [
            {
                pitch:  -30.4,
                yaw: -99.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.3,
                yaw: 99.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['ly_road1/8']
            }
        ]
    },
    {
        id: 'ly_road4/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road4/2.jpg',
        hotSpots: [
            {
                pitch:  -30.1,
                yaw: -91.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.7,
                yaw: 87.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road4/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road4/3.jpg',
        hotSpots: [
            {
                pitch:   -27.9,
                yaw: -139.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.0,
                yaw: 41.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road4/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road4/4.jpg',
        hotSpots: [
            {
                pitch:  -29.2,
                yaw: -137.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.8,
                yaw: 47.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road4/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road4/5.jpg',
        hotSpots: [
            {
                pitch:  -28.6,
                yaw: -132.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.3,
                yaw: 45.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road4/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road4/6.jpg',
        hotSpots: [
            {
                pitch:  -24.5,
                yaw:-135.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -23.7,
                yaw: 43.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'ly_road4/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/ly_road4/7.jpg',
        hotSpots: [
            {
                pitch:  -28.8,
                yaw: -141.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/33']
            },
            {
                pitch:  -26.6,
                yaw: 37.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/1.jpg',
        hotSpots: [
            {
                pitch:  -19.2,
                yaw: 177.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.9,
                yaw: 11.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road1/1']
            }
        ]
    },
    {
        id: 'tsg_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/2.jpg',
        hotSpots: [
            {
                pitch:  -18.2,
                yaw: 167.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -25.5,
                yaw: 1.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -24.1,
                yaw:166.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.0,
                yaw: -7.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -21.3,
                yaw: 176.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.9,
                yaw: -0.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/5.jpg',
        hotSpots: [
            {
                pitch:  -16.9,
                yaw:  -172.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.8,
                yaw: 10.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -18.6,
                yaw: -162.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -19.1,
                yaw: 19.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/7.jpg',
        hotSpots: [
            {
                pitch:  -18.6,
                yaw: -155.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.6,
                yaw: 37.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/8.jpg',
        hotSpots: [
            {
                pitch:  -21.3,
                yaw: -164.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.6,
                yaw: 37.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/9.jpg',
        hotSpots: [
            {
                pitch:  -24.0,
                yaw: -175.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.6,
                yaw: 14.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/10.jpg',
        hotSpots: [
            {
                pitch:  -24.1,
                yaw: 170.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.7,
                yaw: 5.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/11.jpg',
        hotSpots: [
            {
                pitch:   -22.8,
                yaw: 160.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.0,
                yaw:  -11.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/12.jpg',
        hotSpots: [
            {
                pitch:  -20.3,
                yaw: 149.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -20.1,
                yaw: -21.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/13.jpg',
        hotSpots: [
            {
                pitch:  -19.8,
                yaw: 133.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -18.6,
                yaw:-33.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/14.jpg',
        hotSpots: [
            {
                pitch:  -22.8,
                yaw: 132.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.5,
                yaw: -40.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/15.jpg',
        hotSpots: [
            {
                pitch:  -22.0,
                yaw: 144.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.0,
                yaw: -30.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/16.jpg',
        hotSpots: [
            {
                pitch:  -19.6,
                yaw: 133.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -19.0,
                yaw: -41.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/17.jpg',
        hotSpots: [
            {
                pitch:  -21.2,
                yaw: 138.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -17.0,
                yaw: -31.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/18.jpg',
        hotSpots: [
            {
                pitch:  -20.0,
                yaw: 145.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -19.0,
                yaw: -29.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tsg_road1/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tsg_road1/19.jpg',
        hotSpots: [
            {
                pitch:  -18.6,
                yaw: 143.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road1/31']
            },
            {
                pitch:  -17.3,
                yaw: -24.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road1/1.jpg',
        hotSpots: [
            {
                pitch: -19.0,
                yaw: -29.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.0,
                yaw: 145.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road1/9']
            }
        ]
    },
    {
        id: 'jxl_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road1/2.jpg',
        hotSpots: [
            {
                pitch: -19.0,
                yaw: -29.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {   pitch:  -20.0,
                yaw: 145.6,

                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road1/3.jpg',
        hotSpots: [
            {

                pitch: -19.0,
                yaw: -29.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.0,
                yaw: 145.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road1/4.jpg',
        hotSpots: [
            {
                pitch: -19.0,
                yaw: -29.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {

                pitch:  -20.0,
                yaw: 145.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road1/5.jpg',
        hotSpots: [
            {
                pitch: -19.5,
                yaw: -51.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {

                pitch:  -20.0,
                yaw: 145.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -22.9,
                yaw: 24.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jxl_road2/1']
            },
            {
                pitch: -19.9,
                yaw: 133.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -22.1,
                yaw: -74.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jxl_road3/1']
            }
        ]
    },
    {
        id: 'jxl_road2/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road2/1.jpg',
        hotSpots: [
            {
                pitch:  -21.7,
                yaw: 35.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -22.6,
                yaw: -146.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jxl_road1/6']
            }
        ]
    },
    {
        id: 'jxl_road2/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road2/2.jpg',
        hotSpots: [
            {
                pitch:  -22.9,
                yaw: 24.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.9,
                yaw: -147.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road2/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road2/3.jpg',
        hotSpots: [
            {
                pitch:  -22.9,
                yaw: 24.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.0,
                yaw:-142.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road2/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road2/4.jpg',
        hotSpots: [
            {
                pitch:  -22.9,
                yaw: 24.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.3,
                yaw: -142.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road2/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road2/5.jpg',
        hotSpots: [
            {
                pitch:  -22.3,
                yaw: 31.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -17.2,
                yaw: -145.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road2/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road2/6.jpg',
        hotSpots: [
            {
                pitch:  -22.9,
                yaw: 24.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/59']
            },
            {
                pitch:-21.04,
                yaw: -140.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/1.jpg',
        hotSpots: [
            {
                pitch:  -28.7,
                yaw: 101.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.7,
                yaw: -78.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jxl_road1/6']
            }
        ]
    },
    {
        id: 'jxl_road3/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/2.jpg',
        hotSpots: [
            {
                pitch:  -25.6,
                yaw: 101.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-29.0,
                yaw:  -82.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/3.jpg',
        hotSpots: [
            {
                pitch:  -21.5,
                yaw: 92.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.9,
                yaw: -82.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/4.jpg',
        hotSpots: [
            {
                pitch:  -20.0,
                yaw: 47.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-21.7,
                yaw: -125.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/5.jpg',
        hotSpots: [
            {
                pitch:  -22.1,
                yaw: 42.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-21.04,
                yaw: -140.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/6.jpg',
        hotSpots: [
            {
                pitch:  -21.4,
                yaw: 34.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-21.04,
                yaw: -140.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/7.jpg',
        hotSpots: [
            {
                pitch:  -19.2,
                yaw: 7.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-21.4,
                yaw: -169.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/8.jpg',
        hotSpots: [
            {
                pitch:  -22.9,
                yaw: 24.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.6,
                yaw: -165.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/9.jpg',
        hotSpots: [
            {
                pitch:  -22.9,
                yaw: 24.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -21.8,
                yaw: -154.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/10.jpg',
        hotSpots: [
            {
                pitch: -22.5,
                yaw: 45.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-21.04,
                yaw: -140.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/11.jpg',
        hotSpots: [
            {
                pitch:  -21.9,
                yaw: 55.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.1,
                yaw: -128.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/12.jpg',
        hotSpots: [
            {
                pitch:  -17.9,
                yaw: 68.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.8,
                yaw: -117.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/13.jpg',
        hotSpots: [
            {
                pitch:  -19.1,
                yaw: 80.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.4,
                yaw: -105.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/14.jpg',
        hotSpots: [
            {
                pitch:  -18.8,
                yaw: 92.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.2,
                yaw: -93.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jxl_road3/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jxl_road3/15.jpg',
        hotSpots: [
            {
                pitch:  -14.6,
                yaw: 97.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hl_road1/1']
            },
            {
                pitch:-23.2,
                yaw:-80.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road1/1.jpg',
        hotSpots: [
            {
                pitch:  -20.6,
                yaw: 171.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-27.0,
                yaw: 1.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road2/31']
            },
            {
                pitch:-12.6,
                yaw: 91.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road2/1']
            }
        ]
    },
    {
        id: 'jy_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road1/2.jpg',
        hotSpots: [
            {
                pitch:  -16.8,
                yaw:  172.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.8,
                yaw: -2.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -15.6,
                yaw: 175.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-16.1,
                yaw:-2.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -18.5,
                yaw: 175.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-23.2,
                yaw:1.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road1/5.jpg',
        hotSpots: [
            {
                pitch:  -21.2,
                yaw: -174.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.2,
                yaw:14.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:-13.4,
                yaw:114.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tyg_road2/2']
            }
        ]
    },
    {
        id: 'jy_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road1/6.jpg',
        hotSpots: [
            {
                pitch: -23.7,
                yaw: -171.21,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.5,
                yaw: 19.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:9.4,
                yaw:-62.8,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['zhongshanxiang']
            },
        ]
    },
    {
        id: 'jy_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road1/7.jpg',
        hotSpots: [
            {
                pitch:  -23.6,
                yaw: -170.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-24.9,
                yaw:20.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:8.6,
                yaw:-47.6,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['zhongshanxiang']
            },
        ]
    },
    {
        id: 'jy_road1/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road1/8.jpg',
        hotSpots: [
            {
                pitch:  -25.7,
                yaw: -165.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-17.7,
                yaw:16.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:7.3,
                yaw:-28.4,
                type: 'scene',
                cssClass: "scene-hotspot",
                clickHandlerFunc: enterScene,
                clickHandlerArgs: ['zhongshanxiang']
            },
        ]
    },
    {
        id: 'jy_road1/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road1/9.jpg',
        hotSpots: [
            {
                pitch:  -25.7,
                yaw: -165.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road2/1']
            },
            {
                pitch:-27.0,
                yaw:-6.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/68']
            },
            {
                pitch:-23.0,
                yaw:97.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
        ]
    },
    {
        id: 'jy_road2/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/1.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw:  -98.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.3,
                yaw: 87.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road1/1']
            }
        ]
    },
    {
        id: 'jy_road2/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/2.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw:  -98.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.3,
                yaw: 87.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/3.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw:  -98.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.3,
                yaw: 87.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/4.jpg',
        hotSpots: [
            {
                pitch:  -18.1,
                yaw:  -74.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.3,
                yaw: 115.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch: -16.2,
                yaw: -156.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road3/2']
            },
            {
                pitch: -16.0,
                yaw: 7.10,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tyg_road1/1']
            }
        ]
    },
    {
        id: 'jy_road2/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/5.jpg',
        hotSpots: [
            {
                pitch:  -19.6,
                yaw:   -75.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.9,
                yaw: 112.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/6.jpg',
        hotSpots: [
            {
                pitch:  -19.6,
                yaw:   -75.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.9,
                yaw: 112.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/7.jpg',
        hotSpots: [
            {
                pitch:  -19.6,
                yaw:   -75.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.9,
                yaw: 112.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/8.jpg',
        hotSpots: [
            {
                pitch:  -19.6,
                yaw:   -75.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.9,
                yaw: 112.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/9.jpg',
        hotSpots: [
            {
                pitch:  -19.6,
                yaw:   -75.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.9,
                yaw: 112.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/10.jpg',
        hotSpots: [
            {
                pitch:  -19.6,
                yaw:   -75.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.9,
                yaw: 112.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/11.jpg',
        hotSpots: [
            {
                pitch:  -19.6,
                yaw:   -75.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.9,
                yaw: 112.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:-15.4,
                yaw: 13.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tyg_road3/12']
            }
        ]
    },
    {
        id: 'jy_road2/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/12.jpg',
        hotSpots: [
            {
                pitch:  -18.2,
                yaw:  -88.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.9,
                yaw: 112.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/13.jpg',
        hotSpots: [
            {
                pitch:  -23.2,
                yaw:   -137.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.3,
                yaw: 77.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/14.jpg',
        hotSpots: [
            {
                pitch: -18.9,
                yaw:   -155.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.5,
                yaw: 25.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/15.jpg',
        hotSpots: [
            {
                pitch:  -19.6,
                yaw:   -160.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-18.8,
                yaw: 27.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/16.jpg',
        hotSpots: [
            {
                pitch:  -22.5,
                yaw:   137.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-23.9,
                yaw: -11.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/17.jpg',
        hotSpots: [
            {
                pitch:  -22.7,
                yaw:   101.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-27.0,
                yaw: -77.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/18.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw:   99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.9,
                yaw: -74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/19.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw:   99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.9,
                yaw: -74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/20.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw:   99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.9,
                yaw: -74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/21.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw:   99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.9,
                yaw: -74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/22.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw:   99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.9,
                yaw: -74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/23.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw:   99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.9,
                yaw: -74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:-18.1,
                yaw: 8.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road3/1']
            }
        ]
    },
    {
        id: 'jy_road2/24',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/24.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw:   99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.9,
                yaw: -74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/25',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/25.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw:   99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.9,
                yaw: -74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/26',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/26.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw:   99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.9,
                yaw: -74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/27',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/27.jpg',
        hotSpots: [
            {
                pitch:  -21.2,
                yaw:   46.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.7,
                yaw:  -99.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/28',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/28.jpg',
        hotSpots: [
            {
                pitch:  -17.9,
                yaw:   6.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-17.9,
                yaw: -153.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/29',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/29.jpg',
        hotSpots: [
            {
                pitch:  -29.1,
                yaw:   -8.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-30.1,
                yaw: -169.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/30',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/30.jpg',
        hotSpots: [
            {
                pitch:  -20.0,
                yaw:   -19.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-16.2,
                yaw: 149.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road2/31',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road2/31.jpg',
        hotSpots: [
            {
                pitch:  -14.7,
                yaw:   -30.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road1/1']
            },
            {
                pitch:-18.1,
                yaw: 172.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'jy_road3/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road3/1.jpg',
        hotSpots: [
            {
                pitch:   -17.9,
                yaw:   166.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-17.7,
                yaw: -11.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road2/23']
            }
        ]
    },
    {
        id: 'jy_road3/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/jy_road3/2.jpg',
        hotSpots: [
            {
                pitch:  -20.2,
                yaw:  165.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road2/4']
            },
            {
                pitch:-21.2,
                yaw: -11.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road1/1.jpg',
        hotSpots: [
            {
                pitch:  -17.2,
                yaw:  151.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.6,
                yaw: -25.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road2/4']
            }
        ]
    },
    {
        id: 'tyg_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road1/2.jpg',
        hotSpots: [
            {
                pitch:  -17.2,
                yaw:  151.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.6,
                yaw: -25.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -16.9,
                yaw:  123.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-17.7,
                yaw: - -39.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -17.2,
                yaw:  151.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.6,
                yaw: -25.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road1/5.jpg',
        hotSpots: [
            {
                pitch:  -17.2,
                yaw:  151.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.6,
                yaw: -25.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -17.2,
                yaw:  118.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {

                pitch:-16.5,
                yaw: 7.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {

                pitch:-17.7,
                yaw: -112.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tyg_road2/1']
            }
        ]
    },
    {
        id: 'tyg_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road1/7.jpg',
        hotSpots: [
            {
                pitch:  -17.1,
                yaw:  110.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.6,
                yaw: -25.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road1/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road1/8.jpg',
        hotSpots: [
            {
                pitch:  -41.1,
                yaw:  113.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tyg_road3/2']
            },
            {
                pitch:-25.3,
                yaw: -68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road2/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road2/1.jpg',
        hotSpots: [
            {
                pitch:  -19.8,
                yaw:  -105.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-16.7,
                yaw: 77.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tyg_road1/6']
            }
        ]
    },
    {
        id: 'tyg_road2/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road2/2.jpg',
        hotSpots: [
            {
                pitch:  -16.9,
                yaw: -108.71,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road1/5']
            },
            {
                pitch:-18.8,
                yaw: 82.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road3/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/1.jpg',
        hotSpots: [
            {
                pitch:  -16.0,
                yaw: 21.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.6,
                yaw: 179.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road2/4']
            }
        ]
    },
    {
        id: 'tyg_road3/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/2.jpg',
        hotSpots: [
            {
                pitch:  -14.1,
                yaw: 49.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-16.4,
                yaw: -111.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:-14.0,
                yaw: -29.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tyg_road1/8']
            }
        ]
    },
    {
        id: 'tyg_road3/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/3.jpg',
        hotSpots: [
            {
                pitch:  -17.3,
                yaw: 51.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-22.8,
                yaw: -115.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road3/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/4.jpg',
        hotSpots: [
            {
                pitch:   -20.0,
                yaw: 36.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.3,
                yaw: -116.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road3/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/5.jpg',
        hotSpots: [
            {
                pitch:  -17.0,
                yaw: -4.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-18.0,
                yaw:-128.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road3/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/6.jpg',
        hotSpots: [
            {
                pitch:  -18.2,
                yaw: -41.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-19.6,
                yaw: -177.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road3/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/7.jpg',
        hotSpots: [
            {
                pitch:  -15.2,
                yaw: -44.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.2,
                yaw: 166.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road3/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/8.jpg',
        hotSpots: [
            {
                pitch:  -15.2,
                yaw: -44.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.2,
                yaw: 166.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road3/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/9.jpg',
        hotSpots: [
            {
                pitch:  -15.2,
                yaw: -44.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.2,
                yaw: 166.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road3/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/10.jpg',
        hotSpots: [
            {
                pitch:  -15.2,
                yaw: -44.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.2,
                yaw: 166.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road3/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/11.jpg',
        hotSpots: [
            {
                pitch:  -15.2,
                yaw: -44.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:-20.2,
                yaw: 166.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'tyg_road3/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/tyg_road3/12.jpg',
        hotSpots: [
            {
                pitch:  -15.2,
                yaw: -44.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road2/11']
            },
            {
                pitch:-20.2,
                yaw: 166.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },







    {
        id: 'hq_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road1/1.jpg',
        hotSpots: [
            {
                pitch:  -34.9,
                yaw: 88.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.3,
                yaw: -78.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road2/23']
            }
        ]
    },
    {
        id: 'hq_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road1/2.jpg',
        hotSpots: [
            {
                pitch:  -26.702934887016472,
                yaw: 89.40444953943697,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch: -26.4,
                yaw: -80.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -26.7,
                yaw: 89.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.2,
                yaw: -79.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -26.7,
                yaw: 89.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -35.1,
                yaw: -81.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road1/5.jpg',
        hotSpots: [
            {
                pitch:  -26.7,
                yaw: 89.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.5,
                yaw: -80.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -26.702934887016472,
                yaw: 89.40444953943697,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -34.6,
                yaw: -77.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road1/7.jpg',
        hotSpots: [

            {
                pitch:   -22.4,
                yaw: -81.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/1.jpg',
        hotSpots: [
            {
                pitch:  -28.0,
                yaw: -179.47,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },

        ]
    },

    {
        id: 'hq_road2/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/2.jpg',
        hotSpots: [
            {
                pitch:  -27.5,
                yaw: 169.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -30.9,
                yaw: -3.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/3.jpg',
        hotSpots: [
            {
                pitch:  -24.6,
                yaw: 160.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -34.2,
                yaw: -13.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/4.jpg',
        hotSpots: [
            {
                pitch:  -23.1,
                yaw: 157.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.0,
                yaw: -14.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/5.jpg',
        hotSpots: [
            {
                pitch:  -25.3,
                yaw: 157.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -15.6,
                yaw: -15.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/6.jpg',
        hotSpots: [
            {
                pitch:  -30.9,
                yaw: 156.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -18.0,
                yaw: -14.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/7.jpg',
        hotSpots: [
            {
                pitch:  -21.8,
                yaw: 134.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -17.7,
                yaw: -19.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/8.jpg',
        hotSpots: [
            {
                pitch:  -14.3,
                yaw: 106.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -19.4,
                yaw: -69.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/9.jpg',
        hotSpots: [
            {
                pitch:  -6.4,
                yaw: 103.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -17.0,
                yaw: -69.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/10.jpg',
        hotSpots: [
            {
                pitch:  -28.3,
                yaw: 110.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -18.4,
                yaw: -67.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/11.jpg',
        hotSpots: [
            {
                pitch:  -28.3,
                yaw: 110.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -17.9,
                yaw: -61.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -15.2,
                yaw: 27.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road6/14']
            }
        ]
    },

    {
        id: 'hq_road2/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/12.jpg',
        hotSpots: [
            {
                pitch:  -28.3,
                yaw: 116.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -18.4,
                yaw: -62.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/13.jpg',
        hotSpots: [
            {
                pitch:  -22.9,
                yaw: 137.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.0,
                yaw: -43.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/14.jpg',
        hotSpots: [
            {
                pitch:  -26.4,
                yaw: 138.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {

                pitch:  -23.0,
                yaw: -26.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/15.jpg',
        hotSpots: [
            {
                pitch:  -21.0,
                yaw: 131.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.5,
                yaw: -38.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/16.jpg',
        hotSpots: [
            {
                pitch:   -22.3,
                yaw: 103.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.6,
                yaw: -58.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/17.jpg',
        hotSpots: [
            {
                pitch:  -26.702934887016472,
                yaw: 89.40444953943697,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.6,
                yaw: -78.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/18.jpg',
        hotSpots: [
            {
                pitch:  -25.6,
                yaw: 79.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -16.3,
                yaw: -93.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/19.jpg',
        hotSpots: [
            {
                pitch:  -20.3,
                yaw: 70.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.9,
                yaw: -102.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/20.jpg',
        hotSpots: [
            {
                pitch:  -19.1,
                yaw: 94.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: -88.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/21.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 104.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.2,
                yaw: -69.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -15.1,
                yaw: 19.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road4/5']
            }
        ]
    },

    {
        id: 'hq_road2/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/22.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 104.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.2,
                yaw: -69.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/23.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 104.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.2,
                yaw: -69.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/24',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/24.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 104.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.2,
                yaw: -69.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/25',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/25.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 104.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.2,
                yaw: -69.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },

            {
                pitch:  -20.2,
                yaw: 17.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road3/1']
            }
        ]
    },

    {
        id: 'hq_road2/26',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/26.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 104.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.2,
                yaw: -69.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/27',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/27.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 104.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.2,
                yaw: -69.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road2/28',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road2/28.jpg',
        hotSpots: [
            {
                pitch:  -22.9,
                yaw: 98.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road2/23']
            },
            {
                pitch:  -20.2,
                yaw: -69.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road3/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road3/1.jpg',
        hotSpots: [
            {
                pitch:  -14.82,
                yaw: 93.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.0,
                yaw: -82.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road2/25']
            }
        ]
    },

    {
        id: 'hq_road3/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road3/2.jpg',
        hotSpots: [
            {
                pitch:  -26.1,
                yaw: 0.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.6,
                yaw: -171.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road3/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road3/3.jpg',
        hotSpots: [
            {
                pitch:  -26.1,
                yaw: 0.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.6,
                yaw: -171.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road3/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road3/4.jpg',
        hotSpots: [
            {
                pitch:  -16.1,
                yaw: 0.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.6,
                yaw: -171.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road3/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road3/5.jpg',
        hotSpots: [
            {
                pitch:  -16.1,
                yaw: 0.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.6,
                yaw: -171.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road3/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road3/6.jpg',
        hotSpots: [
            {
                pitch:  -16.1,
                yaw: 0.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.6,
                yaw: -171.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road3/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road3/7.jpg',
        hotSpots: [
            {
                pitch:  -16.1,
                yaw: 0.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.6,
                yaw: -171.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road3/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road3/8.jpg',
        hotSpots: [
            {
                pitch:  -16.1,
                yaw: 0.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.6,
                yaw: -171.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },

            {
                pitch:  -13.3,
                yaw: -80.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road5/4']
            },
            {
                pitch:  -21.9,
                yaw: 107.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road5/3']
            }

        ]
    },

    {
        id: 'hq_road3/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road3/9.jpg',
        hotSpots: [
            {
                pitch:  -16.1,
                yaw: 0.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.6,
                yaw: -171.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road3/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road3/10.jpg',
        hotSpots: [
            {
                pitch:  -16.1,
                yaw: 0.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road4/9']
            },
            {
                pitch:  -27.6,
                yaw: -171.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road4/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road4/1.jpg',
        hotSpots: [
            {
                pitch:  -16.7,
                yaw: 175.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.4,
                yaw: 7.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road5/10']
            }
        ]
    },

    {
        id: 'hq_road4/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road4/2.jpg',
        hotSpots: [
            {
                pitch:  -16.7,
                yaw: 175.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.4,
                yaw: 7.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road4/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road4/3.jpg',
        hotSpots: [
            {
                pitch:  -16.7,
                yaw: 175.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.4,
                yaw: 7.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road4/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road4/4.jpg',
        hotSpots: [
            {
                pitch:  -16.7,
                yaw: 175.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.4,
                yaw: 7.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road4/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road4/5.jpg',
        hotSpots: [
            {
                pitch:  -16.7,
                yaw: 175.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road2/21']
            },
            {
                pitch:  -21.4,
                yaw: 1.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road5/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road5/1.jpg',
        hotSpots: [
            {
                pitch:  -27.3,
                yaw: -76.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -30.3,
                yaw: 98.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road2/15']
            }

        ]
    },

    {
        id: 'hq_road5/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road5/2.jpg',
        hotSpots: [
            {
                pitch:  -27.3,
                yaw: -76.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -36.4,
                yaw: 98.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road5/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road5/3.jpg',
        hotSpots: [
            {
                pitch:  -27.3,
                yaw: -76.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road3/8']
            },
            {
                pitch:  -36.4,
                yaw: 98.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road5/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road5/4.jpg',
        hotSpots: [
            {
                pitch:  -27.3,
                yaw: -76.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.4,
                yaw: 98.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road3/8']
            }
        ]
    },

    {
        id: 'hq_road5/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road5/5.jpg',
        hotSpots: [
            {
                pitch:  -16.3,
                yaw: -89.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.4,
                yaw: 98.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road5/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road5/6.jpg',
        hotSpots: [
            {
                pitch:  -27.9,
                yaw: -87.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.4,
                yaw: 91.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road5/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road5/7.jpg',
        hotSpots: [
            {
                pitch:  -26.8,
                yaw: -90.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.4,
                yaw: 91.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road5/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road5/8.jpg',
        hotSpots: [
            {
                pitch:  -27.3,
                yaw: -149.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.4,
                yaw: 78.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road5/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road5/9.jpg',
        hotSpots: [
            {
                pitch:  -23.5,
                yaw: -175.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.6,
                yaw: 17.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road5/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road5/10.jpg',
        hotSpots: [
            {
                pitch:  -19,
                yaw: 174.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road4/1']
            },
            {
                pitch:  -26.5,
                yaw: 4.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -27.4,
                yaw: -100.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road6/1']
            }
        ]
    },

    {
        id: 'hq_road6/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/1.jpg',
        hotSpots: [
            {
                pitch:  -15.7,
                yaw: -91.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.5,
                yaw: 87.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road5/10']
            }
        ]
    },

    {
        id: 'hq_road6/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/2.jpg',
        hotSpots: [
            {
                pitch:  -15.7,
                yaw: -91.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.5,
                yaw: 87.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road6/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/3.jpg',
        hotSpots: [
            {
                pitch:  -15.7,
                yaw: -91.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.5,
                yaw: 87.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road6/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/4.jpg',
        hotSpots: [
            {
                pitch:  -15.7,
                yaw: -99.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.5,
                yaw: 87.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road6/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/5.jpg',
        hotSpots: [
            {
                pitch:  -15.7,
                yaw: -91.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.5,
                yaw: 87.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road6/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/6.jpg',
        hotSpots: [
            {
                pitch:  -35.7,
                yaw: -103.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -14.9,
                yaw: 77.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road6/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/7.jpg',
        hotSpots: [
            {
                pitch:  -28.2,
                yaw: -138.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.5,
                yaw: 41.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road6/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/8.jpg',
        hotSpots: [
            {
                pitch:  -28.7,
                yaw: -178.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -19.5,
                yaw: 4.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road6/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/9.jpg',
        hotSpots: [
            {
                pitch:  -28.7,
                yaw: -178.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -31.5,
                yaw: -12.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'hq_road6/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/10.jpg',
        hotSpots: [
            {
                pitch:  -36.7,
                yaw: 178.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -31.5,
                yaw: -12.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hq_road6/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/11.jpg',
        hotSpots: [
            {
                pitch:  -28.7,
                yaw: 171.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -31.5,
                yaw: -12.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hq_road6/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/12.jpg',
        hotSpots: [
            {
                pitch:  -21.9,
                yaw: 173.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.5,
                yaw: -11.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hq_road6/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/13.jpg',
        hotSpots: [
            {
                pitch:  -21.9,
                yaw: 173.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.5,
                yaw: -11.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'hq_road6/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/hq_road6/14.jpg',
        hotSpots: [
            {
                pitch:  -31.7,
                yaw: 174.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road2/11']
            },
            {
                pitch:  -29.5,
                yaw: -12.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },{
        id: 'rh_road1/0',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/0.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw: -173.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road2/1']
            },
            {
                pitch:  -21.5,
                yaw: 17.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road1/68']
            },
            {
                pitch:  -21.5,
                yaw: -85,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road1/1']
            }
        ]
    },


    {
        id: 'rh_road1/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/1.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw: -173.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.5,
                yaw: 17.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/2.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw: -173.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.5,
                yaw: 17.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/3.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw: -173.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.5,
                yaw: 15.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/4.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw: 179.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.5,
                yaw: 8.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/5.jpg',
        hotSpots: [
            {
                pitch:  -23.8,
                yaw: 172.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -20.5,
                yaw: 0.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/6.jpg',
        hotSpots: [
            {
                pitch:  -25.9,
                yaw: 154.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {

                pitch:  -29.7,
                yaw: -18.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/7.jpg',
        hotSpots: [
            {
                pitch:  -24.7,
                yaw: 144.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: -21.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/8.jpg',
        hotSpots: [
            {
                pitch:  -28.5,
                yaw: 152.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.5,
                yaw: -18.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/9.jpg',
        hotSpots: [
            {
                pitch:  -21.62,
                yaw: 163.57,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.3,
                yaw: -9.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -14.6,
                yaw: -72.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jxl_road1/1']
            }
        ]
    },

    {
        id: 'rh_road1/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/10.jpg',
        hotSpots: [
            {
                pitch:  -19.7,
                yaw: 169.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -33.3,
                yaw: -4.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/11.jpg',
        hotSpots: [
            {
                pitch:   -29.3,
                yaw: 162.17,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -33.2,
                yaw: -7.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/12.jpg',
        hotSpots: [
            {
                pitch:  -24.8,
                yaw: 159.57,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: -17.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/13.jpg',
        hotSpots: [
            {
                pitch:   -21.5,
                yaw: 152.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.3,
                yaw: -19.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/14.jpg',
        hotSpots: [
            {
                pitch: -21.2,
                yaw: 139.27,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -34.1,
                yaw: -34.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/15.jpg',
        hotSpots: [
            {
                pitch:  -28.1,
                yaw: 137.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.1,
                yaw: -37.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/16.jpg',
        hotSpots: [
            {
                pitch:  -24.6,
                yaw: 139.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -19.7,
                yaw: -26.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -26.7,
                yaw: 71.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road6/1']
            }
        ]
    },

    {
        id: 'rh_road1/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/17.jpg',
        hotSpots: [
            {
                pitch:  -23.1,
                yaw: 152.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -16.7,
                yaw: -24.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/18.jpg',
        hotSpots: [
            {
                pitch:  -20.2,
                yaw: 163.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: -10.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/19.jpg',
        hotSpots: [
            {
                pitch:  -30.2,
                yaw: 170.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -31.3,
                yaw: -4.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/20.jpg',
        hotSpots: [
            {
                pitch:  -28.7,
                yaw: -178.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.2,
                yaw: 6.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/21.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: -166.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.6,
                yaw: 20.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/22.jpg',
        hotSpots: [
            {
                pitch:  -28.2,
                yaw: -154.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -32.1,
                yaw: 29.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/23.jpg',
        hotSpots: [
            {
                pitch:  -20.5,
                yaw: -145.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.9,
                yaw: 36.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/24',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/24.jpg',
        hotSpots: [
            {
                pitch:  -20.5,
                yaw: -145.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.9,
                yaw: 36.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/25',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/25.jpg',
        hotSpots: [
            {
                pitch:  -20.5,
                yaw: -145.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.9,
                yaw: 36.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/26',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/26.jpg',
        hotSpots: [
            {
                pitch:  -20.5,
                yaw: -145.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.9,
                yaw: 36.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/27',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/27.jpg',
        hotSpots: [
            {
                pitch:  -20.5,
                yaw: -145.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.9,
                yaw: 36.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/28',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/28.jpg',
        hotSpots: [
            {
                pitch:  -20.5,
                yaw: -145.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.9,
                yaw: 36.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'rh_road1/29',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/29.jpg',
        hotSpots: [
            {
                pitch:  -22.5,
                yaw: -151.07,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.3,
                yaw: 46.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/30',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/30.jpg',
        hotSpots: [
            {
                pitch:  -26.2,
                yaw: -176.57,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.5,
                yaw: 37.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/31',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/31.jpg',
        hotSpots: [
            {
                pitch:  -23.5,
                yaw: 172.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.7,
                yaw: 39.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -14.6,
                yaw: -78.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tsg_road1/19']
            }
        ]
    },

    {
        id: 'rh_road1/32',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/32.jpg',
        hotSpots: [
            {
                pitch:  -23.5,
                yaw: 172.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.7,
                yaw: 15.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/33',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/33.jpg',
        hotSpots: [
            {
                pitch:  -23.5,
                yaw: 172.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.7,
                yaw: -16.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/34',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/34.jpg',
        hotSpots: [
            {
                pitch:  -23.5,
                yaw: 172.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.7,
                yaw: -16.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/35',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/35.jpg',
        hotSpots: [
            {
                pitch:  -27.9,
                yaw: 143.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.7,
                yaw: -16.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/36',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/36.jpg',
        hotSpots: [
            {
                pitch:  -18.3,
                yaw: 116.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -21.4,
                yaw: -56.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/37',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/37.jpg',
        hotSpots: [
            {
                pitch:  -16.6,
                yaw: 106.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.0,
                yaw: -64.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road1/38',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/38.jpg',
        hotSpots: [
            {
                pitch:  -17.8,
                yaw: 96.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.4,
                yaw: -71.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },


    {
        id: 'rh_road1/39',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road1/39.jpg',
        hotSpots: [
            {
                pitch:  -24.8,
                yaw: 32.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road2/1']
            },
            {
                pitch:   -20.1,
                yaw: 132.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road2/30']
            },
            {
                pitch:  -17.8,
                yaw: -79.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/1.jpg',
        hotSpots: [
            {
                pitch:   -18.7,
                yaw: 144.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.2,
                yaw: -9.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road1/39']
            }
        ]
    },

    {
        id: 'rh_road2/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/2.jpg',
        hotSpots: [
            {
                pitch:  -16.6,
                yaw: 148.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -32.8,
                yaw: -34.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/3.jpg',
        hotSpots: [
            {
                pitch:  -16.6,
                yaw: 148.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -32.8,
                yaw: -34.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/4.jpg',
        hotSpots: [
            {
                pitch:  -23.3,
                yaw: 156.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -32.8,
                yaw: -34.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/5.jpg',
        hotSpots: [
            {
                pitch:  -16.6,
                yaw: 160.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -32.8,
                yaw: -34.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/6.jpg',
        hotSpots: [
            {
                pitch:  -16.6,
                yaw: 160.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -32.8,
                yaw: -34.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/7.jpg',
        hotSpots: [
            {
                pitch:  -25.6,
                yaw: 168.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -25.8,
                yaw: -23.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/8.jpg',
        hotSpots: [
            {
                pitch:  -27.7,
                yaw: 171.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.2,
                yaw: -18.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/9.jpg',
        hotSpots: [
            {
                pitch:  -27.7,
                yaw: 171.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.2,
                yaw: -18.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/10.jpg',
        hotSpots: [
            {
                pitch:  -27.7,
                yaw: 171.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.2,
                yaw: -18.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -15.9,
                yaw: 126.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road3/1']
            }
        ]
    },

    {
        id: 'rh_road2/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/11.jpg',
        hotSpots: [
            {
                pitch:  -23.3,
                yaw: -161.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.1,
                yaw: 2.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/12.jpg',
        hotSpots: [
            {
                pitch:  -28.7,
                yaw: -147.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.4,
                yaw: 28.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/13.jpg',
        hotSpots: [
            {
                pitch:  -28.7,
                yaw: -147.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.4,
                yaw: 28.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/14.jpg',
        hotSpots: [
            {
                pitch:  -29.0,
                yaw:  -167.,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.4,
                yaw: 28.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/15.jpg',
        hotSpots: [
            {
                pitch:  -27.8,
                yaw:  168.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.2,
                yaw: -4.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/16.jpg',
        hotSpots: [
            {
                pitch:  -27.3,
                yaw:  -160.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.9,
                yaw: -24.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/17.jpg',
        hotSpots: [
            {
                pitch:  -33.4,
                yaw: -89.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 78.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/18.jpg',
        hotSpots: [
            {
                pitch:  -33.4,
                yaw: -89.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 78.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/19.jpg',
        hotSpots: [
            {
                pitch:  -33.4,
                yaw: -89.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 78.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/20.jpg',
        hotSpots: [
            {
                pitch:  -33.4,
                yaw: -89.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 78.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/21.jpg',
        hotSpots: [
            {
                pitch:  -33.4,
                yaw: -89.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 78.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/22.jpg',
        hotSpots: [
            {
                pitch:  -35.3,
                yaw: 13.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -34.2,
                yaw: 172.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/23.jpg',
        hotSpots: [
            {
                pitch:  -26.9,
                yaw: 14.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.1,
                yaw: -175.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/24',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/24.jpg',
        hotSpots: [
            {
                pitch:  -26.9,
                yaw: 14.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.1,
                yaw: -175.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/25',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/25.jpg',
        hotSpots: [
            {
                pitch:  -26.9,
                yaw: 14.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.1,
                yaw: -175.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/26',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/26.jpg',
        hotSpots: [
            {
                pitch:  -26.9,
                yaw: 14.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.1,
                yaw: -175.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/27',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/27.jpg',
        hotSpots: [
            {
                pitch:  -26.9,
                yaw: 14.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.1,
                yaw: -175.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/28',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/28.jpg',
        hotSpots: [
            {
                pitch:  -16.8,
                yaw: 26.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.7,
                yaw: -165.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/29',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/29.jpg',
        hotSpots: [
            {
                pitch:  -16.8,
                yaw: 26.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.7,
                yaw: -165.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road2/30',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road2/30.jpg',
        hotSpots: [
            {
                pitch:  -17.8,
                yaw: 67.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road1/39']
            },
            {
                pitch:  -26.7,
                yaw: -130.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },


    {
        id: 'rh_road3/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/1.jpg',
        hotSpots: [
            {
                pitch:  -26.7,
                yaw: 89.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -37.1,
                yaw: -113.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road2/10']
            }
        ]
    },

    {
        id: 'rh_road3/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/2.jpg',
        hotSpots: [
            {
                pitch:  -23.1,
                yaw: 97.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -36.7,
                yaw: -99.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/3.jpg',
        hotSpots: [
            {
                pitch:  -23.1,
                yaw: 97.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -36.7,
                yaw: -99.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/4.jpg',
        hotSpots: [
            {
                pitch:  -21.5,
                yaw: 121.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.8,
                yaw: -94.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/5.jpg',
        hotSpots: [
            {
                pitch:  -18.3,
                yaw: 134.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.1,
                yaw: -87.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/6.jpg',
        hotSpots: [
            {
                pitch:  -30.0,
                yaw: 154.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -31.4,
                yaw: -67.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/7.jpg',
        hotSpots: [
            {
                pitch:  -16.8,
                yaw: 162.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.0,
                yaw: -62.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/8.jpg',
        hotSpots: [
            {
                pitch:  -24.8,
                yaw: 173.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.0,
                yaw: -49.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/9.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 80.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -30.7,
                yaw: -41.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/10.jpg',
        hotSpots: [
            {
                pitch:  -27.2,
                yaw: 71.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -37.3,
                yaw: -97.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/11.jpg',
        hotSpots: [
            {
                pitch:  -20.6,
                yaw: 59.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -33.3,
                yaw: -116.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/12.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw: 54.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -37.3,
                yaw: -116.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/13.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw: 54.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -37.3,
                yaw: -116.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/14.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw: 54.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -37.3,
                yaw: -116.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/15.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw: 54.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -37.3,
                yaw: -116.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/16.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw: 54.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -37.3,
                yaw: -116.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/17.jpg',
        hotSpots: [
            {
                pitch:  -25.2,
                yaw: 54.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -37.3,
                yaw: -116.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/18.jpg',
        hotSpots: [
            {
                pitch:  -29.6,
                yaw: 78.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -33.3,
                yaw: -107.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/19.jpg',
        hotSpots: [
            {
                pitch:  -19.1,
                yaw: 61.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.3,
                yaw: -66.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/20.jpg',
        hotSpots: [
            {
                pitch:  -21.6,
                yaw: 59.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.8,
                yaw: -122.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/21.jpg',
        hotSpots: [
            {
                pitch:  -21.6,
                yaw: 59.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.8,
                yaw: -122.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/22.jpg',
        hotSpots: [
            {
                pitch:  -21.6,
                yaw: 59.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.8,
                yaw: -122.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/23.jpg',
        hotSpots: [
            {
                pitch:  -25.0,
                yaw: 48.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.3,
                yaw: -129.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/24',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/24.jpg',
        hotSpots: [
            {
                pitch:  -25.0,
                yaw: 48.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.3,
                yaw: -129.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road3/25',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road3/25.jpg',
        hotSpots: [
            {
                pitch:  -24.4,
                yaw: 65.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road4/1']
            },
            {
                pitch:  -24.2,
                yaw: -112.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -35.2,
                yaw: -29.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road6/1']
            },
            {
                pitch:  -17.2,
                yaw: 26.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road5/22']
            }
        ]
    },
    {
        id: 'rh_road4/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/1.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: -102.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road3/25']
            }
        ]
    },

    {
        id: 'rh_road4/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/2.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: -102.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road4/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/3.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.1,
                yaw: -112.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road4/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/4.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.1,
                yaw: -112.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road4/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/5.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.1,
                yaw: -112.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road4/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/6.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.1,
                yaw: -112.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road4/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/7.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.3,
                yaw: -121.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road4/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/8.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.1,
                yaw: -112.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road4/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/9.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.1,
                yaw: -112.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -19.5,
                yaw: 160.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road3/10']
            }
        ]
    },

    {
        id: 'rh_road4/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/10.jpg',
        hotSpots: [
            {
                pitch:  -21.6,
                yaw: 76.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.5,
                yaw: -103.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road4/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road4/11.jpg',
        hotSpots: [
            {
                pitch:  -23.9,
                yaw: 68.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road2/12']
            },
            {
                pitch:  -24.1,
                yaw: -111.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },




    {
        id: 'rh_road5/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/1.jpg',
        hotSpots: [
            {
                pitch:  -14.3,
                yaw: 6.3,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['yxdd_road2/4']
            }
        ]
    },

    {
        id: 'rh_road5/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/2.jpg',
        hotSpots: [
            {
                pitch:  -38.4,
                yaw: -83.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -31.3,
                yaw: 168.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/3.jpg',
        hotSpots: [
            {
                pitch:  -26.5,
                yaw: -119.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.3,
                yaw: 63.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/4.jpg',
        hotSpots: [
            {
                pitch:  -20.7,
                yaw: -108.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.5,
                yaw: 69.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/5.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw: -95.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.5,
                yaw: 74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/6.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw: -95.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.5,
                yaw: 74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/7.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw: -95.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.5,
                yaw: 74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/8.jpg',
        hotSpots: [
            {
                pitch:  -23.7,
                yaw: -95.2,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.5,
                yaw: 74.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/9.jpg',
        hotSpots: [
            {
                pitch:  -19.1,
                yaw: -77.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22.5,
                yaw: 88.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/10.jpg',
        hotSpots: [
            {
                pitch:  -25.5,
                yaw: -49.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.5,
                yaw: 122.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/11.jpg',
        hotSpots: [
            {
                pitch:  -18.6,
                yaw: -12.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -33.5,
                yaw: 152.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/12.jpg',
        hotSpots: [
            {
                pitch:  -18.2,
                yaw: -11.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -30.5,
                yaw: 169.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/13.jpg',
        hotSpots: [
            {
                pitch:  -22.2,
                yaw: -18.7,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.5,
                yaw: 158.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/14.jpg',
        hotSpots: [
            {
                pitch:  -20.7,
                yaw: -27.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.5,
                yaw: 151.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/15.jpg',
        hotSpots: [
            {
                pitch:  -31.7,
                yaw: -21.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.1,
                yaw: 154.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/16.jpg',
        hotSpots: [
            {
                pitch:  -31.7,
                yaw: -21.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.1,
                yaw: 154.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/17.jpg',
        hotSpots: [
            {
                pitch:  -24.3,
                yaw: -31.8,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -27.1,
                yaw: 147.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/18.jpg',
        hotSpots: [
            {
                pitch:  -22.7,
                yaw: -39.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.7,
                yaw: 136.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/19.jpg',
        hotSpots: [
            {
                pitch:  -22.2,
                yaw: -33.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.7,
                yaw: 144.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/20.jpg',
        hotSpots: [
            {
                pitch:  -36.0,
                yaw: -42.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -26.6,
                yaw: 135.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/21.jpg',
        hotSpots: [
            {
                pitch:  -36.0,
                yaw: -42.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -28.2,
                yaw: 126.6,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'rh_road5/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road5/22.jpg',
        hotSpots: [
            {
                pitch:  -24.0,
                yaw: -35.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road3/25']
            },
            {
                pitch:  -34.5,
                yaw: 150.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
    {
        id: 'rh_road6/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/rh_road6/1.jpg',
        hotSpots: [
            {
                pitch:  -26.7,
                yaw: -3.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road1/16']
            },
            {
                pitch:  -31.5,
                yaw: 179.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road3/25']
            }
        ]
    },






    {
        id: 'yxdd_road2/1',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/1.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -22,
                yaw: -59.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road1/0']
            },
            {
                pitch:  -29.5,
                yaw: 86.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['jy_road1/9']
            },



        ]
    },

    {
        id: 'yxdd_road2/2',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/2.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/3',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/3.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }

        ]
    },

    {
        id: 'yxdd_road2/4',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/4.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            },
            {
                pitch:  -18.1,
                yaw: -92.4,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road5/1']
            },
            {
                pitch:  -14.2,
                yaw: 124.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['tyg_road3/1']
            }
        ]
    },

    {
        id: 'yxdd_road2/5',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/5.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/6',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/6.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/7',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/7.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/8',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/8.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/9',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/9.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/10',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/10.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/11',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/11.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/12',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/12.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -23.2,
                yaw: -73.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['rh_road4/11']

                //删除了rh_road4/12，感觉重复了
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/13',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/13.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/14',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/14.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/15',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/15.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -24.5,
                yaw: -86.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road5/1']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/16',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/16.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/17',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/17.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/18',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/18.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/19',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/19.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/20',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/20.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/21',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/21.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/22',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/22.jpg',
        hotSpots: [
            {
                pitch:  -29.5,
                yaw: -173.1,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['+']
            },
            {
                pitch:  -29.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },

    {
        id: 'yxdd_road2/23',
        autoLoad: true,
        panorama: 'http://127.0.0.1:8080/static/panos/yxdd_road2/23.jpg',
        hotSpots: [
            {
                pitch:  -15.6,
                yaw: 100.5,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road1/1']
            },
            {
                pitch:  -16.3,
                yaw: -84.0,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['hq_road2/28']
            },
            {
                pitch:  -14.5,
                yaw: 8.9,
                type: 'scene',
                cssClass: "arrow-hotspot",
                clickHandlerFunc: getNextPanorama,
                clickHandlerArgs: ['-']
            }
        ]
    },
]

export const scene_configs = [
    {
        "id": "zhongshanxiang",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/zhongshanxiang",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 5,
            "cubeResolution": 4768
        }
    },
    {
        "id": "hl_2",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/hl_2",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
    {
        "id": "hl_3",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/hl_3",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
    {
        "id": "hq2_3",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/hq2_3",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
    {
        "id": "hq4",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/hq4",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
    {
        "id": "jxl",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/jxl",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 5,
            "cubeResolution": 4752
        }
    },
    {
        "id": "rygc",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/rygc",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 5,
            "cubeResolution": 4768
        }
    },
    {
        "id": "south_gate",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/south_gate",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 5,
            "cubeResolution": 4768
        }
    },
    {
        "id": "tqzx",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/tqzx",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
    {
        "id": "tsg",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/tsg",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 5,
            "cubeResolution": 4768
        }
    },
    {
        "id": "tyg",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/tyg",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
    {
        "id": "yinhu",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_scenes/yinhu",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
]

export const aerial_configs = [
    {
        "id": "aerial1",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_aerials/aerial_1",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        },
        "hotSpots": [
            {
                pitch: -18.93,
                yaw: 99.31,
                type: 'scene',
                cssClass: "aerial-hotspot",
                clickHandlerFunc: enterStreetFromAerial,
                clickHandlerArgs: ['yxdd_road1/68']
            },
            {
                pitch: -87.59,
                yaw: 85.03,
                type: 'scene',
                cssClass: "aerial-hotspot",
                clickHandlerFunc: enterStreetFromAerial,
                clickHandlerArgs: ['rh_road1/9']
            },
            {
                pitch: -12.44,
                yaw: 70.25,
                type: 'scene',
                cssClass: "aerial-hotspot",
                clickHandlerFunc: enterStreetFromAerial,
                clickHandlerArgs: ['yxdd_road1/59']
            },
            {
                pitch: -17.51,
                yaw: -105.17,
                type: 'scene',
                cssClass: "aerial-hotspot",
                clickHandlerFunc: enterStreetFromAerial,
                clickHandlerArgs: ['rh_road6/1']
            },
            {
                pitch: -10.10,
                yaw: 108.19,
                type: 'scene',
                cssClass: "aerial-hotspot",
                clickHandlerFunc: enterStreetFromAerial,
                clickHandlerArgs: ['jy_road1/1']
            },
            {
                pitch: -13.93,
                yaw: 167.20,
                type: 'scene',
                cssClass: "aerial-hotspot",
                clickHandlerFunc: enterStreetFromAerial,
                clickHandlerArgs: ['yxdd_road2/12']
            },
            {
                pitch: -5.87,
                yaw: -81.31,
                type: 'scene',
                cssClass: "aerial-hotspot",
                clickHandlerFunc: enterStreetFromAerial,
                clickHandlerArgs: ['rh_road2/10']
            },
            {
                pitch: -7.07,
                yaw: -11.53,
                type: 'scene',
                cssClass: "aerial-hotspot",
                clickHandlerFunc: enterStreetFromAerial,
                clickHandlerArgs: ['hl_road1/1']
            },
            {
                pitch: -4.48,
                yaw: 44.95,
                type: 'scene',
                cssClass: "aerial-hotspot",
                clickHandlerFunc: enterStreetFromAerial,
                clickHandlerArgs: ['yxdd_road1/34']
            },
        ]
    },
    {
        "id": "aerial2",
        "autoLoad": true,
        "multiRes": {
            "basePath": "http://127.0.0.1:8080/static/panos/_aerials/aerial_2",
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
            "basePath": "http://127.0.0.1:8080/static/panos/_aerials/aerial_3",
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 3816
        }
    },
]

function getOffset(Id) {
    // 负数代表下一张图的中心向左，正数代表下一张图的中心向右
    console.log("getOffset")
    // switch (Id) {
    switch (Id) {
        case 'byy_road1/1': 
            return (32.1) - (7.2)
        case 'byy_road1/2': 
            return (32.1) - (12.6)
        case 'byy_road1/3': 
            return (32.1) - (11.4)
        case 'byy_road1/4': 
            return (32.1) - (14.8)
        case 'byy_road1/5': 
            return (32.1) - (14.6)
        case 'byy_road1/6': 
            return (32.1) - (14.5)
        case 'byy_road1/7': 
            return (32.1) - (16.1)
        case 'byy_road1/8': 
            return (32.1) - (17.0)
        case 'byy_road1/9': 
            return (32.1) - (16.6)
        case 'byy_road1/10': 
            return (32.1) - (15.5)
        case 'byy_road1/11': 
            return (32.1) - (7.2)
        case 'byy_road1/12': 
            return (32.1) - (2.6)
        case 'byy_road1/13': 
            return (32.1) - (-1.8)
        case 'byy_road1/14': 
            return (30.0) - (-20.2)
        case 'byy_road1/15': 
            return (30.0) - (-11.4)
        case 'byy_road1/16': 
            return (30.0) - (14.5)
        case 'byy_road1/17': 
            return (30.0) - (7.2)
        case 'byy_road1/18': 
            return (30.0) - (12.6)
        case 'byy_road1/19': 
            return (30.0) - (10.1)
        case 'byy_road1/20': 
            return (30.0) - (11.1)
        case 'byy_road1/21': 
            return (30.0) - (7.2)
        case 'byy_road1/22': 
            return (10.0) - (56.5)
        case 'byy_road1/23': 
            return (10.0) - (57.9)
        case 'byy_road1/24': 
            return (30.0) - (7.2)
        case 'byy_road1/25': 
            return (30.0) - (1.4)
        case 'byy_road1/26': 
            return (30.0) - (7.2)
        case 'byy_road1/27': 
            return (30.0) - (2.9)
        case 'byy_road1/28': 
            return (30.0) - (2.8)
        case 'byy_road1/29': 
            return (30.0) - (8.1)
        case 'byy_road1/30': 
            return (30.0) - (10.0)
        case 'byy_road2/1': 
            return (79.0) - (39.3)
        case 'byy_road2/2': 
            return (79.0) - (44.6)
        case 'byy_road2/3': 
            return (79.0) - (45.8)
        case 'byy_road2/4': 
            return (79.0) - (44.9)
        case 'byy_road2/5': 
            return (79.0) - (42.9)
        case 'byy_road2/6': 
            return (79.0) - (44.0)
        case 'ry_road1/1': 
            return (17.3) - (-148.6)
        case 'ry_road1/2': 
            return (17.3) - (121.8)
        case 'ry_road1/3': 
            return (17.3) - (119.6)
        case 'ry_road1/4': 
            return (17.3) - (120.1)
        case 'ry_road1/5': 
            return (17.3) - (123.9)
        case 'ry_road1/6': 
            return (17.3) - (124.7)
        case 'ry_road1/7': 
            return (17.3) - (129.0)
        case 'ry_road1/8': 
            return (17.3) - (123.9)
        case 'ry_road1/9': 
            return (17.3) - (126.9)
        case 'ry_road1/10': 
            return (17.3) - (122.6)
        case 'ry_road1/11': 
            return (20.0) - (114.7)
        case 'ry_road1/12': 
            return (20.0) - (111.7)
        case 'ry_road1/13': 
            return (20.0) - (112.9)
        case 'ry_road1/14': 
            return (24.0) - (114.7)
        case 'ry_road1/15': 
            return (24.0) - (121.3)
        case 'ry_road1/16': 
            return (24.0) - (128.4)
        case 'ry_road1/17': 
            return (24.0) - (139.1)
        case 'ry_road2/1': 
            return (-80.0) - (-85.3)
        case 'ry_road2/2': 
            return (-117.0) - (-138.6)
        case 'ry_road2/3': 
            return (-155.0) - (177.0)
        case 'ry_road2/4': 
            return (196.0) - (173.7)
        case 'ry_road2/5': 
            return (196.0) - (173.0)
        case 'ry_road2/6': 
            return (196.0) - (173.0)
        case 'ry_road2/7': 
            return (196.0) - (173.0)
        case 'ry_road2/8': 
            return (196.0) - (173.0)
        case 'ry_road2/9': 
            return (196.0) - (173.0)
        case 'ry_road2/10': 
            return (196.0) - (173.0)
        case 'ry_road2/11': 
            return (196.0) - (178.0)
        case 'ry_road2/12': 
            return (196.0) - (178.0)
        case 'ry_road2/13': 
            return (196.0) - (178.0)
        case 'ry_road2/14': 
            return (196.0) - (178.0)
        case 'ry_road2/15': 
            return (196.0) - (153.5)
        case 'ry_road2/16': 
            return (180.0) - (142.0)
        case 'ry_road2/17': 
            return (180.0) - (145.0)
        case 'yxdd_road1/1': 
            return (106.0) - (-170.0)
        case 'yxdd_road1/2': 
            return (106.0) - (176.0)
        case 'yxdd_road1/3': 
            return (106.0) - (176.0)
        case 'yxdd_road1/4': 
            return (106.0) - (176.0)
        case 'yxdd_road1/5': 
            return (106.0) - (176.0)
        case 'yxdd_road1/6': 
            return (106.0) - (176.0)
        case 'yxdd_road1/7': 
            return (106.0) - (176.0)
        case 'yxdd_road1/8': 
            return (106.0) - (179.0)
        case 'yxdd_road1/9': 
            return (106.0) - (179.0)
        case 'yxdd_road1/10': 
            return (106.0) - (-180.0)
        case 'yxdd_road1/11': 
            return (106.0) - (-180.0)
        case 'yxdd_road1/12': 
            return (106.0) - (-180.0)
        case 'yxdd_road1/13': 
            return (106.0) - (-179.0)
        case 'yxdd_road1/14': 
            return (106.0) - (-179.0)
        case 'yxdd_road1/15': 
            return (106.0) - (-179.0)
        case 'yxdd_road1/16': 
            return (106.0) - (-179.0)
        case 'yxdd_road1/17': 
            return (106.0) - (-178.0)
        case 'yxdd_road1/18': 
            return (106.0) - (-178.0)
        case 'yxdd_road1/19': 
            return (106.0) - (-178.0)
        case 'yxdd_road1/20': 
            return (106.0) - (-178.0)
        case 'yxdd_road1/21': 
            return (106.0) - (-178.0)
        case 'yxdd_road1/22': 
            return (106.0) - (-177.0)
        case 'yxdd_road1/23': 
            return (106.0) - (-177.0)
        case 'yxdd_road1/24': 
            return (106.0) - (-177.0)
        case 'yxdd_road1/25': 
            return (106.0) - (-177.0)
        case 'yxdd_road1/26': 
            return (106.0) - (-176.0)
        case 'yxdd_road1/27': 
            return (106.0) - (-176.0)
        case 'yxdd_road1/28': 
            return (106.0) - (-176.0)
        case 'yxdd_road1/29': 
            return (106.0) - (-176.0)
        case 'yxdd_road1/30': 
            return (106.0) - (-176.0)
        case 'yxdd_road1/31': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/32': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/33': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/34': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/35': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/36': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/37': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/38': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/39': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/40': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/41': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/42': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/43': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/44': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/45': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/46': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/47': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/48': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/49': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/50': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/51': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/52': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/53': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/54': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/55': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/56': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/57': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/58': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/59': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/60': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/61': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/62': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/63': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/64': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/65': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/66': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/67': 
            return (106.0) - (-175.0)
        case 'yxdd_road1/68': 
            return (106.0) - (-175.0)
        case 'yxdd_road2/1': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/2': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/3': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/4': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/5': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/6': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/7': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/8': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/9': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/10': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/11': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/12': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/13': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/14': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/15': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/16': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/17': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/18': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/19': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/20': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/21': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/22': 
            return (106.0) - (-173.0)
        case 'yxdd_road2/23': 
            return (106.0) - (-173.0)
        case 'yxdd_road3/1': 
            return (0.0) - (-87.0)
        case 'yxdd_road3/2': 
            return (10.0) - (-73.0)
        case 'yxdd_road3/3': 
            return (20.0) - (-54.0)
        case 'yxdd_road3/4': 
            return (282.0) - (-170.0)
        case 'yxdd_road3/5': 
            return (286.0) - (-165.0)
        case 'yxdd_road3/6': 
            return (286.0) - (-165.0)
        case 'yxdd_road3/7': 
            return (286.0) - (-165.0)
        case 'yxdd_road3/8': 
            return (286.0) - (-166.0)
        case 'yxdd_road3/9': 
            return (286.0) - (-166.0)
        case 'yxdd_road3/10': 
            return (286.0) - (-167.0)
        case 'yxdd_road3/11': 
            return (286.0) - (-167.0)
        case 'yxdd_road3/12': 
            return (286.0) - (-168.0)
        case 'yxdd_road3/13': 
            return (286.0) - (-168.0)
        case 'yxdd_road3/14': 
            return (286.0) - (-169.0)
        case 'yxdd_road3/15': 
            return (286.0) - (-169.0)
        case 'yxdd_road3/16': 
            return (286.0) - (-170.0)
        case 'yxdd_road3/17': 
            return (286.0) - (-170.0)
        case 'yxdd_road3/18': 
            return (286.0) - (-171.0)
        case 'yxdd_road3/19': 
            return (286.0) - (-171.0)
        case 'yxdd_road3/20': 
            return (286.0) - (-172.0)
        case 'yxdd_road3/21': 
            return (286.0) - (-173.0)
        case 'yxdd_road3/22': 
            return (286.0) - (-174.0)
        case 'yxdd_road3/23': 
            return (286.0) - (-174.0)
        case 'yxdd_road3/24': 
            return (286.0) - (-175.0)
        case 'yxdd_road3/25': 
            return (286.0) - (-175.0)
        case 'yxdd_road3/26': 
            return (286.0) - (-176.0)
        case 'yxdd_road3/27': 
            return (286.0) - (-176.0)
        case 'yxdd_road3/28': 
            return (286.0) - (-177.0)
        case 'yxdd_road3/29': 
            return (286.0) - (-178.0)
        case 'yxdd_road3/30': 
            return (286.0) - (-178.0)
        case 'yxdd_road3/31': 
            return (286.0) - (-179.0)
        case 'yxdd_road3/32': 
            return (286.0) - (-179.0)
        case 'yxdd_road3/33': 
            return (286.0) - (-180.0)
        case 'hq_road1/1': 
            return (200.0) - (-80.0)
        case 'hq_road1/2': 
            return (200.0) - (-80.0)
        case 'hq_road1/3': 
            return (200.0) - (-80.0)
        case 'hq_road1/4': 
            return (200.0) - (-80.0)
        case 'hq_road1/5': 
            return (200.0) - (-80.0)
        case 'hq_road1/6': 
            return (200.0) - (-80.0)
        case 'hq_road1/7': 
            return (200.0) - (-80.0)
        case 'hq_road2/1': 
            return (256.0) - (-3.1)
        case 'hq_road2/2': 
            return (261.0) - (-3.1)
        case 'hq_road2/3': 
            return (251.0) - (-13.8)
        case 'hq_road2/4': 
            return (251.0) - (-14.8)
        case 'hq_road2/5': 
            return (251.0) - (-15.6)
        case 'hq_road2/6': 
            return (251.0) - (-14.4)
        case 'hq_road2/7': 
            return (251.0) - (-19.7)
        case 'hq_road2/8': 
            return (202.0) - (-69.7)
        case 'hq_road2/9': 
            return (202.0) - (-69.7)
        case 'hq_road2/10': 
            return (202.0) - (-69.7)
        case 'hq_road2/11': 
            return (202.0) - (-69.7)
        case 'hq_road2/12': 
            return (202.0) - (-69.7)
        case 'hq_road2/13': 
            return (202.0) - (-69.7)
        case 'hq_road2/14': 
            return (202.0) - (-69.7)
        case 'hq_road2/15': 
            return (202.0) - (-69.7)
        case 'hq_road2/16': 
            return (202.0) - (-69.7)
        case 'hq_road2/17': 
            return (202.0) - (-69.7)
        case 'hq_road2/18': 
            return (202.0) - (-69.7)
        case 'hq_road2/19': 
            return (202.0) - (-69.7)
        case 'hq_road2/20': 
            return (202.0) - (-69.7)
        case 'hq_road2/21': 
            return (202.0) - (-69.7)
        case 'hq_road2/22': 
            return (202.0) - (-69.7)
        case 'hq_road2/23': 
            return (202.0) - (-69.7)
        case 'hq_road2/24': 
            return (202.0) - (-69.7)
        case 'hq_road2/25': 
            return (202.0) - (-69.7)
        case 'hq_road2/26': 
            return (202.0) - (-69.7)
        case 'hq_road2/27': 
            return (202.0) - (-69.7)
        case 'hq_road2/28': 
            return (202.0) - (-69.7)
        case 'hq_road3/1': 
            return (286.0) - (93.5)
        case 'hq_road3/2': 
            return (286.0) - (1.0)
        case 'hq_road3/3': 
            return (286.0) - (1.0)
        case 'hq_road3/4': 
            return (286.0) - (1.0)
        case 'hq_road3/5': 
            return (286.0) - (1.0)
        case 'hq_road3/6': 
            return (286.0) - (1.0)
        case 'hq_road3/7': 
            return (286.0) - (1.0)
        case 'hq_road3/8': 
            return (286.0) - (1.0)
        case 'hq_road3/9': 
            return (286.0) - (1.0)
        case 'hq_road3/10': 
            return (286.0) - (1.0)
        case 'hq_road4/1': 
            return (286.0) - (7.3)
        case 'hq_road4/2': 
            return (286.0) - (7.3)
        case 'hq_road4/3': 
            return (286.0) - (7.3)
        case 'hq_road4/4': 
            return (286.0) - (7.3)
        case 'hq_road4/5': 
            return (286.0) - (7.3)
        case 'hq_road5/1': 
            return (16.0) - (98.9)
        case 'hq_road5/2': 
            return (16.0) - (98.9)
        case 'hq_road5/3': 
            return (16.0) - (98.9)
        case 'hq_road5/4': 
            return (16.0) - (98.9)
        case 'hq_road5/5': 
            return (16.0) - (91.9)
        case 'hq_road5/6': 
            return (16.0) - (91.9)
        case 'hq_road5/7': 
            return (16.0) - (91.9)
        case 'hq_road5/8': 
            return (106.0) - (-178.0)
        case 'hq_road5/9': 
            return (106.0) - (-180.0)
        case 'hq_road5/10': 
            return (106.0) - (-180.0)
        case 'hq_road6/1': 
            return (196.0) - (-91.4)
        case 'hq_road6/2': 
            return (196.0) - (-91.4)
        case 'hq_road6/3': 
            return (196.0) - (-91.4)
        case 'hq_road6/4': 
            return (196.0) - (-91.4)
        case 'hq_road6/5': 
            return (196.0) - (-91.4)
        case 'hq_road6/6': 
            return (196.0) - (-91.6)
        case 'hq_road6/7': 
            return (196.0) - (-91.6)
        case 'hq_road6/8': 
            return (286.0) - (-12.2)
        case 'hq_road6/9': 
            return (286.0) - (-12.2)
        case 'hq_road6/10': 
            return (286.0) - (-12.2)
        case 'hq_road6/11': 
            return (286.0) - (-12.2)
        case 'hq_road6/12': 
            return (286.0) - (-11.1)
        case 'hq_road6/13': 
            return (286.0) - (-11.1)
        case 'hq_road6/14': 
            return (286.0) - (-12.1)
        case 'hl_road1/1': 
            return (155.0) - (-25.7)
        case 'hl_road1/2': 
            return (155.0) - (-25.7)
        case 'hl_road1/3': 
            return (155.0) - (-25.7)
        case 'hl_road1/4': 
            return (155.0) - (-25.7)
        case 'hl_road1/5': 
            return (155.0) - (-25.7)
        case 'hl_road1/6': 
            return (155.0) - (-25.7)
        case 'hl_road1/7': 
            return (155.0) - (-25.7)
        case 'hl_road1/8': 
            return (155.0) - (-25.7)
        case 'hl_road1/9': 
            return (155.0) - (-25.7)
        case 'hl_road1/10': 
            return (155.0) - (-25.7)
        case 'hl_road1/11': 
            return (155.0) - (-25.7)
        case 'hl_road2/1': 
            return (196.0) - (178.0)
        case 'hl_road2/2': 
            return (196.0) - (178.0)
        case 'hl_road2/3': 
            return (196.0) - (178.0)
        case 'hl_road2/4': 
            return (196.0) - (178.0)
        case 'hl_road2/5': 
            return (196.0) - (178.0)
        case 'hl_road2/6': 
            return (196.0) - (177.0)
        case 'hl_road2/7': 
            return (196.0) - (176.0)
        case 'hl_road2/8': 
            return (196.0) - (175.0)
        case 'hl_road2/9': 
            return (196.0) - (174.0)
        case 'hl_road2/10': 
            return (196.0) - (173.0)
        case 'hl_road2/11': 
            return (196.0) - (172.0)
        case 'hl_road2/12': 
            return (196.0) - (171.0)
        case 'hl_road2/13': 
            return (196.0) - (170.0)
        case 'hl_road2/14': 
            return (196.0) - (169.0)
        case 'hl_road2/15': 
            return (196.0) - (168.0)
        case 'hl_road2/16': 
            return (196.0) - (168.0)
        case 'hl_road2/17': 
            return (196.0) - (167.0)
        case 'hl_road2/18': 
            return (196.0) - (166.0)
        case 'hl_road2/19': 
            return (196.0) - (165.0)
        case 'hl_road2/20': 
            return (196.0) - (164.0)
        case 'hl_road2/21': 
            return (196.0) - (163.0)
        case 'hl_road2/22': 
            return (196.0) - (162.0)
        case 'hl_road2/23': 
            return (196.0) - (161.0)
        case 'hl_road2/24': 
            return (196.0) - (160.0)
        case 'hl_road2/25': 
            return (196.0) - (160.0)
        case 'hl_road2/26': 
            return (196.0) - (159.0)
        case 'hl_road2/27': 
            return (196.0) - (158.0)
        case 'hl_road2/28': 
            return (196.0) - (158.0)
        case 'hl_road2/29': 
            return (196.0) - (157.0)
        case 'hl_road2/30': 
            return (196.0) - (156.0)
        case 'hl_road2/31': 
            return (196.0) - (156.0)
        case 'hl_road2/32': 
            return (196.0) - (155.0)
        case 'hl_road2/33': 
            return (196.0) - (155.0)
        case 'hl_road2/34': 
            return (196.0) - (155.0)
        case 'hl_road2/35': 
            return (196.0) - (155.0)
        case 'hl_road2/36': 
            return (196.0) - (155.0)
        case 'hl_road2/37': 
            return (196.0) - (155.0)
        case 'hl_road2/38': 
            return (196.0) - (155.0)
        case 'hl_road2/39': 
            return (196.0) - (155.0)
        case 'hl_road3/1': 
            return (196.0) - (15.0)
        case 'hl_road3/2': 
            return (196.0) - (15.0)
        case 'hl_road3/3': 
            return (196.0) - (15.0)
        case 'hl_road3/4': 
            return (196.0) - (15.0)
        case 'hl_road3/5': 
            return (196.0) - (15.0)
        case 'hl_road3/6': 
            return (196.0) - (15.0)
        case 'hl_road3/7': 
            return (196.0) - (15.0)
        case 'hl_road3/8': 
            return (196.0) - (15.0)
        case 'hl_road3/9': 
            return (196.0) - (15.0)
        case 'hl_road3/10': 
            return (196.0) - (15.0)
        case 'hl_road3/11': 
            return (196.0) - (15.0)
        case 'hl_road3/12': 
            return (196.0) - (15.0)
        case 'hl_road3/13': 
            return (196.0) - (15.0)
        case 'hl_road4/1': 
            return (196.0) - (-83.0)
        case 'hl_road4/2': 
            return (196.0) - (-83.0)
        case 'hl_road4/3': 
            return (196.0) - (-83.0)
        case 'hl_road4/4': 
            return (196.0) - (-83.0)
        case 'hl_road4/5': 
            return (196.0) - (-86.0)
        case 'hl_road4/6': 
            return (196.0) - (-86.0)
        case 'hl_road4/7': 
            return (196.0) - (-86.0)
        case 'hl_road4/8': 
            return (196.0) - (-86.0)
        case 'hl_road5/1': 
            return (196.0) - (-86.0)
        case 'hl_road5/2': 
            return (196.0) - (-86.0)
        case 'hl_road5/3': 
            return (196.0) - (-86.0)
        case 'hl_road5/4': 
            return (196.0) - (-86.0)
        case 'tsg_road1/1': 
            return (110.0) - (143.0)
        case 'tsg_road1/2': 
            return (110.0) - (143.0)
        case 'tsg_road1/3': 
            return (110.0) - (143.0)
        case 'tsg_road1/4': 
            return (111.0) - (143.0)
        case 'tsg_road1/5': 
            return (111.0) - (143.0)
        case 'tsg_road1/6': 
            return (111.0) - (143.0)
        case 'tsg_road1/7': 
            return (112.0) - (143.0)
        case 'tsg_road1/8': 
            return (112.0) - (143.0)
        case 'tsg_road1/9': 
            return (113.0) - (143.0)
        case 'tsg_road1/10': 
            return (113.0) - (143.0)
        case 'tsg_road1/11': 
            return (114.0) - (143.0)
        case 'tsg_road1/12': 
            return (114.0) - (143.0)
        case 'tsg_road1/13': 
            return (115.0) - (143.0)
        case 'tsg_road1/14': 
            return (115.0) - (143.0)
        case 'tsg_road1/15': 
            return (115.0) - (143.0)
        case 'tsg_road1/16': 
            return (130.0) - (143.0)
        case 'tsg_road1/17': 
            return (130.0) - (143.0)
        case 'tsg_road1/18': 
            return (130.0) - (143.0)
        case 'tsg_road1/19': 
            return (130.0) - (143.0)
        case 'jxl_road1/1': 
            return (118.0) - (145.6)
        case 'jxl_road1/2': 
            return (118.0) - (145.6)
        case 'jxl_road1/3': 
            return (118.0) - (145.6)
        case 'jxl_road1/4': 
            return (118.0) - (145.6)
        case 'jxl_road1/5': 
            return (122.0) - (145.6)
        case 'jxl_road1/6': 
            return (106.0) - (133.2)
        case 'jxl_road2/1': 
            return (-2.0) - (24.1)
        case 'jxl_road2/2': 
            return (-2.0) - (24.1)
        case 'jxl_road2/3': 
            return (-2.0) - (24.1)
        case 'jxl_road2/4': 
            return (-2.0) - (24.1)
        case 'jxl_road2/5': 
            return (-2.0) - (24.1)
        case 'jxl_road2/6': 
            return (-2.0) - (24.1)
        case 'jxl_road3/1': 
            return (88.0) - (-82.5)
        case 'jxl_road3/2': 
            return (88.0) - (-82.5)
        case 'jxl_road3/3': 
            return (88.0) - (-82.5)
        case 'jxl_road3/4': 
            return (88.0) - (-82.5)
        case 'jxl_road3/5': 
            return (88.0) - (-82.5)
        case 'jxl_road3/6': 
            return (88.0) - (-82.5)
        case 'jxl_road3/7': 
            return (88.0) - (-82.5)
        case 'jxl_road3/8': 
            return (88.0) - (-82.5)
        case 'jxl_road3/9': 
            return (88.0) - (-82.5)
        case 'jxl_road3/10': 
            return (88.0) - (-82.5)
        case 'jxl_road3/11': 
            return (88.0) - (-82.5)
        case 'jxl_road3/12': 
            return (88.0) - (-82.5)
        case 'jxl_road3/13': 
            return (88.0) - (-82.5)
        case 'jxl_road3/14': 
            return (88.0) - (-82.5)
        case 'jxl_road3/15': 
            return (88.0) - (-82.5)
        case 'tq_road1/1': 
            return (106.0) - (175.0)
        case 'tq_road1/2': 
            return (106.0) - (175.0)
        case 'tq_road1/3': 
            return (106.0) - (175.0)
        case 'tq_road1/4': 
            return (106.0) - (175.0)
        case 'tq_road1/5': 
            return (106.0) - (175.0)
        case 'tq_road1/6': 
            return (106.0) - (175.0)
        case 'tq_road1/7': 
            return (106.0) - (175.0)
        case 'tq_road1/8': 
            return (106.0) - (175.0)
        case 'tq_road1/9': 
            return (106.0) - (175.0)
        case 'tq_road1/10': 
            return (106.0) - (175.0)
        case 'tq_road1/11': 
            return (106.0) - (175.0)
        case 'tq_road1/12': 
            return (106.0) - (175.0)
        case 'tq_road1/13': 
            return (106.0) - (175.0)
        case 'tq_road1/14': 
            return (106.0) - (175.0)
        case 'tq_road1/15': 
            return (106.0) - (175.0)
        case 'tq_road1/16': 
            return (106.0) - (175.0)
        case 'tq_road1/17': 
            return (106.0) - (175.0)
        case 'tq_road1/18': 
            return (106.0) - (175.0)
        case 'tq_road1/19': 
            return (106.0) - (175.0)
        case 'tq_road1/20': 
            return (106.0) - (175.0)
        case 'tq_road1/21': 
            return (106.0) - (175.0)
        case 'tq_road1/22': 
            return (106.0) - (175.0)
        case 'tq_road1/23': 
            return (106.0) - (175.0)
        case 'tq_road1/24': 
            return (106.0) - (175.0)
        case 'tq_road1/25': 
            return (106.0) - (175.0)
        case 'tq_road1/26': 
            return (106.0) - (175.0)
        case 'tq_road1/27': 
            return (106.0) - (175.0)
        case 'tq_road1/28': 
            return (106.0) - (175.0)
        case 'rh_road1/0': 
            return (196.0) - (-85.0)
        case 'rh_road1/1': 
            return (20.0) - (17.1)
        case 'rh_road1/2': 
            return (20.0) - (17.1)
        case 'rh_road1/3': 
            return (20.0) - (17.1)
        case 'rh_road1/4': 
            return (20.0) - (17.1)
        case 'rh_road1/5': 
            return (20.0) - (17.1)
        case 'rh_road1/6': 
            return (20.0) - (17.1)
        case 'rh_road1/7': 
            return (20.0) - (17.1)
        case 'rh_road1/8': 
            return (20.0) - (17.1)
        case 'rh_road1/9': 
            return (25.0) - (17.1)
        case 'rh_road1/10': 
            return (25.0) - (17.1)
        case 'rh_road1/11': 
            return (25.0) - (17.1)
        case 'rh_road1/12': 
            return (30.0) - (17.1)
        case 'rh_road1/13': 
            return (30.0) - (17.1)
        case 'rh_road1/14': 
            return (30.0) - (17.1)
        case 'rh_road1/15': 
            return (30.0) - (17.1)
        case 'rh_road1/16': 
            return (30.0) - (17.1)
        case 'rh_road1/17': 
            return (30.0) - (17.1)
        case 'rh_road1/18': 
            return (30.0) - (17.1)
        case 'rh_road1/19': 
            return (30.0) - (17.1)
        case 'rh_road1/20': 
            return (30.0) - (17.1)
        case 'rh_road1/21': 
            return (30.0) - (17.1)
        case 'rh_road1/22': 
            return (30.0) - (17.1)
        case 'rh_road1/23': 
            return (30.0) - (17.1)
        case 'rh_road1/24': 
            return (30.0) - (17.1)
        case 'rh_road1/25': 
            return (30.0) - (17.1)
        case 'rh_road1/26': 
            return (30.0) - (17.1)
        case 'rh_road1/27': 
            return (30.0) - (17.1)
        case 'rh_road1/28': 
            return (30.0) - (17.1)
        case 'rh_road1/29': 
            return (30.0) - (17.1)
        case 'rh_road1/30': 
            return (30.0) - (17.1)
        case 'rh_road1/31': 
            return (30.0) - (17.1)
        case 'rh_road1/32': 
            return (30.0) - (17.1)
        case 'rh_road1/33': 
            return (30.0) - (17.1)
        case 'rh_road1/34': 
            return (30.0) - (17.1)
        case 'rh_road1/35': 
            return (30.0) - (17.1)
        case 'rh_road1/36': 
            return (30.0) - (17.1)
        case 'rh_road1/37': 
            return (30.0) - (17.1)
        case 'rh_road1/38': 
            return (30.0) - (17.1)
        case 'rh_road1/39': 
            return (30.0) - (17.1)
        case 'rh_road2/1': 
            return (74.0) - (-165.2)
        case 'rh_road2/2': 
            return (75.0) - (-165.2)
        case 'rh_road2/3': 
            return (76.0) - (-165.2)
        case 'rh_road2/4': 
            return (77.0) - (-165.2)
        case 'rh_road2/5': 
            return (78.0) - (-165.2)
        case 'rh_road2/6': 
            return (78.0) - (-165.2)
        case 'rh_road2/7': 
            return (79.0) - (-165.2)
        case 'rh_road2/8': 
            return (80.0) - (-165.2)
        case 'rh_road2/9': 
            return (81.0) - (-165.2)
        case 'rh_road2/10': 
            return (82.0) - (-165.2)
        case 'rh_road2/11': 
            return (83.0) - (-165.2)
        case 'rh_road2/12': 
            return (84.0) - (-165.2)
        case 'rh_road2/13': 
            return (85.0) - (-165.2)
        case 'rh_road2/14': 
            return (85.0) - (-165.2)
        case 'rh_road2/15': 
            return (86.0) - (-165.2)
        case 'rh_road2/16': 
            return (87.0) - (-165.2)
        case 'rh_road2/17': 
            return (88.0) - (-165.2)
        case 'rh_road2/18': 
            return (89.0) - (-165.2)
        case 'rh_road2/19': 
            return (90.0) - (-165.2)
        case 'rh_road2/20': 
            return (91.0) - (-165.2)
        case 'rh_road2/21': 
            return (92.0) - (-165.2)
        case 'rh_road2/22': 
            return (93.0) - (-165.2)
        case 'rh_road2/23': 
            return (94.0) - (-165.2)
        case 'rh_road2/24': 
            return (95.0) - (-165.2)
        case 'rh_road2/25': 
            return (96.0) - (-165.2)
        case 'rh_road2/26': 
            return (97.0) - (-165.2)
        case 'rh_road2/27': 
            return (98.0) - (-165.2)
        case 'rh_road2/28': 
            return (98.0) - (-165.2)
        case 'rh_road2/29': 
            return (99.0) - (-165.2)
        case 'rh_road2/30': 
            return (100.0) - (-165.2)
        case 'ly_road1/1': 
            return (177.0) - (-108.0)
        case 'ly_road1/2': 
            return (177.0) - (-108.0)
        case 'ly_road1/3': 
            return (177.0) - (-108.0)
        case 'ly_road1/4': 
            return (177.0) - (-108.0)
        case 'ly_road1/5': 
            return (177.0) - (-108.0)
        case 'ly_road1/6': 
            return (177.0) - (-108.0)
        case 'ly_road1/7': 
            return (177.0) - (-108.0)
        case 'ly_road1/8': 
            return (177.0) - (-108.0)
        case 'ly_road1/9': 
            return (177.0) - (-108.0)
        case 'ly_road1/10': 
            return (177.0) - (-108.0)
        case 'ly_road1/11': 
            return (177.0) - (-108.0)
        case 'ly_road1/12': 
            return (177.0) - (-108.0)
        case 'ly_road1/13': 
            return (177.0) - (-108.0)
        case 'ly_road1/14': 
            return (177.0) - (-108.0)
        case 'ly_road1/15': 
            return (177.0) - (-108.0)
        case 'ly_road2/1': 
            return (177.0) - (-100.0)
        case 'ly_road2/2': 
            return (177.0) - (-100.0)
        case 'ly_road2/3': 
            return (177.0) - (-100.0)
        case 'ly_road2/4': 
            return (177.0) - (-100.0)
        case 'ly_road2/5': 
            return (177.0) - (-100.0)
        case 'ly_road2/6': 
            return (177.0) - (-100.0)
        case 'ly_road2/7': 
            return (177.0) - (-100.0)
        case 'ly_road2/8': 
            return (177.0) - (-100.0)
        case 'ly_road2/9': 
            return (177.0) - (-100.0)
        case 'ly_road2/10': 
            return (177.0) - (-100.0)
        case 'ly_road2/11': 
            return (177.0) - (-100.0)
        case 'ly_road2/12': 
            return (177.0) - (-100.0)
        case 'ly_road2/13': 
            return (177.0) - (-100.0)
        case 'ly_road2/14': 
            return (177.0) - (-100.0)
        case 'ly_road2/15': 
            return (177.0) - (-100.0)
        case 'ly_road2/16': 
            return (177.0) - (-100.0)
        case 'ly_road2/17': 
            return (177.0) - (-100.0)
        case 'ly_road2/18': 
            return (177.0) - (-100.0)
        case 'ly_road2/19': 
            return (177.0) - (-100.0)
        case 'ly_road2/20': 
            return (177.0) - (-100.0)
        case 'ly_road2/21': 
            return (177.0) - (-100.0)
        case 'ly_road2/22': 
            return (177.0) - (-100.0)
        case 'ly_road2/23': 
            return (177.0) - (-100.0)
        case 'ly_road3/1': 
            return (177.0) - (-100.0)
        case 'ly_road3/2': 
            return (177.0) - (-100.0)
        case 'ly_road3/3': 
            return (177.0) - (-100.0)
        case 'ly_road3/4': 
            return (177.0) - (-100.0)
        case 'ly_road3/5': 
            return (177.0) - (-100.0)
        case 'ly_road3/6': 
            return (177.0) - (-100.0)
        case 'ly_road3/7': 
            return (177.0) - (-100.0)
        case 'ly_road3/8': 
            return (177.0) - (-100.0)
        case 'ly_road3/9': 
            return (177.0) - (-100.0)
        case 'ly_road3/10': 
            return (177.0) - (-100.0)
        case 'ly_road3/11': 
            return (177.0) - (-100.0)
        case 'ly_road3/12': 
            return (177.0) - (-100.0)
        case 'ly_road3/13': 
            return (177.0) - (-100.0)
        case 'ly_road3/14': 
            return (177.0) - (-100.0)
        case 'ly_road4/1': 
            return (106.0) - (110.0)
        case 'ly_road4/2': 
            return (106.0) - (110.0)
        case 'ly_road4/3': 
            return (106.0) - (110.0)
        case 'ly_road4/4': 
            return (106.0) - (110.0)
        case 'ly_road4/5': 
            return (106.0) - (110.0)
        case 'ly_road4/6': 
            return (106.0) - (110.0)
        case 'ly_road4/7': 
            return (106.0) - (110.0)
        case 'jy_road1/1': 
            return (196.0) - (-170.0)
        case 'jy_road1/2': 
            return (196.0) - (-170.0)
        case 'jy_road1/3': 
            return (196.0) - (-170.0)
        case 'jy_road1/4': 
            return (196.0) - (-170.0)
        case 'jy_road1/5': 
            return (196.0) - (-170.0)
        case 'jy_road1/6': 
            return (196.0) - (-170.0)
        case 'jy_road1/7': 
            return (196.0) - (-170.0)
        case 'jy_road1/8': 
            return (196.0) - (-170.0)
        case 'jy_road1/9': 
            return (196.0) - (-82.4)
        case 'jy_road2/1': 
            return (89.0) - (-98.1)
        case 'jy_road2/2': 
            return (89.0) - (-98.1)
        case 'jy_road2/3': 
            return (89.0) - (-98.1)
        case 'jy_road2/4': 
            return (116.0) - (-74.5)
        case 'jy_road2/5': 
            return (116.0) - (-74.5)
        case 'jy_road2/6': 
            return (116.0) - (-74.5)
        case 'jy_road2/7': 
            return (116.0) - (-74.5)
        case 'jy_road2/8': 
            return (116.0) - (-74.5)
        case 'jy_road2/9': 
            return (116.0) - (-74.5)
        case 'jy_road2/10': 
            return (116.0) - (-74.5)
        case 'jy_road2/11': 
            return (116.0) - (-74.5)
        case 'jy_road2/12': 
            return (116.0) - (-74.5)
        case 'jy_road2/13': 
            return (116.0) - (-74.5)
        case 'jy_road2/14': 
            return (116.0) - (-74.5)
        case 'jy_road2/15': 
            return (116.0) - (-74.5)
        case 'jy_road2/16': 
            return (116.0) - (-74.5)
        case 'jy_road2/17': 
            return (116.0) - (-74.5)
        case 'jy_road2/18': 
            return (116.0) - (-74.5)
        case 'jy_road2/19': 
            return (116.0) - (-74.5)
        case 'jy_road2/20': 
            return (116.0) - (-74.5)
        case 'jy_road2/21': 
            return (116.0) - (-74.5)
        case 'jy_road2/22': 
            return (116.0) - (-74.5)
        case 'jy_road2/23': 
            return (116.0) - (-74.5)
        case 'jy_road2/24': 
            return (116.0) - (-74.5)
        case 'jy_road2/25': 
            return (116.0) - (-74.5)
        case 'jy_road2/26': 
            return (116.0) - (-74.5)
        case 'jy_road2/27': 
            return (116.0) - (-74.5)
        case 'jy_road2/28': 
            return (116.0) - (-74.5)
        case 'jy_road2/29': 
            return (116.0) - (-74.5)
        case 'jy_road2/30': 
            return (116.0) - (-74.5)
        case 'jy_road2/31': 
            return (116.0) - (-74.5)
        case 'jy_road3/1': 
            return (27.0) - (-12.0)
        case 'jy_road3/2': 
            return (27.0) - (-12.0)
        case 'tyg_road1/1': 
            return (27.0) - (-12.0)
        case 'tyg_road1/2': 
            return (27.0) - (-12.0)
        case 'tyg_road1/3': 
            return (27.0) - (-12.0)
        case 'tyg_road1/4': 
            return (27.0) - (-12.0)
        case 'tyg_road1/5': 
            return (27.0) - (-12.0)
        case 'tyg_road1/6': 
            return (27.0) - (-12.0)
        case 'tyg_road1/7': 
            return (27.0) - (-12.0)
        case 'tyg_road1/8': 
            return (27.0) - (-12.0)
        case 'tyg_road1/9': 
            return (27.0) - (-12.0)
        case 'tyg_road2/1': 
            return (116.0) - (80.0)
        case 'tyg_road2/2': 
            return (116.0) - (80.0)
        case 'tyg_road3/1': 
            return (225.0) - (166.8)
        case 'tyg_road3/2': 
            return (225.0) - (166.8)
        case 'tyg_road3/3': 
            return (225.0) - (166.8)
        case 'tyg_road3/4': 
            return (225.0) - (166.8)
        case 'tyg_road3/5': 
            return (225.0) - (166.8)
        case 'tyg_road3/6': 
            return (225.0) - (166.8)
        case 'tyg_road3/7': 
            return (225.0) - (166.8)
        case 'tyg_road3/8': 
            return (225.0) - (166.8)
        case 'tyg_road3/9': 
            return (225.0) - (166.8)
        case 'tyg_road3/10': 
            return (225.0) - (166.8)
        case 'tyg_road3/11': 
            return (225.0) - (166.8)
        case 'tyg_road3/12': 
            return (225.0) - (166.8)
        case 'rh_road3/1': 
            return (198.0) - (-100.0)
        case 'rh_road3/2': 
            return (198.0) - (-100.0)
        case 'rh_road3/3': 
            return (198.0) - (-100.0)
        case 'rh_road3/4': 
            return (198.0) - (-100.0)
        case 'rh_road3/5': 
            return (198.0) - (-100.0)
        case 'rh_road3/6': 
            return (198.0) - (-100.0)
        case 'rh_road3/7': 
            return (198.0) - (-100.0)
        case 'rh_road3/8': 
            return (198.0) - (-100.0)
        case 'rh_road3/9': 
            return (198.0) - (-100.0)
        case 'rh_road3/10': 
            return (198.0) - (-100.0)
        case 'rh_road3/11': 
            return (198.0) - (-100.0)
        case 'rh_road3/12': 
            return (198.0) - (-100.0)
        case 'rh_road3/13': 
            return (198.0) - (-100.0)
        case 'rh_road3/14': 
            return (198.0) - (-100.0)
        case 'rh_road3/15': 
            return (198.0) - (-100.0)
        case 'rh_road3/16': 
            return (198.0) - (-100.0)
        case 'rh_road3/17': 
            return (198.0) - (-100.0)
        case 'rh_road3/18': 
            return (198.0) - (-100.0)
        case 'rh_road3/19': 
            return (198.0) - (-100.0)
        case 'rh_road3/20': 
            return (198.0) - (-100.0)
        case 'rh_road3/21': 
            return (198.0) - (-100.0)
        case 'rh_road3/22': 
            return (198.0) - (-100.0)
        case 'rh_road3/23': 
            return (198.0) - (-100.0)
        case 'rh_road3/24': 
            return (198.0) - (-100.0)
        case 'rh_road3/25': 
            return (198.0) - (-100.0)
        case 'rh_road4/1': 
            return (6.0) - (68.1)
        case 'rh_road4/2': 
            return (7.0) - (68.1)
        case 'rh_road4/3': 
            return (8.0) - (68.1)
        case 'rh_road4/4': 
            return (9.0) - (68.1)
        case 'rh_road4/5': 
            return (10.0) - (68.1)
        case 'rh_road4/6': 
            return (11.0) - (68.1)
        case 'rh_road4/7': 
            return (12.0) - (68.1)
        case 'rh_road4/8': 
            return (13.0) - (68.1)
        case 'rh_road4/9': 
            return (14.0) - (68.1)
        case 'rh_road4/10': 
            return (15.0) - (68.1)
        case 'rh_road4/11': 
            return (16.0) - (68.1)
        case 'rh_road5/1': 
            return (106.0) - (-95.2)
        case 'rh_road5/2': 
            return (107.0) - (-95.2)
        case 'rh_road5/3': 
            return (108.0) - (-95.2)
        case 'rh_road5/4': 
            return (109.0) - (-95.2)
        case 'rh_road5/5': 
            return (110.0) - (-95.2)
        case 'rh_road5/6': 
            return (111.0) - (-95.2)
        case 'rh_road5/7': 
            return (112.0) - (-95.2)
        case 'rh_road5/8': 
            return (113.0) - (-95.2)
        case 'rh_road5/9': 
            return (114.0) - (-95.2)
        case 'rh_road5/10': 
            return (115.0) - (-95.2)
        case 'rh_road5/11': 
            return (116.0) - (-95.2)
        case 'rh_road5/12': 
            return (117.0) - (-95.2)
        case 'rh_road5/13': 
            return (118.0) - (-95.2)
        case 'rh_road5/14': 
            return (119.0) - (-95.2)
        case 'rh_road5/15': 
            return (120.0) - (-95.2)
        case 'rh_road5/16': 
            return (121.0) - (-95.2)
        case 'rh_road5/17': 
            return (122.0) - (-95.2)
        case 'rh_road5/18': 
            return (123.0) - (-95.2)
        case 'rh_road5/19': 
            return (124.0) - (-95.2)
        case 'rh_road5/20': 
            return (125.0) - (-95.2)
        case 'rh_road5/21': 
            return (126.0) - (-95.2)
        case 'rh_road5/22': 
            return (126.0) - (-95.2)
        case 'rh_road6/1': 
            return (90.0) - (179.0)
    

        default:
            console.log("getOffset case not found")
    }
    //     default:
    //         console.log("getOffset case not found")
    // }
    return 0;
}

function getNextPanorama(event, args) {
    const current_scene_id = window.streetViewer.getConfig().id
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
    window.streetViewer.loadScene(next_scene_id, window.streetViewer.getPitch(), window.streetViewer.getYaw() + (getOffset(current_scene_id) - getOffset(next_scene_id)) % 360, window.streetViewer.getHfov())
}

export const state = reactive({
    isSceneVisible: false,
    isStreetVisible: false,
    street_sceneID: null,
    scene_sceneID: null,
});

function enterStreetFromAerial(event, args) {
    state.street_sceneID = args[0]
    state.isStreetVisible = true
}

function enterScene(event, args) {
    state.scene_sceneID = args[0]
    state.isSceneVisible = true;
}
