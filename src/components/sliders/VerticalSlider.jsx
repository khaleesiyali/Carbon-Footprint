import React from 'react'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css';

function VerticalSlider({startValue, colorClass }) {
  return (
    <div>
        <Nouislider range={{ min: 0, max: 100 }} orientation='vertical' start={startValue} connect={[ true, false]} className={colorClass}/>
    </div>
  )
}

export default VerticalSlider