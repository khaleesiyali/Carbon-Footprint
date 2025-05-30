import React from 'react'
import Chord from '../../components/charts/nivo/Chord'
import HeatMap from '../../components/charts/nivo/HeatMap'
import Radar from '../../components/charts/nivo/Radar'
import Tree from '../../components/charts/nivo/Tree'
import TreeMap from '../../components/charts/nivo/TreeMap'



function Nivo() {
  return (
    <>
    <div>
        <div className="page-header">
          <h3 className="page-title"> Nivo Charts </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
              <li className="breadcrumb-item active" aria-current="page">Nivo</li>
            </ol>
          </nav>
        </div>
        <div className='row'>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Chord chart</h4>
                        <div style={{height: '500px'}}>
                          <Chord />
                         </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Heat Map</h4>
                        <div style={{height: '500px'}}>
                          <HeatMap />
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Radar chart</h4>
                        <div style={{height: '500px'}}>
                          <Radar />
                         </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 grid-margin stretch-card'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Tree Map</h4>
                        <div style={{height: '500px'}}>
                          <TreeMap />
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Tree</h4>
                        <div style={{height: '500px'}}>
                            <Tree />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Nivo