import {
  growthOverview, 
  invoices, 
  status, 
  profile,
  article,
  finance,
  reviews,
  activity,
  recommended
} from '../../components/widget/helper/rawData'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler, 
  ArcElement,
  BarElement
} from 'chart.js'

// import {Line} from 'react-chartjs-2'
import {Dropdown, ProgressBar} from 'react-bootstrap'
import Rating from 'react-rating'
import UsersDoughnutChart from '../../components/charts/chartjs/widgets/UsersDoughnutChart'
import AmountDueBarChart from '../../components/charts/chartjs/widgets/AmountDueBarChart'
import InvoiceLineChart from '../../components/charts/chartjs/widgets/InvoiceLineChart'

ChartJS.register({
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  BarElement
})

function Widget() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Widgets </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Widgets</a></li>
            <li className="breadcrumb-item active" aria-current="page">widgets</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        {growthOverview.map((data,id) => (
          <div key={id} className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-start">
                    <i className={data.icon}></i>
                  </div>
                  <div className="float-end">
                    <p className="mb-0 text-right text-light">{data.title}</p>
                    <div className="fluid-container">
                      <h3 className="fw-medium text-right mb-0 text-light">{data.count}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className={data.innerIcon} aria-hidden="true"></i>
                  {data.innerTxt}
                </p>
              </div>
            </div>
          </div>
        ))}
      {invoices.map((data,id) => (
          <div key={id} className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body pb-0">
                <p className="text-light">{data.title}</p>
                <div className="d-flex align-items-center">
                  <h4 className="fw-semibold text-light">{data.amount}</h4>
                  <h6 className={`fw-semibold ms-2 ${data.amountChange < 0 ? 'text-danger' : 'text-success'}`}>{data.amountChange}</h6>
                </div>
                <small className="text-muted">{data.innerTxt}</small>
              </div>
                <div className="graph-wrapper">
                  <InvoiceLineChart chartData={data.chartData} />
                </div>
            </div>
          </div>
      ))}
        <div className="col-12 grid-margin">
          <div className="card card-statistics">
            <div className="row">
            {status.map((data,id) => (
              <div key={id} className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                    <i className={data.icon}></i>
                    <div className="wrapper text-center text-sm-left">
                      <p className="card-text mb-0 text-light">{data.title}</p>
                      <div className="fluid-container">
                        <h3 className='mb-0 fw-medium text-light'>{data.num}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-5 d-flex align-items-center">
                    <UsersDoughnutChart />
                  </div>
                  <div className="col-md-7">
                    <h4 className="card-title fw-medium mb-0 d-none d-md-block">Active Users</h4>
                    <div className="wrapper mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 fw-medium">67,550</p>
                          <small className="text-muted ms-2">Email account</small>
                        </div>
                        <p className="mb-0 fw-medium">80%</p>
                      </div>
                        <ProgressBar variant="success" now={80}/>
                    </div>
                    <div className="wrapper mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 fw-medium">21,435</p>
                          <small className="text-muted ms-2">Requests</small>
                        </div>
                        <p className="mb-0 fw-medium">34%</p>
                      </div>
                        <ProgressBar variant="primary" now={34}/>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-7">
                      <h4 className="card-title fw-medium mb-3">Amount Due</h4>
                      <h1 className="fw-medium mb-0 text-light">$5998</h1>
                      <p className="text-muted">Milestone Completed</p>
                      <p className="mb-0">Payment for next week</p>
                    </div>
                    <div className="col-md-5 d-flex align-items-end mt-4 mt-md-0">
                      <AmountDueBarChart />    
                    </div>
                  </div>
              </div>
            </div>
          </div>
          {profile.map((data, id) => (
            <div key={id} className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-xl-flex flex-row">
                <img src={data.img} className="img-lg rounded" alt="profile icon" />
                <div className="ms-xl-3 mt-2 mt-xl-0">
                  <h6 className="text-light">{data.name}</h6>
                  <p className="text-muted">{data.email}</p>
                  <p className="mt-2 text-success fw-bold">{data.designation}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          ))}
          {article.map((data, id) => (
            <div key={id} className="col-md-4 grid-margin stretch-card">
            <div className="card">
            <img className="card-img-top" src={data.img} alt="card images" />
            <div className="card-body pb-0">
              <p className="text-muted">{data.location}</p>
              <h5>{data.title}</h5>
              <div className="d-flex align-items-center justify-content-between text-muted border-top py-3 mt-3">
                <p className="mb-0">{data.date}</p>
                <div className="wrapper d-flex align-items-center">
                  <small className="me-2">{data.count}</small>
                  <i className="mdi mdi-heart-outline"></i>
                </div>
              </div>
            </div>
            </div>
          </div>
          ))}
          {finance.map((data, id) => (
            <div key={id} className="col-md-4 grid-margin stretch-card">
            <div className="card aligner-wrapper">
              <div className="card-body">
                <div className={data.style}></div>
                <p className="mb-2 text-light">{data.title}</p>
                <div className="d-flex align-items-center">
                  <h1 className='fw-medium mb-2 text-light'>{data.amount}</h1>
                  <h5 className="fw-medium text-success ms-2">{data.change}</h5>
                </div>
                <div className="d-flex align-items-center">
                  <div className={data.dot}></div>
                    <p className="text-muted mb-0 ms-2">{data.innerTxt}</p>
                </div>
              </div>
            </div>
          </div>
          ))}
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 grid-margin stretch-card">
            <div className="card review-card">
              <div className="card-header header-sm d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Reviews</h4>
                <div className="wrapper d-flex align-items-center">
                  <p className="mb-0">23 New Reviews</p>
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="btn btn-transparent p-0" id="dropdownMenuOutlineButton1">
                      <i className="mdi mdi-dots-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Today</Dropdown.Item>
                        <Dropdown.Item>Yesterday</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body no-gutter">
              {reviews.map((data,id) => (
                <div key={id} className="list-item">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={data.img} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-light">{data.name}</h6>
                      <small className="time ms-3 d-none d-sm-block">{data.time}</small>
                      <div className="ms-auto">
                        <Rating 
                          initialRating={data.rating}
                          emptySymbol={<i className="mdi mdi-star text-muted me-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary me-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-light">{data.name}:</p>
                      <p className="review-text d-block">{data.review}</p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 grid-margin stretch-card">
            <div className="card activity-card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title">Activity</h4>
                  <Dropdown variant="p-0" align="end">
                    <Dropdown.Toggle variant="dropdown-toggle p-0">
                    <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Today</Dropdown.Item>
                      <Dropdown.Item>Yesterday</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <p className="card-description">What&apos;s people doing right now</p>
                {activity.map((data,id) => (
                <div key={id} className="list d-flex align-items-center border-bottom py-3">
                  <img className="img-sm rounded-circle" src={data.img} alt="" />
                  <div className="wrapper w-100 ms-3">
                    <p className="mb-0 text-light">
                      <b>{data.name}</b>posted in Material</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1"></i>
                          <p className="mb-0">{data.status}</p>
                        </div>
                        <small className="text-muted ms-auto">{data.time}</small>
                      </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recommended</h4>
                {recommended.map((data,id) => (
                <div key={id} className="wrapper d-flex align-items-center py-2 border-bottom">
                  <img className="img-sm rounded-circle" src={data.img} alt="profile" />
                  <div className="wrapper ms-3">
                    <h6 className="ms-1 mb-1 text-light">{data.name}</h6>
                    <small className="text-muted mb-0">
                      <i className="mdi mdi-map-marker-outline me-1"></i>{data.place}</small>
                  </div>
                  <div className="badge badge-pill badge-success ms-auto px-1 py-1">
                    <i className={data.icon}></i>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Updates</h4>
                <ul className="bullet-line-list">
                  <li>
                    <h6 className="text-light">User confirmation</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <p className="text-muted">
                      <i className="mdi mdi-clock"></i> 7 months ago.</p>
                  </li>
                  <li>
                    <h6 className="text-light">Continuous evaluation</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <p className="text-muted">
                      <i className="mdi mdi-clock"></i> 7 months ago.</p>
                  </li>
                  <li>
                    <h6 className="text-light">Promotion</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <p className="text-muted">
                      <i className="mdi mdi-clock"></i> 7 months ago.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Widget