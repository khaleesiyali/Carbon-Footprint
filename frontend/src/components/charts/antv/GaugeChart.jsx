import React from 'react'
import { Gauge } from '@ant-design/plots';

function GaugeChart() {

const config = {
    width: 520,
    height: 520,
    autoFit: true,
    margin: 20,
    theme: 'classicDark',
    data: {
      target: 120,
      total: 400,
      name: 'score',
    },
    legend: true,
  };

  return (
    <>
        <Gauge {...config} />
    </>
  )
}

export default GaugeChart