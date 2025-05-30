import { Dropdown } from "react-bootstrap";

function SizeDropdown() {
  return (
    <>
        <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Dropdown sizes</h4>
                <p className="card-description">
                  Add class <code>.btn-&#123;size&#125;</code> to dropdown buttons
                </p>
                <div className="template-demo mt-5">
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-danger btn-lg" id="dropdownMenuSizeButton1">
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
                    <Dropdown.Toggle variant="btn btn-danger" id="dropdownMenuSizeButton2">
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
                    <Dropdown.Toggle variant="btn btn-danger btn-sm" id="dropdownMenuSizeButton3">
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
            </div>
        </div>
    </>
  )
}

export default SizeDropdown