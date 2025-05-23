import {useState} from 'react'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css';
import HorizontalSlider from '../../components/sliders/HorizontalSlider';
import VerticalSlider from '../../components/sliders/VerticalSlider';

function Sliders() {
  const [ranges, setRanges] = useState({
    range_1: 53,
    range_2: [20, 80],
    range_3: [20, 80],
    range_4: [20, 80],
    range_5: [23.4, 54.3],
    range_6: [29.1, 74.1],
    range_7: [13.4, 89.3]
  });

  const onUpdateRange = (item) => (render, handle, value, un, percent) => {
    setRanges((prevRanges) => {
      const newRanges = {...prevRanges};
      if (item === 'range_1') {
        newRanges[item] = Math.round(percent[0]);        
      } else if (item === 'range_2' || item === 'range_3' || item === 'range_4') {
        newRanges[item] = [Math.round(percent[0]), Math.round(percent[1])];
      }
      return newRanges;
    })
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          Slider
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
            <li className="breadcrumb-item active" aria-current="page">Slider</li>
          </ol>
        </nav>
      </div>
      <div className='row'>
        <div className='col-md-6 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Horzontal Slider</h4>
              <p className="card-description">noUiSlider is a range slider without bloat. It offers a ton off features, and it is as small, lightweight and minimal as possible</p>
              <div className='template-demo'>
                <HorizontalSlider startValue={72} colorClass={"slider-primary"}/>
                <HorizontalSlider startValue={92} colorClass={"slider-danger"}/>
                <HorizontalSlider startValue={43} colorClass={"slider-warning"}/>
                <HorizontalSlider startValue={20} colorClass={"slider-info"}/>
                <HorizontalSlider startValue={75} colorClass={"slider-success"}/>                
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Vertical Slider</h4>
              <p className='card-description'>The orientation setting can be used to set the slider to <code>"vertical"</code> or <code>"horizontal"</code></p>
              <div className="template-demo d-flex justify-content-center">
                <VerticalSlider startValue={72} colorClass={'slider-primary'}/>
                <VerticalSlider startValue={92} colorClass={'slider-danger'}/>
                <VerticalSlider startValue={43} colorClass={'slider-warning'}/>
                <VerticalSlider startValue={20} colorClass={'slider-info'}/>
                <VerticalSlider startValue={75} colorClass={'slider-success'}/>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Values Range</h4>
              <p className="card-description">noUiSlider will keep your values within the slider range, which saves you a bunch of validation.</p>
              <div className='template-demo'>
                <Nouislider  range={{min: 0, max: 100}} start={ranges.range_1} connect={false} onUpdate={onUpdateRange('range_1')} className='slider-primary'/>
                <p className='mt-3'>Value: <span>{ranges.range_1}</span></p>
              </div>
            </div>
            <div className='card-body'>
              <h4 className='card-title'>Slider handles</h4>
              <div className='template-demo'>
                <Nouislider range={{min: 0, max: 100}} start={[ranges.range_2[0], ranges.range_2[1]]} connect={false} onUpdate={onUpdateRange('range_2')} className='slider-primary'/>
                <div className='d-flex justify-content-between'>
                  <p className='mt-3'>Value: <span>{ranges.range_2[0]}</span></p>
                  <p className='mt-3'>Value: <span>{ranges.range_2[1]}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Connected Handles</h4>
              <p className='card-description'>The connect setting can be used to control the bar between the handles, or the edges of the slider</p>
              <div className='template-demo'>
                <Nouislider range={{ min: 0, max: 100}} start={[ranges.range_3[0], ranges.range_3[1]]} connect={true} onUpdate={onUpdateRange('range_3')} className='slider-warning'/>
                <div className='d-flex justify-content-between'>
                  <p className="mt-3">Value: <span>{ranges.range_3[0]}</span></p>
                  <p className="mt-3">Value: <span>{ranges.range_3[1]}</span></p>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <h4 className='card-title'>Connected Handles Variation</h4>
              <div className='template-demo'>
                <Nouislider range={{ min: 0, max: 100}} start={[ranges.range_4[0], ranges.range_4[1]]} connect={true} onUpdate={onUpdateRange('range_4')} className='slider-danger'/>
                <div className='d-flex justify-content-between'>
                  <p className="mt-3">Value: <span>{ranges.range_4[0]}</span></p>
                  <p className="mt-3">Value: <span>{ranges.range_4[1]}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='card'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='card-body'>
                  <h4 className='card-title'>Slider with tooltip</h4>
                  <p className="card-description">noUiSlider can provide a basic tooltip without using its events system. Set the tooltips option to <code>true</code> to enable.</p>
                  <div className='mt-5 pt-4 w-75 mx-auto'>
                    <Nouislider range={{ min: 0, max: 100}} start={[ranges.range_5[0], ranges.range_5[1]]} connect={true} tooltips={true} className='slider-primary'/>
                  </div>
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>Color Variations</h4>
                  <p className="card-description">Tooltip slider with different color options, use class <code>slider-*</code> to quickly create a styled slider. Uses native boostrap colors scheme classes</p>
                  <div className='mt-5 pt-4 w-75 mx-auto'>
                    <Nouislider range={{ min: 0, max: 100 }} start={[ranges.range_6[0], ranges.range_6[1]]} connect={true} tooltips={true} className='slider-success'/>
                  </div>
                  <div className='mt-5 pt-4 w-75 mx-auto'>
                    <Nouislider range={{ min: 0, max: 100 }} start={[ranges.range_7[0], ranges.range_7[1]]} connect={false} tooltips={true} className='slider-danger'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sliders