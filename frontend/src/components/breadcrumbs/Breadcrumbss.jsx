import {Breadcrumb} from 'react-bootstrap'

function Breadcrumbss() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Breadcrumbs</h4>
                <p className="card-description">Add class <code>.breadcrumbs</code></p>
                <div className="template-demo">
                  <Breadcrumb>
                    <Breadcrumb.Item>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Library
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                      Data
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      Data
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                      Files
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Breadcrumbss