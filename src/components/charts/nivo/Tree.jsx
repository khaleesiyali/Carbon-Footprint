import React from 'react'

import { ResponsiveTree } from '@nivo/tree'

function Tree() {
  return (
    <>
        <ResponsiveTree
            data={data}
            identity="name"
            theme={{
              text: {
                fill: 'white'
              }
            }}
            activeNodeSize={20}
            inactiveNodeSize={12}
            nodeColor={{ scheme: 'red_purple' }}
            fixNodeColorAtDepth={1}
            linkThickness={2}
            activeLinkThickness={5}
            inactiveLinkThickness={2}
            linkColor={{
                from: 'target.color',
                modifiers: [
                    [
                        'opacity',
                        '0.7'
                    ]
                ]
            }}
            labelOffset={10}
            margin={{ top: 60, right: 10, bottom: 60, left: 10 }}
            motionConfig="stiff"
            meshDetectionRadius={80}
        />
    </>
  )
}

const data = {
  "name": "nivo",
  "color": "hsl(175, 70%, 50%)",
  "children": [
    {
      "name": "viz",
      "color": "hsl(89, 70%, 50%)",
      "children": [
        {
          "name": "stack",
          "color": "hsl(267, 70%, 50%)",
          "children": [
            {
              "name": "cchart",
              "color": "hsl(13, 70%, 50%)",
              "loc": 48563
            },
            {
              "name": "xAxis",
              "color": "hsl(234, 70%, 50%)",
              "loc": 135626
            },
            {
              "name": "yAxis",
              "color": "hsl(50, 70%, 50%)",
              "loc": 81751
            },
            {
              "name": "layers",
              "color": "hsl(119, 70%, 50%)",
              "loc": 144676
            }
          ]
        },
        {
          "name": "ppie",
          "color": "hsl(346, 70%, 50%)",
          "children": [
            {
              "name": "chart",
              "color": "hsl(38, 70%, 50%)",
              "children": [
                {
                  "name": "pie",
                  "color": "hsl(163, 70%, 50%)",
                  "children": [
                    {
                      "name": "outline",
                      "color": "hsl(250, 70%, 50%)",
                      "loc": 137392
                    },
                    {
                      "name": "slices",
                      "color": "hsl(267, 70%, 50%)",
                      "loc": 78992
                    },
                    {
                      "name": "bbox",
                      "color": "hsl(123, 70%, 50%)",
                      "loc": 162020
                    }
                  ]
                },
                {
                  "name": "donut",
                  "color": "hsl(352, 70%, 50%)",
                  "loc": 25428
                },
                {
                  "name": "gauge",
                  "color": "hsl(338, 70%, 50%)",
                  "loc": 94950
                }
              ]
            },
            {
              "name": "legends",
              "color": "hsl(43, 70%, 50%)",
              "loc": 1616
            }
          ]
        }
      ]
    },
    {
      "name": "colors",
      "color": "hsl(34, 70%, 50%)",
      "children": [
        {
          "name": "rgb",
          "color": "hsl(330, 70%, 50%)",
          "loc": 128134
        },
        {
          "name": "hsl",
          "color": "hsl(296, 70%, 50%)",
          "loc": 104565
        }
      ]
    },
    {
      "name": "utils",
      "color": "hsl(64, 70%, 50%)",
      "children": [
        {
          "name": "randomize",
          "color": "hsl(229, 70%, 50%)",
          "loc": 113990
        },
        {
          "name": "resetClock",
          "color": "hsl(213, 70%, 50%)",
          "loc": 131888
        },
        {
          "name": "noop",
          "color": "hsl(334, 70%, 50%)",
          "loc": 39350
        },
        {
          "name": "tick",
          "color": "hsl(35, 70%, 50%)",
          "loc": 36684
        },
        {
          "name": "forceGC",
          "color": "hsl(280, 70%, 50%)",
          "loc": 108016
        },
        {
          "name": "stackTrace",
          "color": "hsl(289, 70%, 50%)",
          "loc": 107940
        },
        {
          "name": "dbg",
          "color": "hsl(173, 70%, 50%)",
          "loc": 193889
        }
      ]
    },
    {
      "name": "generators",
      "color": "hsl(347, 70%, 50%)",
      "children": [
        {
          "name": "address",
          "color": "hsl(2, 70%, 50%)",
          "loc": 8917
        },
        {
          "name": "city",
          "color": "hsl(60, 70%, 50%)",
          "loc": 103745
        },
        {
          "name": "animal",
          "color": "hsl(22, 70%, 50%)",
          "loc": 13408
        },
        {
          "name": "movie",
          "color": "hsl(279, 70%, 50%)",
          "loc": 104222
        },
        {
          "name": "user",
          "color": "hsl(144, 70%, 50%)",
          "loc": 60822
        }
      ]
    },
    {
      "name": "set",
      "color": "hsl(267, 70%, 50%)",
      "children": [
        {
          "name": "clone",
          "color": "hsl(6, 70%, 50%)",
          "loc": 92882
        },
        {
          "name": "intersect",
          "color": "hsl(66, 70%, 50%)",
          "loc": 148827
        },
        {
          "name": "merge",
          "color": "hsl(324, 70%, 50%)",
          "loc": 70256
        },
        {
          "name": "reverse",
          "color": "hsl(148, 70%, 50%)",
          "loc": 72752
        },
        {
          "name": "toArray",
          "color": "hsl(340, 70%, 50%)",
          "loc": 187702
        },
        {
          "name": "toObject",
          "color": "hsl(359, 70%, 50%)",
          "loc": 151190
        },
        {
          "name": "fromCSV",
          "color": "hsl(16, 70%, 50%)",
          "loc": 39878
        },
        {
          "name": "slice",
          "color": "hsl(58, 70%, 50%)",
          "loc": 184441
        },
        {
          "name": "append",
          "color": "hsl(319, 70%, 50%)",
          "loc": 78569
        },
        {
          "name": "prepend",
          "color": "hsl(241, 70%, 50%)",
          "loc": 163448
        },
        {
          "name": "shuffle",
          "color": "hsl(311, 70%, 50%)",
          "loc": 17576
        },
        {
          "name": "pick",
          "color": "hsl(290, 70%, 50%)",
          "loc": 171948
        },
        {
          "name": "plouc",
          "color": "hsl(71, 70%, 50%)",
          "loc": 111303
        }
      ]
    },
    {
      "name": "text",
      "color": "hsl(93, 70%, 50%)",
      "children": [
        {
          "name": "trim",
          "color": "hsl(340, 70%, 50%)",
          "loc": 124169
        },
        {
          "name": "slugify",
          "color": "hsl(14, 70%, 50%)",
          "loc": 94416
        },
        {
          "name": "snakeCase",
          "color": "hsl(11, 70%, 50%)",
          "loc": 108539
        },
        {
          "name": "camelCase",
          "color": "hsl(326, 70%, 50%)",
          "loc": 124252
        },
        {
          "name": "repeat",
          "color": "hsl(236, 70%, 50%)",
          "loc": 125499
        },
        {
          "name": "padLeft",
          "color": "hsl(109, 70%, 50%)",
          "loc": 105025
        },
        {
          "name": "padRight",
          "color": "hsl(126, 70%, 50%)",
          "loc": 107037
        },
        {
          "name": "sanitize",
          "color": "hsl(358, 70%, 50%)",
          "loc": 108007
        },
        {
          "name": "ploucify",
          "color": "hsl(102, 70%, 50%)",
          "loc": 143908
        }
      ]
    },
    {
      "name": "misc",
      "color": "hsl(115, 70%, 50%)",
      "children": [
        {
          "name": "greetings",
          "color": "hsl(155, 70%, 50%)",
          "children": [
            {
              "name": "hey",
              "color": "hsl(107, 70%, 50%)",
              "loc": 68220
            },
            {
              "name": "HOWDY",
              "color": "hsl(60, 70%, 50%)",
              "loc": 12594
            },
            {
              "name": "aloha",
              "color": "hsl(252, 70%, 50%)",
              "loc": 114310
            },
            {
              "name": "AHOY",
              "color": "hsl(151, 70%, 50%)",
              "loc": 134682
            }
          ]
        },
        {
          "name": "other",
          "color": "hsl(3, 70%, 50%)",
          "loc": 35068
        },
        {
          "name": "path",
          "color": "hsl(27, 70%, 50%)",
          "children": [
            {
              "name": "pathA",
              "color": "hsl(104, 70%, 50%)",
              "loc": 91278
            },
            {
              "name": "pathB",
              "color": "hsl(138, 70%, 50%)",
              "children": [
                {
                  "name": "pathB1",
                  "color": "hsl(305, 70%, 50%)",
                  "loc": 197411
                },
                {
                  "name": "pathB2",
                  "color": "hsl(79, 70%, 50%)",
                  "loc": 188184
                },
                {
                  "name": "pathB3",
                  "color": "hsl(232, 70%, 50%)",
                  "loc": 65527
                },
                {
                  "name": "pathB4",
                  "color": "hsl(297, 70%, 50%)",
                  "loc": 26077
                }
              ]
            },
            {
              "name": "pathC",
              "color": "hsl(66, 70%, 50%)",
              "children": [
                {
                  "name": "pathC1",
                  "color": "hsl(162, 70%, 50%)",
                  "loc": 153377
                },
                {
                  "name": "pathC2",
                  "color": "hsl(222, 70%, 50%)",
                  "loc": 50994
                },
                {
                  "name": "pathC3",
                  "color": "hsl(277, 70%, 50%)",
                  "loc": 181186
                },
                {
                  "name": "pathC4",
                  "color": "hsl(101, 70%, 50%)",
                  "loc": 50835
                },
                {
                  "name": "pathC5",
                  "color": "hsl(173, 70%, 50%)",
                  "loc": 111698
                },
                {
                  "name": "pathC6",
                  "color": "hsl(252, 70%, 50%)",
                  "loc": 169966
                },
                {
                  "name": "pathC7",
                  "color": "hsl(146, 70%, 50%)",
                  "loc": 136731
                },
                {
                  "name": "pathC8",
                  "color": "hsl(333, 70%, 50%)",
                  "loc": 73523
                },
                {
                  "name": "pathC9",
                  "color": "hsl(148, 70%, 50%)",
                  "loc": 183495
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default Tree