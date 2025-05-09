import VisitsChart from '../../components/charts/chartjs/dashboard/VisitsChart'
import TrafficChart from '../../components/charts/chartjs/dashboard/TrafficChart'
import RecentTickets from '../../components/tables/dashboard/RecentTickets'
import ProjectStatus from '../../components/tables/dashboard/ProjectStatus'
import TodoApp from '../../components/apps/TodoApp'
import InlineDatePicker from '../../components/forms/InlineDatePicker'

function RTLs() {


  return (
    <div>
      <div className='page-header'>
        <h3 className='page-title'>
          <span className='page-title-icon bg-gradient-primary text-white ms-2'>
            <i className='mdi mdi-home'></i>
          </span>
          Dashboard
        </h3>
        <nav aria-label='breadcrumb'>
          <ul className='breadcrumb'>
            <li className='breadcrumb-item active' aria-current='page'>
              <span>Overview <i className='mdi mdi-alert-circle-outline icon-sm text-primary align-middle'></i></span>
            </li>
          </ul>
        </nav>
      </div>
      <div className='row'>
        <div className='col-md-4 stretch-card grid-margin'>
          <div className='card bg-gradient-danger card-img-holder text-white'>
            <div className='card-body'>
              <img src="/images/dashboard/circle.png" alt="circle" className='card-img-absolute' />
              <h4 className="font-weight-normal mb-3">Weekly Sales <i className="mdi mdi-chart-line mdi-24px float-end ms-2"></i></h4>
              <h2 className='mb-5'>$ 15,0000</h2>
              <h6 className='card-text'>Increased by 60%</h6>
            </div>
          </div>
        </div>
        <div className='col-md-4 stretch-card grid-margin'>
          <div className='card bg-gradient-info card-img-holder text-white'>
            <div className='card-body'>
                <img src="/images/dashboard/circle.png" className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Weekly Orders <i className="mdi mdi-bookmark-outline mdi-24px float-end ms-2"></i></h4>
                <h2 className="mb-5">45,6334</h2>
                <h6 className="card-text">Decreased by 10%</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img src="/images/dashboard/circle.png" className="card-img-absolute" alt="circle" />
              <h4 className="font-weight-normal mb-3">Visitors Online <i className="mdi mdi-diamond mdi-24px float-end ms-2"></i>
              </h4>
              <h2 className="mb-5">95,5741</h2>
              <h6 className="card-text">Increased by 5%</h6>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-7 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <div className='clearfix mb-4'>
                <h4 className='card-title float-start'>Visits And Sales Statistics</h4>
                <div id='visit-sale-chart-legend' className='rounded-legend legend-horizontal legend-top-right float-end'>
                  <ul>
                    <li>
                      <span className='legend-dots bg-primary'></span>CHN
                    </li>
                    <li>
                      <span className='legend-dots bg-danger'></span>USA
                    </li>
                    <li>
                      <span className='legend-dots bg-info'></span>UK
                    </li>
                  </ul>
                </div>
              </div>
              <VisitsChart />
            </div>
          </div>
        </div>
        <div className='col-md-5 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Traffic Sources</h4>
              <TrafficChart />
              <div id='traffic-chart-legend' className='rounded-legend legend-vertical legend-bottom-left pt-4'>
                <ul>
                  <li>
                    <span className="legend-dots bg-info"></span>Search Engines
                    <span className="float-end">30%</span>
                  </li>
                  <li>
                    <span className="legend-dots bg-success"></span>Direct Click
                    <span className="float-end">30%</span>
                  </li>
                  <li>
                    <span className="legend-dots bg-danger"></span>Bookmarks Click
                    <span className="float-end">40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-5 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body p-0 d-flex'>
              <div className='dashboard-custom-date-picker'>
                <InlineDatePicker />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Updates</h4>
                <div className="d-flex">
                  <div className="d-flex align-items-center ms-4 text-muted fw-light">
                    <i className="mdi mdi-account-outline icon-sm ms-2"></i>
                    <span>jack Menqu</span>
                  </div>
                  <div className="d-flex align-items-center text-muted fw-light">
                    <i className="mdi mdi-clock icon-sm me-2"></i>
                    <span>October 3rd, 2018</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6 pr-1">
                    <img src="/images/dashboard/img_1.jpg" className="mb-2 mw-100 w-100 rounded" alt="face" />
                    <img src="/images/dashboard/img_4.jpg" className="mw-100 w-100 rounded" alt="face" />
                  </div>
                  <div className="col-6 pl-1">
                    <img src="/images/dashboard/img_2.jpg" className="mb-2 mw-100 w-100 rounded" alt="face" />
                    <img src="/images/dashboard/img_3.jpg" className="mw-100 w-100 rounded" alt="face "/>
                  </div>
                </div>
                <div className="d-flex mt-5 align-items-start">
                  <img src="/images/faces/face3.jpg" className="img-sm rounded-circle me-3" alt="face" />
                  <div className="mb-0 flex-grow">
                    <h5 className="me-2 mb-2">School Website - Authentication Module.</h5>
                    <p className="mb-0 font-weight-light">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                  </div>
                  <div className="ms-auto">
                    <i className="mdi mdi-heart-outline text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='row'>
        <div className='col-12 grid-margin'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Recent Tickets</h4>
              <RecentTickets />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-7 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Project Status</h4>
              <ProjectStatus />
            </div>
          </div>
        </div>
        <div className='col-xl-5 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Todo</h4>
              <TodoApp />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RTLs