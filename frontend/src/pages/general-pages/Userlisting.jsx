import {ProgressBar} from 'react-bootstrap'
import {userData} from '../../components/user-listing/userData'

function Userlisting() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex mb-4">
            <h5 className="me-2 fw-semibold border-end pe-2 me-2">Users</h5>
            <h5 className="fw-semibold">430</h5>
          </div>
          <div className="row">
            {userData.map((data, id) => (
            <div className="col-md-12 mb-5" key={id}>
              <div className="card rounded shadow-none border">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-5 d-sm-flex">
                      <div className="user-avatar mb-auto">
                        <img src={data.img} alt="profile" className="profile img-lg rounded-circle" />
                        <span className="edit-avatar-icon"><i className="mdi mdi-camera"></i></span>
                      </div>
                      <div className="wrapper ps-sm-4">
                        <div className="wrapper d-flex align-items-center">
                          <h4 className="mb-0 fw-medium">{data.name}</h4>
                          <div className="badge badge-secondary text-dark mt-2 ms-2">Pro</div>
                        </div>
                        <div className="wrapper d-flex align-items-center fw-medium text-muted">
                          <i className="mdi mdi-map-marker-outline me-2"></i>
                          <p className="mb-0 text-muted">{data.place}</p>
                        </div>
                        <div className="wrapper d-flex align-items-start pt-3">
                            {data.icons.map(icon => (
                          <div className="badge badge-secondary text-dark me-2"  key={icon}>
                              <i className={icon}></i>
                          </div>
                            ))}
                          <div className="wrapper ps-2">
                            <h6 className="mt-n1 mb-0 fw-medium">{data.views}</h6>
                            <p className="text-muted">Viewers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8 col-xl-4">
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <p className="mb-0 me-3 fw-semibold">Progress</p>
                        <p className="mb-0 ms-3 fw-semibold">{data.progress}%</p>
                      </div>
                      <ProgressBar variant={data.progressColor} now={data.progress}/>
                      <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-sm-4 col-xl-3">
                      <div className="wrapper d-flex justify-content-end">
                        <button type="button" className="btn btn-sm btn-inverse-primary me-2">ASK</button>
                        <button type="button" className="btn btn-sm btn-info">HIRE</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper border-top">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md mb-2 mb-md-0 d-flex">
                        <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                          <i className="mdi mdi-traffic-light icon-sm my-0 "></i>
                        </div>
                        <div className="wrapper ps-3">
                          <p className="mb-0 fw-medium text-muted">TOTAL TRAFFIC</p>
                          <h4 className="fw-semibold mb-0">{data.traffic}</h4>
                        </div>
                      </div>
                      <div className="col-md mb-2 mb-md-0 d-flex">
                        <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                          <i className="mdi mdi-account-plus icon-sm my-0 "></i>
                        </div>
                        <div className="wrapper ps-3">
                          <p className="mb-0 fw-medium text-muted">NEW USERS</p>
                          <h4 className="fw-semibold mb-0">{data.users}</h4>
                        </div>
                      </div>
                      <div className="col-md mb-2 mb-md-0 d-flex">
                        <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                          <i className="mdi mdi-server-security icon-sm my-0 "></i>
                        </div>
                        <div className="wrapper ps-3">
                          <p className="mb-0 fw-medium text-muted">SALES</p>
                          <h4 className="fw-semibold mb-0">{data.sales}</h4>
                        </div>
                      </div>
                      <div className="col-md mb-2 mb-md-0 d-flex">
                        <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                          <i className="mdi mdi-chart-arc icon-sm my-0 "></i>
                        </div>
                        <div className="wrapper ps-3">
                          <p className="mb-0 fw-medium text-muted">PERFORMANCE</p>
                          <h4 className="fw-semibold mb-0 text-primary">{data.performance}%</h4>
                        </div>
                      </div>
                      <div className="col-md mb-2 mb-md-0 d-flex align-items-center">
                        <div className="image-grouped ms-md-auto">
                          <img src="/images/faces/face20.jpg" data-toggle="tooltip" data-placement="top" title="Mary Sharp" alt="profile"/>
                          <img src="/images/faces/face17.jpg" data-toggle="tooltip" data-placement="top" title="Cory Medina" alt="profile"/>
                          <img src="/images/faces/face14.jpg" data-toggle="tooltip" data-placement="top" title="Clyde Hammond" alt="profile"/>
                          <div className="text-avatar" data-bs-toggle="tooltip" data-bs-placement="top" title="4 More Peoples">+4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Userlisting