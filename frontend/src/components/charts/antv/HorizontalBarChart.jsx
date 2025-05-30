import React from 'react'
import { Bar } from '@ant-design/plots';


const data = [
  { year: '1951', value: 38 },
  { year: '1952', value: 52 },
  { year: '1956', value: 61 },
  { year: '1957', value: 145 },
  { year: '1958', value: 48 },
];

function HorizontalBarChart() {

const config = {
    data,
    xField: 'year',
    yField: 'value',
    shapeField: 'hollow',
    colorField: 'year',
    theme: 'classicDark',
    legend: {
      color: { size: 72, autoWrap: true, maxRows: 3, cols: 6 },
    },
  };

  return (
    <>
    <Bar {...config} />
    </>
  )
}

export default HorizontalBarChart