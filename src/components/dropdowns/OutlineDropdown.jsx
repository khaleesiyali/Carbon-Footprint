import { Dropdown } from "react-bootstrap";


function OutlineDropdown() {
  return (
    <>
        <div className="card-body">
                <h4 className="card-title">Dropdown outline</h4>
                <p className="card-description">
                  Add class <code>.btn-outline-&#123;color&#125;</code> to the button inside <code>.dropdown</code>
                </p>
                <div className="template-demo">
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-outline-primary" id="dropdownMenuOutlineButton1">
                      Dropdown
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
                    <Dropdown.Toggle variant="btn btn-outline-secondary" id="dropdownMenuOutlineButton2">
                      Dropdown
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
                    <Dropdown.Toggle variant="btn btn-outline-danger" id="dropdownMenuOutlineButton3">
                      Dropdown
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
                    <Dropdown.Toggle variant="btn btn-outline-warning" id="dropdownMenuOutlineButton4">
                      Dropdown
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
                    <Dropdown.Toggle variant="btn btn-outline-success" id="dropdownMenuOutlineButton5">
                      Dropdown
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
                    <Dropdown.Toggle variant="btn btn-outline-info" id="dropdownMenuOutlineButton6">
                      Dropdown
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
    </>
  )
}

export default OutlineDropdown