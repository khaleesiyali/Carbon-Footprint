import React from 'react'
import { ResponsiveChordCanvas } from '@nivo/chord'


function Chord() {
  return (
    <>
        <ResponsiveChordCanvas
        data={data}
        keys={[
            'John',
            'Raoul',
            'Jane',
            'Marcel',
            'Ibrahim',
            'Junko',
            'Lyu',
            'André',
            'Maki',
            'Véronique',
            'Thibeau',
            'Josiane',
            'Raphaël',
            'Mathéo',
            'Margot',
        ]}
        theme={{
          tooltip: {
            container: {
              background: 'white',
              color: 'black'
            }
          }
        }}
        margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
        valueFormat=".2f"
        padAngle={0.006}
        innerRadiusRatio={0.86}
        inactiveArcOpacity={0.4}
        arcBorderWidth={0}
        arcBorderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.4
                ]
            ]
        }}
        activeRibbonOpacity={0.75}
        inactiveRibbonOpacity={0}
        ribbonBorderWidth={0}
        ribbonBorderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.4
                ]
            ]
        }}
        labelOffset={9}
        labelRotation={-90}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1
                ]
            ]
        }}
        colors={{ scheme: 'red_purple' }}
        
        // legends={[
        //     {
        //         anchor: 'right',
        //         direction: 'column',
        //         justify: true,
        //         translateX: 120,
        //         translateY: 0,
        //         itemWidth: 80,
        //         itemHeight: 11,
        //         itemsSpacing: 0,
        //         itemTextColor: '#999',
        //         itemDirection: 'left-to-right',
        //         symbolSize: 12,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
    </>
  )
}


const data = [
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
  [
    1673,
    153,
    1419,
    447,
    367,
    389,
    482,
    152,
    56,
    188,
    202,
    1468,
    816,
    494,
    475,
    1540,
  ],
]
export default Chord