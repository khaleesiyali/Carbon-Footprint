import React from 'react'
import { Liquid } from '@ant-design/plots';

function PinLiquid() {

const config = {
    percent: 0.7,
    style: {
      shape: 'pin',
      textFill: '#fff',
      outlineBorder: 4,
      outlineDistance: 8,
      waveLength: 128,
    theme: 'classicDark',
    },
  };

  return (
    <>
        <Liquid {...config} />
    </>
  )
}

export default PinLiquid