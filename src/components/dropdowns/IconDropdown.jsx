import { Dropdown } from "react-bootstrap";

function IconDropdown() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Icon dropdowns</h4>
                <p className="card-description">
                  Add icon tags instead of text
                </p>
                <div className="row">
                  <div className="col-12">
                    <div className="template-demo d-flex flex-wrap justify-content-between">
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-gradient-warning" id="dropdownMenuIconButton1">
                          <i className="mdi mdi-earth"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-gradient-danger" id="dropdownMenuIconButton2">
                          <i className="mdi mdi-trophy-outline"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-gradient-info" id="dropdownMenuIconButton3">
                          <i className="mdi mdi-clock"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-gradient-success" id="dropdownMenuIconButton4">
                          <i className="mdi mdi-heart"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-gradient-warning" id="dropdownMenuIconButton5">
                          <i className="mdi mdi-logout"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-gradient-primary" id="dropdownMenuIconButton6">
                          <i className="mdi mdi-security"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-gradient-dark" id="dropdownMenuIconButton7">
                          <i className="mdi mdi-account"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-gradient-info" id="dropdownMenuIconButton8">
                          <i className="mdi mdi-bell"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-gradient-success" id="dropdownMenuIconButton7">
                          <i className="mdi mdi-account"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default IconDropdown