import {ProgressBar, Button} from 'react-bootstrap'
import Rating from 'react-rating'

function Profile() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          Profile
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General pages</a></li>
            <li className="breadcrumb-item active" aria-current="page">Profile</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <div className="border-bottom text-center pb-4">
                    <img src="/images/faces/face12.jpg" alt="profile" className="img-lg rounded-circle mb-3"/>
                    <div className="mb-3">
                      <h3>David Grey. H</h3>
                      <div className="d-flex align-items-center justify-content-center">
                        <h5 className="mb-0 me-2 text-muted">Canada</h5>
                        {/* <bar-rating [(rate)]="profileRate" [max]="5"></bar-rating> */}
                        <Rating
                          emptySymbol={<i className="mdi mdi-star text-muted e-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary e-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                          className="rating"
                        />
                      </div>
                    </div>
                    <p className="w-75 mx-auto mb-3">Bureau Oberhaeuser is a design bureau focused on Information- and Interface Design. </p>
                    <div className="d-flex justify-content-center">
                      <Button variant="btn btn-success e-1">Hire Me</Button>
                      <Button variant="btn btn-success">Follow</Button>
                    </div>
                  </div>
                  <div className="border-bottom py-4">
                    <p>Skills</p>
                    <div>
                      <label className="badge badge-outline-light me-1">Chalk</label>
                      <label className="badge badge-outline-light me-1">Hand lettering</label>
                      <label className="badge badge-outline-light me-1">Information Design</label>
                      <label className="badge badge-outline-light me-1">Graphic Design</label>
                      <label className="badge badge-outline-light my-1">Web Design</label>  
                    </div>                                                               
                  </div>
                  <div className="border-bottom py-4">
                    <div className="mb-3">
                      <ProgressBar variant="primary" now={55}/>
                    </div>
                    <div>
                      <ProgressBar variant="success" now={75}/>
                    </div>
                  </div>
                  <div className="py-4">
                    <p className="clearfix">
                      <span className="float-start">
                        Status
                      </span>
                      <span className="float-end text-muted">
                        Active
                      </span>
                    </p>
                    <p className="clearfix">
                      <span className="float-start">
                        Phone
                      </span>
                      <span className="float-end text-muted">
                        006 3435 22
                      </span>
                    </p>
                    <p className="clearfix">
                      <span className="float-start">
                        Mail
                      </span>
                      <span className="float-end text-muted">
                        Jacod@testmail.com
                      </span>
                    </p>
                    <p className="clearfix">
                      <span className="float-start">
                        Facebook
                      </span>
                      <span className="float-end text-muted">
                        <a href="!#" onClick={event => event.preventDefault()}>David Grey</a>
                      </span>
                    </p>
                    <p className="clearfix">
                      <span className="float-start">
                        Twitter
                      </span>
                      <span className="float-end text-muted">
                        <a href="!#" onClick={event => event.preventDefault()}>@davidgrey</a>
                      </span>
                    </p>
                  </div>
                  <div className='d-grid gap-2'>
                    <Button variant="btn btn-primary mb-2">Preview</Button>
                  </div>
                </div>
                <div className="col-lg-8">
                    <div className="d-block d-md-flex justify-content-between mt-4 mt-md-0">
                      <div className="text-center mt-4 mt-md-0">
                        <Button variant="btn btn-outline-primary">Message</Button>
                        <Button variant="btn btn-primary">Request</Button>
                      </div>
                    </div>
                    <div className="mt-4 py-2 border-top border-bottom">
                      <ul className="nav profile-navbar">
                        <li className="nav-item">
                          <a className="nav-link d-flex align-items-center" href="!#" onClick={event => event.preventDefault()}>
                            <i className="mdi mdi-account-outline e-1"></i>
                            Info
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link d-flex align-items-center active" href="!#" onClick={event => event.preventDefault()}>
                            <i className="mdi mdi-newspaper e-1"></i>
                            Feed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link d-flex align-items-center" href="!#" onClick={event => event.preventDefault()}>
                            <i className="mdi mdi-calendar e-1"></i>
                            Agenda
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link d-flex align-items-center" href="!#" onClick={event => event.preventDefault()}>
                            <i className="mdi mdi-attachment e-1"></i>
                            Resume
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="profile-feed">
                      <div className="d-flex align-items-start profile-feed-item">
                        <img src="/images/faces/face13.jpg" alt="profile" className="img-sm rounded-circle"/>
                        <div className="ms-4">
                          <h6>
                            Mason Beck
                            <small className="ms-4 text-muted"><i className="mdi mdi-clock e-1"></i>10 hours</small>
                          </h6>
                          <p>
                            There is no better advertisement campaign that is low cost and also successful at the same time.
                          </p>
                          <p className="small text-muted mt-2 mb-0">
                            <span>
                              <i className="mdi mdi-star e-1"></i>4
                            </span>
                            <span className="ms-2">
                              <i className="mdi mdi-comment e-1"></i>11
                            </span>
                            <span className="ms-2">
                              <i className="mdi mdi-reply"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    <div className="d-flex align-items-start profile-feed-item">
                      <img src="/images/faces/face16.jpg" alt="profile" className="img-sm rounded-circle"/>
                      <div className="ps-4">
                        <h6>
                          Willie Stanley
                          <small className="ms-4 text-muted"><i className="mdi mdi-clock e-1"></i>10 hours</small>
                        </h6>
                        <img src="/images/samples/1280x768/12.jpg" alt="sample" className="rounded mw-100"/>
                        <p className="small text-muted mt-2 mb-0">
                          <span>
                            <i className="mdi mdi-star e-1"></i>4
                          </span>
                          <span className="ms-2">
                            <i className="mdi mdi-comment e-1"></i>11
                          </span>
                          <span className="ms-2">
                            <i className="mdi mdi-reply"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start profile-feed-item">
                      <img src="/images/faces/face19.jpg" alt="profile" className="img-sm rounded-circle"/>
                      <div className="ps-4">
                        <h6>
                          Dylan Silva
                          <small className="ms-4 text-muted"><i className="mdi mdi-clock e-1"></i>10 hours</small>
                        </h6>
                        <p>
                          When I first got into the online advertising business, I was looking for the magical combination 
                          that would put my website into the top search engine rankings
                        </p>
                        <img src="/images/samples/1280x768/5.jpg" alt="sample" className="rounded mw-100"/>                                                        
                        <p className="small text-muted mt-2 mb-0">
                          <span>
                            <i className="mdi mdi-star e-1"></i>4
                          </span>
                          <span className="ms-2">
                            <i className="mdi mdi-comment e-1"></i>11
                          </span>
                          <span className="ms-2">
                            <i className="mdi mdi-reply"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile