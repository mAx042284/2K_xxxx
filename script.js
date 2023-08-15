TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "hfovMax": 120,
  "id": "panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F",
  "thumbnailUrl": "media/panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_t.jpg",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 4949,
       "width": 4949,
       "url": "media/panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 3217,
       "width": 3217,
       "url": "media/panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_E2904209_F07A_E8F5_4182_C4FF35F44080",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD, this.camera_E1B72CAD_F025_9BDB_41A9_CAD0603D09E1); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 29,
           "width": 26,
           "url": "media/panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -83.58,
        "hfov": 3.68,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15
       }
      ],
      "items": [
       {
        "yaw": -83.58,
        "hfov": 3.68,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "width": 52,
           "url": "media/panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -15
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_E3B78743_F065_9775_41D3_3D3FC23EB32E",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B, this.camera_E18D2CD7_F025_9B77_41D1_7C76F7EA9E19); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 24,
           "url": "media/panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -108.6,
        "hfov": 3.58,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.01
       }
      ],
      "items": [
       {
        "yaw": -108.6,
        "hfov": 3.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 52,
           "width": 49,
           "url": "media/panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -10.01
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_E5A13672_F7DA_E915_41ED_7E67DAFAA5E0",
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "Click for Info",
        "click": "this.showPopupPanoramaOverlay(this.popup_E5B0734B_F7DE_6F75_41E7_99EA9DA79679, {'iconWidth':20,'borderColor':'#000000','paddingLeft':5,'pressedIconWidth':200,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconWidth':20,'backgroundOpacity':0.33,'rollOverBackgroundOpacity':0.33,'rollOverIconColor':'#666666','rollOverIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingTop':5,'pressedIconHeight':200,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconLineWidth':5,'backgroundColorDirection':'vertical','iconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.33,'borderSize':0,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_E5EAEE13_F7E6_9915_41D8_62206D40E4BF, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 149,
           "url": "media/panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 15.89,
        "hfov": 44.57,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -28.38
       }
      ],
      "items": [
       {
        "yaw": 15.89,
        "hfov": 44.57,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 861,
           "width": 645,
           "url": "media/panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -28.38
       }
      ]
     },
     {
      "rotationZ": 0,
      "yaw": 15.89,
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 496,
         "width": 1024,
         "url": "media/popup_E5B0734B_F7DE_6F75_41E7_99EA9DA79679_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "showDuration": 500,
      "hideEasing": "cubic_out",
      "id": "popup_E5B0734B_F7DE_6F75_41E7_99EA9DA79679",
      "class": "PopupPanoramaOverlay",
      "rotationX": 0,
      "popupMaxWidth": "95%",
      "hideDuration": 500,
      "hfov": 35.43,
      "showEasing": "cubic_in",
      "pitch": -28.38
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_t.jpg"
   }
  ],
  "label": "10.1-8Kx8K",
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 67,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD",
     "thumbnailUrl": "media/panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD_t.jpg",
     "pitch": 0,
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 4949,
          "width": 4949,
          "url": "media/panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 3217,
          "width": 3217,
          "url": "media/panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_E263BB9E_F066_9F0C_41D7_CEFAA11E6DA0",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F, this.camera_E1BF4C59_F025_9B7B_41ED_57F970C0DC0E); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 18,
              "width": 23,
              "url": "media/panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 2.2,
           "hfov": 3.23,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -15.46
          }
         ],
         "items": [
          {
           "yaw": 2.2,
           "hfov": 3.23,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 36,
              "width": 46,
              "url": "media/panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -15.46
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_E2A4B6A4_F05A_A93C_41BB_C56139EF509D",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D, this.camera_E1B82C83_F025_9BCF_41E2_6EA5C99221D5); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 59,
              "width": 66,
              "url": "media/panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 118.43,
           "hfov": 8.57,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -27.46
          }
         ],
         "items": [
          {
           "yaw": 118.43,
           "hfov": 8.57,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 119,
              "width": 132,
              "url": "media/panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -27.46
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD_t.jpg"
      }
     ],
     "label": "11.1-8Kx8K",
     "hfov": 360,
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F",
       "backwardYaw": -83.58,
       "yaw": 2.2,
       "class": "AdjacentPanorama",
       "distance": 1
      },
      {
       "panorama": {
        "partial": false,
        "hfovMax": 120,
        "id": "panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D",
        "thumbnailUrl": "media/panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D_t.jpg",
        "pitch": 0,
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 4949,
             "width": 4949,
             "url": "media/panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 3217,
             "width": 3217,
             "url": "media/panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_E31298BE_F05A_990C_41E4_A32F62429D51",
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD, this.camera_E18B3D06_F025_9AC8_41D4_99DAB371FF77); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 61,
                 "width": 59,
                 "url": "media/panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 158.57,
              "hfov": 7.66,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -28.16
             }
            ],
            "items": [
             {
              "yaw": 158.57,
              "hfov": 7.66,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 123,
                 "width": 119,
                 "url": "media/panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -28.16
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D_t.jpg"
         }
        ],
        "label": "9.1-8KxK",
        "hfov": 360,
        "class": "Panorama",
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD",
          "backwardYaw": 118.43,
          "yaw": 158.57,
          "class": "AdjacentPanorama",
          "distance": 1
         }
        ]
       },
       "backwardYaw": 158.57,
       "yaw": 118.43,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": 2.2,
    "yaw": -83.58,
    "class": "AdjacentPanorama",
    "distance": 1
   },
   {
    "panorama": {
     "partial": false,
     "hfovMax": 120,
     "id": "panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B",
     "thumbnailUrl": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_t.jpg",
     "pitch": 0,
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 4949,
          "width": 4949,
          "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 3217,
          "width": 3217,
          "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_E3387F64_F07B_973C_41E0_69A26DC60FC3",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F, this.camera_E1835D37_F025_9AC8_41DF_9AF756BF546B); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 23,
              "width": 26,
              "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 10.5,
           "hfov": 3.74,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -16
          }
         ],
         "items": [
          {
           "yaw": 10.5,
           "hfov": 3.74,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 47,
              "width": 53,
              "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -16
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_E751F719_F066_7715_41E1_7D49955D1163",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "toolTip": "Click for info",
           "click": "this.showPopupPanoramaOverlay(this.popup_E6B55033_F05A_6915_41C2_90317D2B0254, {'iconWidth':20,'borderColor':'#000000','paddingLeft':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','rollOverIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingTop':5,'pressedIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconLineWidth':5,'backgroundColorDirection':'vertical','iconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'borderSize':0,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_E6B7FC7E_F025_F983_41D8_D3A756B2C186, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 47,
              "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_0_HS_1_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -76.79,
           "hfov": 15.97,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 3.09
          }
         ],
         "items": [
          {
           "yaw": -76.79,
           "hfov": 15.97,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 918,
              "width": 221,
              "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 3.09
          }
         ]
        },
        {
         "rotationZ": 0,
         "yaw": -76.79,
         "rotationY": 0,
         "popupMaxHeight": "95%",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 494,
            "width": 1024,
            "url": "media/popup_E6B55033_F05A_6915_41C2_90317D2B0254_0_1.png",
            "class": "ImageResourceLevel"
           }
          ]
         },
         "showDuration": 500,
         "hideEasing": "cubic_out",
         "id": "popup_E6B55033_F05A_6915_41C2_90317D2B0254",
         "class": "PopupPanoramaOverlay",
         "rotationX": 0,
         "popupMaxWidth": "95%",
         "hideDuration": 500,
         "hfov": 15.5,
         "showEasing": "cubic_in",
         "pitch": 3.09
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_E6F6F48F_F02A_A90C_4180_4AEFB350F8DD",
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "toolTip": "Miele Km 5736 Facette",
           "click": "this.showPopupPanoramaOverlay(this.popup_E64FE5DA_F02B_AB14_41E7_3D00AC1A99E9, {'iconWidth':20,'borderColor':'#000000','paddingLeft':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','rollOverIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingTop':5,'pressedIconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','pressedIconLineWidth':5,'backgroundColorDirection':'vertical','iconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'pressedBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'borderSize':0,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, null, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 189,
              "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_0_HS_2_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -139,
           "hfov": 31.99,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -41.52
          }
         ],
         "items": [
          {
           "yaw": -139,
           "hfov": 31.99,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 477,
              "width": 451,
              "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -41.52
          }
         ]
        },
        {
         "rotationZ": 0,
         "yaw": -139,
         "rotationY": 0,
         "popupMaxHeight": "95%",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 559,
            "width": 746,
            "url": "media/popup_E64FE5DA_F02B_AB14_41E7_3D00AC1A99E9_0_0.jpeg",
            "class": "ImageResourceLevel"
           },
           {
            "height": 383,
            "width": 512,
            "url": "media/popup_E64FE5DA_F02B_AB14_41E7_3D00AC1A99E9_0_1.jpeg",
            "class": "ImageResourceLevel"
           }
          ]
         },
         "showDuration": 500,
         "hideEasing": "cubic_out",
         "id": "popup_E64FE5DA_F02B_AB14_41E7_3D00AC1A99E9",
         "class": "PopupPanoramaOverlay",
         "rotationX": 0,
         "popupMaxWidth": "95%",
         "hideDuration": 500,
         "hfov": 30.54,
         "showEasing": "cubic_in",
         "pitch": -41.52
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_E6F14BF1_F025_BF15_41DE_8579A8FBA3B1",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.openLink(\"https://bt.rozetka.com.ua/ua/granado_gr3001/p325763854/?gclid=Cj0KCQjwoeemBhCfARIsADR2QCsjkmQoF0AyKj9YoW2Eq9fyGfsgMDJasXiOXCl4gLMLLZVrFjnA8AAaAqc8EALw_wcB\", \"_blank\")",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 170,
              "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_0_HS_3_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 154.24,
           "hfov": 34.47,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -43.6
          }
         ],
         "items": [
          {
           "yaw": 154.24,
           "hfov": 34.47,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 574,
              "width": 488,
              "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -43.6
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_E6982796_F0DE_773E_41ED_A6007FE9E0C4",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "toolTip": "Click for info",
           "click": "this.openLink(\"https://prom.ua/ua/p1821860761-smesitel-kuhonnyj-platinum.html\", \"_blank\")",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 64,
              "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_0_HS_4_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 153.12,
           "hfov": 10.1,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -40.28
          }
         ],
         "items": [
          {
           "yaw": 153.12,
           "hfov": 10.1,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 429,
              "width": 139,
              "url": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -40.28
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_t.jpg"
      }
     ],
     "label": "12.1-7Kx7K",
     "hfov": 360,
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F",
       "backwardYaw": -108.6,
       "yaw": 10.5,
       "class": "AdjacentPanorama",
       "distance": 1
      }
     ]
    },
    "backwardYaw": 10.5,
    "yaw": -108.6,
    "class": "AdjacentPanorama",
    "distance": 1
   }
  ]
 },
 {
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_camera",
  "class": "PanoramaCamera",
  "idleSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 89.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0.39
  },
  "timeToIdle": 5000
 },
 "this.panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FF4A12BE_F0FA_E90F_41E0_1F339F7DDD5F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FF4AA4F8_F0FB_A913_41C5_E595925CC71B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FE83C9B7_F0E5_9B1C_419E_1E520FBC467D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FF4A73AC_F0FA_AF0C_41E3_5B5473507FFD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ]
 },
 {
  "maximumZoomFactor": 1.2,
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "width": 750,
  "id": "map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1",
  "height": 471,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "height": 471,
     "width": 750,
     "url": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1.jpeg",
     "class": "ImageResourceLevel"
    },
    {
     "height": 235,
     "width": 375,
     "url": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1_lq.jpeg",
     "grayscale": true,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "overlays": [
   {
    "rollOverDisplay": false,
    "id": "overlay_E712AEA5_F066_97C3_41A2_CA9E5B20D567",
    "areas": [
     {
      "mapColor": "#FF0000",
      "toolTip": "Toilet",
      "click": "this.mainPlayList.set('selectedIndex', 2)",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "class": "AreaHotspotMapOverlay",
    "image": {
     "x": 94.85,
     "width": 130.9,
     "class": "HotspotMapOverlayImage",
     "height": 163.7,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 163,
        "width": 130,
        "url": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1_HS_0.png",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "y": 271.05
    },
    "map": {
     "offsetY": 0,
     "x": 94.85,
     "width": 130.9,
     "class": "HotspotMapOverlayMap",
     "height": 163.7,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 81,
        "width": 65,
        "url": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1_HS_0_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "y": 271.05
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_E6CFF269_F06A_6F42_41ED_515DB2DD7D91",
    "areas": [
     {
      "mapColor": "#FF0000",
      "toolTip": "Vestibule",
      "click": "this.mainPlayList.set('selectedIndex', 3)",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "class": "AreaHotspotMapOverlay",
    "image": {
     "x": 94.5,
     "width": 212.55,
     "class": "HotspotMapOverlayImage",
     "height": 155.3,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 155,
        "width": 212,
        "url": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1_HS_1.png",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "y": 104.55
    },
    "map": {
     "offsetY": 0,
     "x": 94.5,
     "width": 212.55,
     "class": "HotspotMapOverlayMap",
     "height": 155.3,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 77,
        "width": 106,
        "url": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1_HS_1_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "y": 104.55
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_E6467A78_F06E_FF43_41D2_63C70B688721",
    "areas": [
     {
      "mapColor": "#FF0000",
      "toolTip": "Living room",
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "class": "AreaHotspotMapOverlay",
    "image": {
     "x": 441.2,
     "width": 264.2,
     "class": "HotspotMapOverlayImage",
     "height": 278.65,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 278,
        "width": 264,
        "url": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1_HS_2.png",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "y": 155.65
    },
    "map": {
     "offsetY": 0,
     "x": 441.2,
     "width": 264.2,
     "class": "HotspotMapOverlayMap",
     "height": 278.65,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 139,
        "width": 132,
        "url": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1_HS_2_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "y": 155.65
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_E623CE0A_F066_B6C7_41E3_C4CFE31812CA",
    "areas": [
     {
      "mapColor": "#FF0000",
      "toolTip": "Kitchen",
      "click": "this.mainPlayList.set('selectedIndex', 1)",
      "class": "HotspotMapOverlayArea"
     }
    ],
    "class": "AreaHotspotMapOverlay",
    "image": {
     "x": 261.75,
     "width": 179.75,
     "class": "HotspotMapOverlayImage",
     "height": 173.1,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 173,
        "width": 179,
        "url": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1_HS_3.png",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "y": 261.2
    },
    "map": {
     "offsetY": 0,
     "x": 261.75,
     "width": 179.75,
     "class": "HotspotMapOverlayMap",
     "height": 173.1,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 86,
        "width": 89,
        "url": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1_HS_3_map.gif",
        "class": "ImageResourceLevel"
       }
      ]
     },
     "y": 261.2
    },
    "useHandCursor": true
   }
  ],
  "thumbnailUrl": "media/map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1_t.jpg",
  "initialZoomFactor": 1,
  "fieldOfViewOverlayRadiusScale": 0.3,
  "label": "Plan",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "scaleMode": "fit_inside",
  "minimumZoomFactor": 0.5,
  "class": "Map",
  "fieldOfViewOverlayOutsideColor": "#000000",
  "fieldOfViewOverlayInsideOpacity": 0.4
 },
 {
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "class": "MapPlayer",
  "viewerArea": "this.MapViewer"
 },
 {
  "id": "playList_E1A7EC1B_F025_9AFF_41D2_5C4B63760A6D",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_FDC3F59F_F0E7_AB0C_41DF_28BF9458C7B1",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 "this.popup_E5B0734B_F7DE_6F75_41E7_99EA9DA79679",
 {
  "levels": [
   {
    "height": 759,
    "width": 1566,
    "url": "media/popup_E5B0734B_F7DE_6F75_41E7_99EA9DA79679_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 496,
    "width": 1024,
    "url": "media/popup_E5B0734B_F7DE_6F75_41E7_99EA9DA79679_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 248,
    "width": 512,
    "url": "media/popup_E5B0734B_F7DE_6F75_41E7_99EA9DA79679_0_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_E5EAEE13_F7E6_9915_41D8_62206D40E4BF",
  "class": "ImageResource"
 },
 "this.popup_E6B55033_F05A_6915_41C2_90317D2B0254",
 {
  "levels": [
   {
    "height": 764,
    "width": 1581,
    "url": "media/popup_E6B55033_F05A_6915_41C2_90317D2B0254_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 494,
    "width": 1024,
    "url": "media/popup_E6B55033_F05A_6915_41C2_90317D2B0254_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 247,
    "width": 512,
    "url": "media/popup_E6B55033_F05A_6915_41C2_90317D2B0254_0_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_E6B7FC7E_F025_F983_41D8_D3A756B2C186",
  "class": "ImageResource"
 },
 "this.popup_E64FE5DA_F02B_AB14_41E7_3D00AC1A99E9",
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_E1BF3C59_F025_9B7B_41EC_95CC00B4EE69",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_E1BF4C59_F025_9B7B_41ED_57F970C0DC0E",
  "class": "PanoramaCamera",
  "idleSequence": "this.sequence_E1BF3C59_F025_9B7B_41EC_95CC00B4EE69",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 96.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "timeToIdle": 5000
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_E1B82C83_F025_9BCF_41E2_6EA5C99221D5",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -21.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_E1B72CAD_F025_9BDB_41A9_CAD0603D09E1",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -177.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_E18D2CD7_F025_9B77_41D1_7C76F7EA9E19",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -169.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_E18B3D06_F025_9AC8_41D4_99DAB371FF77",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -61.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_E1834D37_F025_9AC8_41E4_DA775D220339",
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_E1835D37_F025_9AC8_41DF_9AF756BF546B",
  "class": "PanoramaCamera",
  "idleSequence": "this.sequence_E1834D37_F025_9AC8_41E4_DA775D220339",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 71.4,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "timeToIdle": 5000
 }
], "children": [
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "playbackBarBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderSize": 0,
  "playbackBarHeadShadow": true,
  "toolTipShadowOpacity": 1,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontSize": 26,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "toolTipPaddingTop": 4,
  "progressBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBottom": 0,
  "playbackBarOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadHeight": 15,
  "toolTipBorderRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowBlurRadius": 3,
  "minHeight": 50,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBottom": 5,
  "progressLeft": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "borderSize": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "playbackBarRight": 0,
  "transitionMode": "blending",
  "width": "100%",
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "height": "100%",
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressOpacity": 1,
  "minWidth": 100,
  "borderRadius": 0,
  "shadow": false,
  "top": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressHeight": 10,
  "id": "MainViewer",
  "playbackBarBorderSize": 0,
  "toolTipPaddingRight": 6,
  "left": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontStyle": "normal",
  "toolTipFontColor": "#666666"
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "playbackBarBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBorderSize": 0,
  "playbackBarHeadShadow": true,
  "toolTipShadowOpacity": 1,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontSize": 26,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "toolTipPaddingTop": 4,
  "progressBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBottom": 2,
  "playbackBarOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadHeight": 15,
  "toolTipBorderRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowBlurRadius": 3,
  "minHeight": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBottom": 0,
  "progressLeft": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "borderSize": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "playbackBarRight": 0,
  "transitionMode": "blending",
  "width": "18.36%",
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "height": "22.171%",
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressOpacity": 1,
  "minWidth": 1,
  "borderRadius": 0,
  "shadow": false,
  "top": "0%",
  "playbackBarBackgroundOpacity": 1,
  "progressHeight": 10,
  "id": "MapViewer",
  "playbackBarBorderSize": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontStyle": "normal",
  "right": "0%",
  "toolTipFontColor": "#666666"
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "backgroundOpacity": 0.55,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "class": "UIComponent",
  "minWidth": 0,
  "borderRadius": 0,
  "shadow": false,
  "paddingBottom": 0,
  "top": 0,
  "visible": false,
  "id": "veilPopupPanorama",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "paddingTop": 0,
  "bottom": 0,
  "minHeight": 0,
  "left": 0,
  "backgroundColorDirection": "vertical",
  "right": 0
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "backgroundOpacity": 1,
  "backgroundColor": [],
  "backgroundColorRatios": [],
  "borderSize": 0,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "minWidth": 0,
  "borderRadius": 0,
  "shadow": false,
  "paddingBottom": 0,
  "top": 0,
  "visible": false,
  "id": "zoomImagePopupPanorama",
  "paddingTop": 0,
  "bottom": 0,
  "minHeight": 0,
  "left": 0,
  "backgroundColorDirection": "vertical",
  "right": 0
 },
 {
  "fontStyle": "normal",
  "paddingLeft": 5,
  "iconHeight": 20,
  "paddingRight": 5,
  "backgroundOpacity": 0.3,
  "mode": "push",
  "rollOverIconColor": "#666666",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "gap": 5,
  "fontSize": 12,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowBlurRadius": 6,
  "iconWidth": 20,
  "borderSize": 0,
  "class": "CloseButton",
  "shadowSpread": 1,
  "horizontalAlign": "center",
  "layout": "horizontal",
  "pressedIconColor": "#888888",
  "fontWeight": "normal",
  "iconBeforeLabel": true,
  "minWidth": 0,
  "cursor": "hand",
  "borderRadius": 0,
  "shadow": false,
  "paddingBottom": 5,
  "top": 10,
  "textDecoration": "none",
  "visible": false,
  "fontColor": "#FFFFFF",
  "id": "closeButtonPopupPanorama",
  "borderColor": "#000000",
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 350,
   "class": "FadeInEffect"
  },
  "paddingTop": 5,
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "iconColor": "#000000",
  "minHeight": 0,
  "backgroundColorDirection": "vertical",
  "fontFamily": "Arial",
  "label": "",
  "right": 10,
  "verticalAlign": "middle"
 }
], 
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "gap": 10,
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); }
 },
 "width": "100%",
 "borderSize": 0,
 "class": "Player",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_E1A7EC1B_F025_9AFF_41D2_5C4B63760A6D.set('selectedIndex', 0)",
 "verticalAlign": "top"
})