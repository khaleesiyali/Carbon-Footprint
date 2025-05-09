import {Button} from 'react-bootstrap'

function BtnBlock() {
  return (
    <>
        <div className="card">
            <div className="card-body">
              <h4 className="card-title">Block Buttons</h4>
              <p className="card-description">Add class <code>.d-grid gap-2</code></p>
              <div className="template-demo d-grid gap-2">
                <Button variant="btn btn-gradient-info btn-lg" size='lg'>Block buttons
                  <i className="mdi mdi-menu float-end"></i>
                </Button>
                <Button variant="btn btn-dark btn-lg" size='lg'>Block buttons</Button>
                <Button variant="btn btn-gradient-primary btn-lg" size='lg'>
                  <i className="mdi mdi-account"></i>                      
                  Block buttons
                </Button>
                <Button variant="btn btn-outline-secondary btn-lg" size='lg'>Block buttons</Button>
              </div>
            </div>
        </div>
    </>
  )
}

export default BtnBlock