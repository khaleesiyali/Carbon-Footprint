import LineChart from '../../components/charts/chartjs/common/LineChart'
import BarChart from '../../components/charts/chartjs/common/BarChart'
import AreaChart from '../../components/charts/chartjs/common/AreaChart'
import DoughnutChart from '../../components/charts/chartjs/common/DoughnutChart'
import PieChart from '../../components/charts/chartjs/PieChart'
import ScatterChart from '../../components/charts/chartjs/ScatterChart'
import VisitsChart from '../../components/charts/chartjs/dashboard/VisitsChart'
import TrafficChart from '../../components/charts/chartjs/dashboard/TrafficChart'


function Chartjs() {
  return (
    <>
        <div className="page-header">
            <h3 className="page-title">
                Chart-js
            </h3>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
                <li className="breadcrumb-item active" aria-current="page">Chart-js</li>
                </ol>
            </nav>
        </div>
        <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Line Chart</h4>
                        <LineChart />
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Bar Chart</h4>
                        <BarChart />    
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Area Chart</h4>
                        <AreaChart />    
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Doughnut Chart</h4>
                        <DoughnutChart />    
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Pie Chart</h4>
                        <PieChart />    
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Scatter Chart</h4>
                        <ScatterChart />    
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Visits Chart</h4>
                        <VisitsChart />    
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Traffic Chart</h4>
                        <TrafficChart />    
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Chartjs