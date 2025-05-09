import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'

function Radar() {
  return (
    <>
        <ResponsiveRadar
            data={data}
            keys={[ 'chardonay', 'carmenere', 'syrah' ]}
            indexBy="taste"
            theme={{
              tooltip: {
                container: {
                  background: 'white',
                  color: 'black'
                }
              },
              text: {
                fill: 'white'
              }
            }}
            valueFormat=">-.2f"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            borderWidth={0}
            borderColor="#f500c0"
            gridShape="linear"
            gridLabelOffset={9}
            enableDots={false}
            dotSize={2}
            dotColor={{ theme: 'background' }}
            colors={{ scheme: 'accent' }}
            fillOpacity={0.3}
            blendMode="multiply"
            motionConfig="wobbly"
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    </>
  )
}

const data = [
  {
    "taste": "fruity",
    "chardonay": 101,
    "carmenere": 86,
    "syrah": 109
  },
  {
    "taste": "bitter",
    "chardonay": 114,
    "carmenere": 84,
    "syrah": 94
  },
  {
    "taste": "heavy",
    "chardonay": 62,
    "carmenere": 78,
    "syrah": 119
  },
  {
    "taste": "strong",
    "chardonay": 87,
    "carmenere": 110,
    "syrah": 50
  },
  {
    "taste": "sunny",
    "chardonay": 22,
    "carmenere": 108,
    "syrah": 43
  }
]

export default Radar