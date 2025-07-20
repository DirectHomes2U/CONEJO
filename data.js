var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "EXTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18459268865785106,
          "pitch": 0.0386954899844163,
          "rotation": 0,
          "target": "1-general"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-general",
      "name": "GENERAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4934487227468694,
          "pitch": 0.13788952330762427,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 0.2575354966719736,
          "pitch": 0.10752881041380746,
          "rotation": 0,
          "target": "3-corridor"
        },
        {
          "yaw": 3.004743949027482,
          "pitch": 0.11260261728683929,
          "rotation": 0,
          "target": "0-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06138523770086479,
          "pitch": 0.07726288309750018,
          "rotation": 0,
          "target": "3-corridor"
        },
        {
          "yaw": -1.1718521111628526,
          "pitch": 0.20817450500578438,
          "rotation": 0,
          "target": "1-general"
        },
        {
          "yaw": -1.9241655061272738,
          "pitch": 0.18429184178352465,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor",
      "name": "CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6587868160495205,
          "pitch": 0.0638962354218151,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": 1.8072630668024807,
          "pitch": 0.058740384896427855,
          "rotation": 0,
          "target": "5-bedroom"
        },
        {
          "yaw": 1.4149425743881512,
          "pitch": -0.015362088371405846,
          "rotation": 0,
          "target": "7-master-bedroom"
        },
        {
          "yaw": -1.546333054622755,
          "pitch": 0.14272114297731875,
          "rotation": 0,
          "target": "1-general"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0194032496673877,
          "pitch": 0.2994750329094309,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom",
      "name": "BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.129293309904483,
          "pitch": 0.17514141645577297,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-master-bathroom",
      "name": "MASTER BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9417985621611287,
          "pitch": 0.0717273450190632,
          "rotation": 0,
          "target": "7-master-bedroom"
        },
        {
          "yaw": -1.6902336222612568,
          "pitch": 0.14236105399623966,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-bedroom",
      "name": "MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5820162797163988,
          "pitch": -0.02982225127746041,
          "rotation": 0,
          "target": "6-master-bathroom"
        },
        {
          "yaw": 0.1906503345623598,
          "pitch": 0.059393439457137376,
          "rotation": 0,
          "target": "3-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
