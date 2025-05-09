import React from 'react'
import CustomBarChart from '../../components/charts/rechart/CustomBarChart'
import RadialChart from '../../components/charts/rechart/RadialChart'
import ScatterChart from '../../components/charts/rechart/ThreeDimScatterChart'
import ThreeDimScatterChart from '../../components/charts/rechart/ThreeDimScatterChart'
import VerticalLineChart from '../../components/charts/rechart/VerticalLineChart'

function Recharts() {
  return (
    <div>
        <div className="page-header">
          <h3 className="page-title">Recharts </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
              <li className="breadcrumb-item active" aria-current="page">Recharts</li>
            </ol>
          </nav>
        </div>
        <div className='row'>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Custom Bar chart</h4>
                        <div>
                            <CustomBarChart />
                         </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Radial Map</h4>
                        <div style={{ width: '100%', height: '400px' }}>
                          <RadialChart />
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Custom Bar chart</h4>
                        <div style={{ width: '100%', height: '400px' }}>
                          <VerticalLineChart />
                         </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Radial Map</h4>
                        <div style={{ width: '100%', height: '400px' }}>
                          <ThreeDimScatterChart />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recharts