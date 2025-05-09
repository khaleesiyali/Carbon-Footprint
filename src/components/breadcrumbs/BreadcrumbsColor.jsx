import { Breadcrumb } from "react-bootstrap";

function BreadcrumbsColor() {
  return (
    <>
        <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Colored Breadcrumb Variations</h4>
                <p className="card-description">Add class <code>.bg-*</code> for solid colored breadcrumb</p>
                <div className="template-demo">

                    <Breadcrumb className="bg-primary">
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
                    <Breadcrumb className="bg-info">
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
                    <Breadcrumb className="bg-danger">
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
                    <Breadcrumb className="bg-success">
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
                    <Breadcrumb className="bg-warning">
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
                    <Breadcrumb className="bg-dark">
                        <Breadcrumb.Item>
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active className="text-light">
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

export default BreadcrumbsColor