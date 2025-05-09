import React from 'react'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css';

function HorizontalSlider({startValue, colorClass}) {
  return (
    <div>
        <Nouislider range={{ min: 0, max: 100 }} connect={[ true, false ]} start={startValue} className={colorClass}/>
    </div>
  )
}

export default HorizontalSlider