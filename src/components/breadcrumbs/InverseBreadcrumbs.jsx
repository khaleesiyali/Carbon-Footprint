import { Breadcrumb } from "react-bootstrap";

function InverseBreadcrumbs() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Inverse Breadcrumbs</h4>
                <p className="card-description">Add class <code>.bg-inverse-*</code> for inverse skin</p>
                <div className="template-demo">
                  <Breadcrumb className="bg-inverse-primary">
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
                  <Breadcrumb className="bg-inverse-info">
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
                  <Breadcrumb className="bg-inverse-danger">
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
                  <Breadcrumb className="bg-inverse-success">
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
                  <Breadcrumb className="bg-inverse-warning">
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
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default InverseBreadcrumbs