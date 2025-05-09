import { Breadcrumb } from "react-bootstrap";

function CustomBreadcrumbs() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Custom Breadcrumbs</h4>
                <p className="card-description">Add class <code>.breadcrumb-custom</code> for custom styling</p>
                <div className="template-demo">
                    <Breadcrumb className='breadcrumb-custom'>
                        <Breadcrumb.Item>
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Library
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Breadcrumb className='breadcrumb-custom'>
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
                    <Breadcrumb className='breadcrumb-custom'>
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

export default CustomBreadcrumbs