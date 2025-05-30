import { Dropdown, ButtonGroup } from "react-bootstrap";

function Dropup() {
  return (
    <>
        <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Dropup variation</h4>
                <p className="card-description">
                  Add class <code>.dropup</code>
                </p>
                <div className="template-demo">
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-primary">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-primary" id="dropupMenuSplitButton1">
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
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-danger">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-danger" id="dropupMenuSplitButton2">
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
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-success">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-success" id="dropupMenuSplitButton3">
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
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-secondary">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-secondary" id="dropupMenuSplitButton4">
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
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-info">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-info" id="dropupMenuSplitButton5">
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
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-warning">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-warning" id="dropupMenuSplitButton6">
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

export default Dropup