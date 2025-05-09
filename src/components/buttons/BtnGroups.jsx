import { Button } from "react-bootstrap";

function BtnGroups() {
  return (
    <>
        <div className="col-md-6">
            <h4 className="card-title">Button groups</h4>
            <p className="card-description">Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code></p>
            <div className="template-demo">
              <div className="btn-group" role="group" aria-label="Basic example">
                <Button variant="btn btn-outline-secondary">1</Button>
                <Button variant="btn btn-outline-secondary">2</Button>
                <Button variant="btn btn-outline-secondary">3</Button>
              </div>
              <div className="btn-group" role="group" aria-label="Basic example">
                <Button variant="btn btn-outline-secondary">
                  <i className="mdi mdi-heart-outline"></i>
                </Button>
                <Button variant="btn btn-outline-secondary">
                  <i className="mdi mdi-calendar"></i>
                </Button>
                <Button variant="btn btn-outline-secondary">
                  <i className="mdi mdi-clock"></i>
                </Button>
              </div>
            </div>
            <div className="template-demo">
              <div className="btn-group" role="group" aria-label="Basic example">
                <Button variant="btn btn-primary">1</Button>
                <Button variant="btn btn-primary">2</Button>
                <Button variant="btn btn-primary">3</Button>
              </div>
              <div className="btn-group" role="group" aria-label="Basic example">
                <Button variant="btn btn-primary">
                  <i className="mdi mdi-heart-outline"></i>
                </Button>
                <Button variant="btn btn-primary">
                  <i className="mdi mdi-calendar"></i>
                </Button>
                <Button variant="btn btn-primary">
                  <i className="mdi mdi-clock"></i>
                </Button>
              </div>
            </div>
            <div className="template-demo mt-4">
              <div className="btn-group-vertical" role="group" aria-label="Basic example">
                <Button variant="btn btn-outline-secondary">
                  <i className="mdi mdi-format-vertical-align-top"></i>
                </Button>
                <Button variant="btn btn-outline-secondary">
                  <i className="mdi mdi-format-vertical-align-center"></i>
                </Button>
                <Button variant="btn btn-outline-secondary">
                  <i className="mdi mdi-format-vertical-align-bottom"></i>
                </Button>
              </div>
              <div className="btn-group-vertical" role="group" aria-label="Basic example">
                <Button variant="btn btn-outline-secondary">Default</Button>
                <div className="btn-group">
                  <Button variant="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown">Dropdown</Button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="!#" onClick={event => event.preventDefault()}>Go back</a>
                    <a className="dropdown-item" href="!#" onClick={event => event.preventDefault()}>Delete</a>
                    <a className="dropdown-item" href="!#" onClick={event => event.preventDefault()}>Swap</a>
                  </div>                          
                </div>
                <Button variant="btn btn-outline-secondary">Default</Button>
              </div>
              <div className="btn-group-vertical" role="group" aria-label="Basic example">
                <Button variant="btn btn-outline-secondary">Top</Button>
                <Button variant="btn btn-outline-secondary">Middle</Button>                          
                <Button variant="btn btn-outline-secondary">Bottom</Button>
              </div>
            </div>
            <div className="template-demo mt-4">
              <div className="btn-group" role="group" aria-label="Basic example">
                <Button variant="btn btn-outline-secondary">
                  <i className="mdi mdi-star d-block mb-1"></i>
                  Favourites
                </Button>
                <Button variant="btn btn-outline-secondary">
                  <i className="mdi mdi-reload d-block mb-1"></i>
                  Reload
                </Button>
                <Button variant="btn btn-outline-secondary">
                  <i className="mdi mdi-account d-block mb-1"></i>
                  Users
                </Button>
              </div>
            </div>
        </div>
    </>
  )
}

export default BtnGroups