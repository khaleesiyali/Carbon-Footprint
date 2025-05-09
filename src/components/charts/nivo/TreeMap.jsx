import React from 'react'
import { ResponsiveTreeMap } from '@nivo/treemap'

function TreeMap() {
  return (
    <>
        <ResponsiveTreeMap
            data={data}
            identity="name"
            value="loc"
            theme={{
              tooltip:{
                container: {
                  background: 'white',
                  color: 'black'
                }
              }
            }}
            valueFormat=".02s"
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            labelSkipSize={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.2
                    ]
                ]
            }}
            parentLabelPosition="left"
            parentLabelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            colors={{ scheme: 'red_purple' }}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.1
                    ]
                ]
            }}
     />
    </>
  )
}

const data = {
  "name": "nivo",
  "color": "hsl(144, 70%, 50%)",
  "children": [
    {
      "name": "viz",
      "color": "hsl(40, 70%, 50%)",
      "children": [
        {
          "name": "stack",
          "color": "hsl(202, 70%, 50%)",
          "children": [
            {
              "name": "cchart",
              "color": "hsl(341, 70%, 50%)",
              "loc": 128905
            },
            {
              "name": "xAxis",
              "color": "hsl(323, 70%, 50%)",
              "loc": 161655
            },
            {
              "name": "yAxis",
              "color": "hsl(57, 70%, 50%)",
              "loc": 93349
            },
            {
              "name": "layers",
              "color": "hsl(108, 70%, 50%)",
              "loc": 70640
            }
          ]
        },
        {
          "name": "ppie",
          "color": "hsl(131, 70%, 50%)",
          "children": [
            {
              "name": "chart",
              "color": "hsl(208, 70%, 50%)",
              "children": [
                {
                  "name": "pie",
                  "color": "hsl(78, 70%, 50%)",
                  "children": [
                    {
                      "name": "outline",
                      "color": "hsl(224, 70%, 50%)",
                      "loc": 94600
                    },
                    {
                      "name": "slices",
                      "color": "hsl(329, 70%, 50%)",
                      "loc": 156988
                    },
                    {
                      "name": "bbox",
                      "color": "hsl(148, 70%, 50%)",
                      "loc": 105528
                    }
                  ]
                },
                {
                  "name": "donut",
                  "color": "hsl(127, 70%, 50%)",
                  "loc": 96384
                },
                {
                  "name": "gauge",
                  "color": "hsl(333, 70%, 50%)",
                  "loc": 141072
                }
              ]
            },
            {
              "name": "legends",
              "color": "hsl(302, 70%, 50%)",
              "loc": 184342
            }
          ]
        }
      ]
    },
    {
      "name": "colors",
      "color": "hsl(21, 70%, 50%)",
      "children": [
        {
          "name": "rgb",
          "color": "hsl(11, 70%, 50%)",
          "loc": 29828
        },
        {
          "name": "hsl",
          "color": "hsl(354, 70%, 50%)",
          "loc": 96349
        }
      ]
    },
    {
      "name": "utils",
      "color": "hsl(143, 70%, 50%)",
      "children": [
        {
          "name": "randomize",
          "color": "hsl(285, 70%, 50%)",
          "loc": 11635
        },
        {
          "name": "resetClock",
          "color": "hsl(59, 70%, 50%)",
          "loc": 78544
        },
        {
          "name": "noop",
          "color": "hsl(97, 70%, 50%)",
          "loc": 162014
        },
        {
          "name": "tick",
          "color": "hsl(276, 70%, 50%)",
          "loc": 120898
        },
        {
          "name": "forceGC",
          "color": "hsl(11, 70%, 50%)",
          "loc": 192484
        },
        {
          "name": "stackTrace",
          "color": "hsl(336, 70%, 50%)",
          "loc": 120087
        },
        {
          "name": "dbg",
          "color": "hsl(259, 70%, 50%)",
          "loc": 35218
        }
      ]
    },
    {
      "name": "generators",
      "color": "hsl(213, 70%, 50%)",
      "children": [
        {
          "name": "address",
          "color": "hsl(65, 70%, 50%)",
          "loc": 63131
        },
        {
          "name": "city",
          "color": "hsl(72, 70%, 50%)",
          "loc": 152863
        },
        {
          "name": "animal",
          "color": "hsl(105, 70%, 50%)",
          "loc": 152303
        },
        {
          "name": "movie",
          "color": "hsl(74, 70%, 50%)",
          "loc": 100686
        },
        {
          "name": "user",
          "color": "hsl(112, 70%, 50%)",
          "loc": 28953
        }
      ]
    },
    {
      "name": "set",
      "color": "hsl(163, 70%, 50%)",
      "children": [
        {
          "name": "clone",
          "color": "hsl(322, 70%, 50%)",
          "loc": 99047
        },
        {
          "name": "intersect",
          "color": "hsl(50, 70%, 50%)",
          "loc": 66234
        },
        {
          "name": "merge",
          "color": "hsl(128, 70%, 50%)",
          "loc": 95884
        },
        {
          "name": "reverse",
          "color": "hsl(233, 70%, 50%)",
          "loc": 11960
        },
        {
          "name": "toArray",
          "color": "hsl(128, 70%, 50%)",
          "loc": 6731
        },
        {
          "name": "toObject",
          "color": "hsl(15, 70%, 50%)",
          "loc": 25949
        },
        {
          "name": "fromCSV",
          "color": "hsl(93, 70%, 50%)",
          "loc": 38925
        },
        {
          "name": "slice",
          "color": "hsl(340, 70%, 50%)",
          "loc": 192278
        },
        {
          "name": "append",
          "color": "hsl(225, 70%, 50%)",
          "loc": 179175
        },
        {
          "name": "prepend",
          "color": "hsl(360, 70%, 50%)",
          "loc": 13821
        },
        {
          "name": "shuffle",
          "color": "hsl(144, 70%, 50%)",
          "loc": 67768
        },
        {
          "name": "pick",
          "color": "hsl(71, 70%, 50%)",
          "loc": 138662
        },
        {
          "name": "plouc",
          "color": "hsl(91, 70%, 50%)",
          "loc": 46084
        }
      ]
    },
    {
      "name": "text",
      "color": "hsl(209, 70%, 50%)",
      "children": [
        {
          "name": "trim",
          "color": "hsl(193, 70%, 50%)",
          "loc": 60979
        },
        {
          "name": "slugify",
          "color": "hsl(285, 70%, 50%)",
          "loc": 34740
        },
        {
          "name": "snakeCase",
          "color": "hsl(275, 70%, 50%)",
          "loc": 47683
        },
        {
          "name": "camelCase",
          "color": "hsl(215, 70%, 50%)",
          "loc": 86230
        },
        {
          "name": "repeat",
          "color": "hsl(50, 70%, 50%)",
          "loc": 49465
        },
        {
          "name": "padLeft",
          "color": "hsl(341, 70%, 50%)",
          "loc": 146009
        },
        {
          "name": "padRight",
          "color": "hsl(33, 70%, 50%)",
          "loc": 118716
        },
        {
          "name": "sanitize",
          "color": "hsl(229, 70%, 50%)",
          "loc": 135819
        },
        {
          "name": "ploucify",
          "color": "hsl(288, 70%, 50%)",
          "loc": 163633
        }
      ]
    },
    {
      "name": "misc",
      "color": "hsl(95, 70%, 50%)",
      "children": [
        {
          "name": "greetings",
          "color": "hsl(161, 70%, 50%)",
          "children": [
            {
              "name": "hey",
              "color": "hsl(96, 70%, 50%)",
              "loc": 126565
            },
            {
              "name": "HOWDY",
              "color": "hsl(130, 70%, 50%)",
              "loc": 115428
            },
            {
              "name": "aloha",
              "color": "hsl(297, 70%, 50%)",
              "loc": 7489
            },
            {
              "name": "AHOY",
              "color": "hsl(359, 70%, 50%)",
              "loc": 185478
            }
          ]
        },
        {
          "name": "other",
          "color": "hsl(242, 70%, 50%)",
          "loc": 133692
        },
        {
          "name": "path",
          "color": "hsl(166, 70%, 50%)",
          "children": [
            {
              "name": "pathA",
              "color": "hsl(80, 70%, 50%)",
              "loc": 163981
            },
            {
              "name": "pathB",
              "color": "hsl(96, 70%, 50%)",
              "children": [
                {
                  "name": "pathB1",
                  "color": "hsl(106, 70%, 50%)",
                  "loc": 46699
                },
                {
                  "name": "pathB2",
                  "color": "hsl(18, 70%, 50%)",
                  "loc": 197339
                },
                {
                  "name": "pathB3",
                  "color": "hsl(228, 70%, 50%)",
                  "loc": 53609
                },
                {
                  "name": "pathB4",
                  "color": "hsl(352, 70%, 50%)",
                  "loc": 97003
                }
              ]
            },
            {
              "name": "pathC",
              "color": "hsl(208, 70%, 50%)",
              "children": [
                {
                  "name": "pathC1",
                  "color": "hsl(243, 70%, 50%)",
                  "loc": 194107
                },
                {
                  "name": "pathC2",
                  "color": "hsl(107, 70%, 50%)",
                  "loc": 31068
                },
                {
                  "name": "pathC3",
                  "color": "hsl(320, 70%, 50%)",
                  "loc": 103701
                },
                {
                  "name": "pathC4",
                  "color": "hsl(211, 70%, 50%)",
                  "loc": 166827
                },
                {
                  "name": "pathC5",
                  "color": "hsl(42, 70%, 50%)",
                  "loc": 32415
                },
                {
                  "name": "pathC6",
                  "color": "hsl(171, 70%, 50%)",
                  "loc": 16965
                },
                {
                  "name": "pathC7",
                  "color": "hsl(32, 70%, 50%)",
                  "loc": 152420
                },
                {
                  "name": "pathC8",
                  "color": "hsl(158, 70%, 50%)",
                  "loc": 70224
                },
                {
                  "name": "pathC9",
                  "color": "hsl(31, 70%, 50%)",
                  "loc": 48378
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default TreeMap