import React from 'react'
import { ResponsiveHeatMap } from '@nivo/heatmap'


const CustomTooltip = ({ cell }) => (
  <div style={{
    background: 'white',
    padding: '9px 12px',
    border: '1px solid #ccc',
  }}>
    <strong>x: {cell.data.x}</strong>
    <br />
    <strong>y: {cell.data.y}</strong>
    <br />
    <span style={{ color: 'your_desired_color_here' }}>
      value: {cell.data.value}
    </span>
  </div>
)

function HeatMap() {
  return (
    <>
        <ResponsiveHeatMap 
            data={data}
            margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
            valueFormat=">-.2s"
            forceSquare={true}
            theme={{
              tooltip:{
                container: {
                  background: 'white',
                  color: 'black'
                }
              },
              axis: {
                ticks: {
                  text: {
                    fill: 'white'
                  }
                  
                },
                legend: {
                  text: {
                    fill: 'white'
                  }
                }
              }
            }}
            axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -90,
                legend: '',
                legendOffset: 46,
                truncateTickAt: 0
            }}
            axisRight={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 70,
                truncateTickAt: 0
                
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: -72,
                truncateTickAt: 0
            }}
            colors={{
                type: 'diverging',
                scheme: 'red_purple',
                minValue: -100000,
                maxValue: 100000,
                divergeAt: 0.5
            }}
            emptyColor="#555555"
            inactiveOpacity={0.3}
        
        />

    </>
  )
}

const data = [
  {
    "id": "Japan",
    "data": [
      {
        "x": "Train",
        "y": -38767
      },
      {
        "x": "Subway",
        "y": -4969
      },
      {
        "x": "Bus",
        "y": -79910
      },
      {
        "x": "Car",
        "y": 67413
      },
      {
        "x": "Boat",
        "y": 76461
      },
      {
        "x": "Moto",
        "y": -8498
      },
      {
        "x": "Moped",
        "y": 55044
      },
      {
        "x": "Bicycle",
        "y": -12634
      },
      {
        "x": "Others",
        "y": 26163
      }
    ]
  },
  {
    "id": "France",
    "data": [
      {
        "x": "Train",
        "y": -37072
      },
      {
        "x": "Subway",
        "y": 51639
      },
      {
        "x": "Bus",
        "y": 37959
      },
      {
        "x": "Car",
        "y": -81577
      },
      {
        "x": "Boat",
        "y": 3534
      },
      {
        "x": "Moto",
        "y": 57279
      },
      {
        "x": "Moped",
        "y": 43321
      },
      {
        "x": "Bicycle",
        "y": 49735
      },
      {
        "x": "Others",
        "y": -41941
      }
    ]
  },
  {
    "id": "US",
    "data": [
      {
        "x": "Train",
        "y": 75452
      },
      {
        "x": "Subway",
        "y": 46585
      },
      {
        "x": "Bus",
        "y": -97720
      },
      {
        "x": "Car",
        "y": 46707
      },
      {
        "x": "Boat",
        "y": 40041
      },
      {
        "x": "Moto",
        "y": -70567
      },
      {
        "x": "Moped",
        "y": -14876
      },
      {
        "x": "Bicycle",
        "y": 87632
      },
      {
        "x": "Others",
        "y": -95801
      }
    ]
  },
  {
    "id": "Germany",
    "data": [
      {
        "x": "Train",
        "y": -31210
      },
      {
        "x": "Subway",
        "y": 85271
      },
      {
        "x": "Bus",
        "y": -70948
      },
      {
        "x": "Car",
        "y": -66408
      },
      {
        "x": "Boat",
        "y": -63980
      },
      {
        "x": "Moto",
        "y": 25971
      },
      {
        "x": "Moped",
        "y": 1768
      },
      {
        "x": "Bicycle",
        "y": 51373
      },
      {
        "x": "Others",
        "y": -41178
      }
    ]
  },
  {
    "id": "Norway",
    "data": [
      {
        "x": "Train",
        "y": 4887
      },
      {
        "x": "Subway",
        "y": 1360
      },
      {
        "x": "Bus",
        "y": 33654
      },
      {
        "x": "Car",
        "y": -35936
      },
      {
        "x": "Boat",
        "y": 45502
      },
      {
        "x": "Moto",
        "y": 53076
      },
      {
        "x": "Moped",
        "y": 42684
      },
      {
        "x": "Bicycle",
        "y": -74320
      },
      {
        "x": "Others",
        "y": -53199
      }
    ]
  },
  {
    "id": "Iceland",
    "data": [
      {
        "x": "Train",
        "y": -17871
      },
      {
        "x": "Subway",
        "y": -71264
      },
      {
        "x": "Bus",
        "y": -42265
      },
      {
        "x": "Car",
        "y": -53255
      },
      {
        "x": "Boat",
        "y": 95718
      },
      {
        "x": "Moto",
        "y": -93225
      },
      {
        "x": "Moped",
        "y": 91635
      },
      {
        "x": "Bicycle",
        "y": 22938
      },
      {
        "x": "Others",
        "y": -29272
      }
    ]
  },
  {
    "id": "UK",
    "data": [
      {
        "x": "Train",
        "y": 97945
      },
      {
        "x": "Subway",
        "y": -31473
      },
      {
        "x": "Bus",
        "y": 9539
      },
      {
        "x": "Car",
        "y": 32564
      },
      {
        "x": "Boat",
        "y": -18068
      },
      {
        "x": "Moto",
        "y": 98112
      },
      {
        "x": "Moped",
        "y": 69769
      },
      {
        "x": "Bicycle",
        "y": 32574
      },
      {
        "x": "Others",
        "y": 49524
      }
    ]
  },
  {
    "id": "Vietnam",
    "data": [
      {
        "x": "Train",
        "y": 48827
      },
      {
        "x": "Subway",
        "y": -57619
      },
      {
        "x": "Bus",
        "y": 16601
      },
      {
        "x": "Car",
        "y": -3677
      },
      {
        "x": "Boat",
        "y": -10427
      },
      {
        "x": "Moto",
        "y": 56426
      },
      {
        "x": "Moped",
        "y": 17450
      },
      {
        "x": "Bicycle",
        "y": 33613
      },
      {
        "x": "Others",
        "y": -84432
      }
    ]
  }
]

export default HeatMap