import React from 'react'
import HorizontalBarChart from '../../components/charts/antv/HorizontalBarChart'
import GaugeChart from '../../components/charts/antv/GaugeChart'
import PinLiquid from '../../components/charts/antv/PinLiquid'
import BoxPlot from '../../components/charts/antv/BoxPlot'

function AntV() {
  return (
    <div>
        <div className="page-header">
          <h3 className="page-title">AntV </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
              <li className="breadcrumb-item active" aria-current="page">AntV</li>
            </ol>
          </nav>
        </div>
        <div className='row'>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Custom Bar chart</h4>
                        <div>
                            <HorizontalBarChart />
                         </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Gauge Map</h4>
                        <div>
                          <GaugeChart />
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Liquid Pin chart</h4>
                        <div>
                          <PinLiquid />
                         </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Box Plot</h4>
                        <div>
                          <BoxPlot />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AntV