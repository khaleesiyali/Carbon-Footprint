import {ProgressBar} from 'react-bootstrap'
import {projectData} from '../../components/ecommerce/projectData'

function Project() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex">
                <div className="wrapper">
                  <h4 className="card-title">All Projects (342)</h4>
                  <p>0 Selected - <span className="text-primary">Select all projects</span></p>
                </div>
                <div className="wrapper"></div>
              </div>
              <div className="row project-list-showcase">
                {projectData.map((data, id) => (
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 project-grid" key={id}>
                  {
                    data.mainImg === 1 ? <div className="img-holder img-bg-1"></div> : 
                    data.mainImg === 2 ? <div className="img-holder img-bg-2"></div> : 
                    data.mainImg === 3 ? <div className="img-holder img-bg-3"></div> : ''
                  }
                  <div className="project-grid-inner">
                    {
                      data.mainImg === 4 ? <img className="mb-3 mt-n3" src="/images/brand_icons/bitmap.jpg" alt="brand" />  :
                      data.mainImg === 5 ? <img className="mb-3 mt-n3" src="/images/brand_icons/oval-copy.jpg" alt="brand" />  :
                      data.mainImg === 6 ? <img className="mb-3 mt-n3" src="/images/brand_icons/oval.jpg" alt="brand" />  : ''
                    }
                    <div className="d-flex align-items-start">
                      <div className="wrapper">
                        <h5 className="project-title">{data.title}</h5>
                        <p className="project-location">{data.place}</p>
                      </div>
                      <div className={data.status == 'Finished' ? 'badge badge-gradient-success ms-auto' : data.status == 'On going' ? 'badge badge-gradient-secondary ms-auto' : data.status == 'Hold' ? 'badge badge-gradient-danger ms-auto' : null}>{data.status}</div>
                    </div>
                    <p className="project-description">{data.description}</p>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2 fw-medium">Progress</p>
                      <p className="mb-2 fw-medium">{data.progress}%</p>
                    </div>
                    <ProgressBar variant="success" className="progress-md mb-3" now={data.progress} />
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div className="action-tags d-flex flex-row">
                        <div className="wrapper pe-4"><i className="mdi mdi-view-sequential me-2"></i>{data.stacks}</div>
                        <div className="wrapper"><i className="mdi mdi-message-outline me-2"></i>{data.msg}</div>
                      </div>
                      <div className="image-grouped">
                        {data.profilepic.map(pic => (
                          <img className="img-xs rounded-circle" src={pic} alt="profile" key={pic} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project