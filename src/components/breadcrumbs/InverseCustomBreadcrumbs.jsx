import { Breadcrumb } from "react-bootstrap";

function InverseCustomBreadcrumbs() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Inverse Custom Breadcrumbs</h4>
                <p className="card-description">Add class <code>.bg-inverse-*</code> for inverse skin</p>
                <div className="template-demo">

                    <Breadcrumb className="breadcrumb-custom bg-inverse-primary">
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
                    <Breadcrumb className="breadcrumb-custom bg-inverse-info">
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
                    <Breadcrumb className="breadcrumb-custom bg-inverse-danger">
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
                    <Breadcrumb className="breadcrumb-custom bg-inverse-success">
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
                    <Breadcrumb className="breadcrumb-custom bg-inverse-warning">
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

export default InverseCustomBreadcrumbs