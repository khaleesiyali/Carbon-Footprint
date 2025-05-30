import { Dropdown, ButtonGroup } from "react-bootstrap";

function SplitDropdown() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Split button dropdowns</h4>
                <p className="card-description">
                  Wrap two buttons in <code>.btn-group</code> and add <code>.dropdown-toggle-split</code> to the toggling button
                </p>
                <div className="template-demo">
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-primary">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-primary dropdown-toggle-split" id="dropdownMenuSplitButton1">
                      <span className="sr-only">Toggle Dropdown</span>
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
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-danger">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-danger dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton2">
                      <span className="sr-only">Toggle Dropdown</span>
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
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-success">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-success dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton3">
                      <span className="sr-only">Toggle Dropdown</span>
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
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-secondary">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton4">
                      <span className="sr-only">Toggle Dropdown</span>
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
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-info">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-info dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton5">
                      <span className="sr-only">Toggle Dropdown</span>
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
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-warning">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-warning dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton6">
                      <span className="sr-only">Toggle Dropdown</span>
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

export default SplitDropdown