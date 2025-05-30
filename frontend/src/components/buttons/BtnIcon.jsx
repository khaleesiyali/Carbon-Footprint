import {Button} from 'react-bootstrap'

function BtnIcon() {
  return (
    <>
        <div className="col-md-7">
            <h4 className="card-title">Icon Buttons</h4>
            <p className="card-description">Add class <code>.btn-icon</code> for buttons with only icons</p>
            <div className="template-demo d-flex justify-content-between flex-nowrap">
              <Button variant="btn btn-gradient-primary btn-rounded btn-icon">
                <i className="mdi mdi-home-outline"></i>
              </Button>
              <Button variant="btn btn-gradient-dark btn-rounded btn-icon">
                <i className="mdi mdi mdi-microsoft-internet-explorer"></i>
              </Button>
              <Button variant="btn btn-gradient-danger btn-rounded btn-icon">
                <i className="mdi mdi-email-open"></i>
              </Button>
              <Button variant="btn btn-gradient-info btn-rounded btn-icon">
                <i className="mdi mdi-star"></i>
              </Button>
              <Button variant="btn btn-gradient-success btn-rounded btn-icon">
                <i className="mdi mdi-map-marker"></i>
              </Button>
            </div>
            <div className="template-demo d-flex justify-content-between flex-nowrap">
              <Button variant="btn btn-inverse-primary btn-icon">
                <i className="mdi mdi-home-outline"></i>
              </Button>
              <Button variant="btn btn-inverse-dark btn-icon">
                <i className="mdi mdi mdi-microsoft-internet-explorer"></i>
              </Button>
              <Button variant="btn btn-inverse-danger btn-icon">
                <i className="mdi mdi-email-open"></i>
              </Button>
              <Button variant="btn btn-inverse-info btn-icon">
                <i className="mdi mdi-star"></i>
              </Button>
              <Button variant="btn btn-inverse-success btn-icon">
                <i className="mdi mdi-map-marker"></i>
              </Button>
            </div>
            <div className="template-demo d-flex justify-content-between flex-nowrap mt-4">
              <Button variant="btn btn-outline-secondary btn-rounded btn-icon">
                <i className="mdi mdi-heart-outline text-danger"></i>
              </Button>
              <Button variant="btn btn-outline-secondary btn-rounded btn-icon">
                <i className="mdi mdi-music text-dark"></i>
              </Button>
              <Button variant="btn btn-outline-secondary btn-rounded btn-icon">
                <i className="mdi mdi-star text-primary"></i>
              </Button>
              <Button variant="btn btn-outline-secondary btn-rounded btn-icon">
                <i className="mdi mdi-signal text-info"></i>                          
              </Button>
              <Button variant="btn btn-outline-secondary btn-rounded btn-icon">
                <i className="mdi mdi-trending-up text-success"></i>                          
              </Button>
            </div>
            <div className="template-demo d-flex justify-content-between flex-nowrap">
              <Button variant="btn btn-outline-secondary btn-rounded btn-icon">
                <i className="mdi mdi-heart-outline"></i>
              </Button>
              <Button variant="btn btn-outline-secondary btn-rounded btn-icon">
                <i className="mdi mdi-music"></i>
              </Button>
              <Button variant="btn btn-outline-secondary btn-rounded btn-icon">
                <i className="mdi mdi-star"></i>
              </Button>
              <Button variant="btn btn-outline-secondary btn-rounded btn-icon">
                <i className="mdi mdi-signal"></i>                          
              </Button>
              <Button variant="btn btn-outline-secondary btn-rounded btn-icon">
                <i className="mdi mdi-trending-up"></i>                          
              </Button>
            </div>
        </div>
    </>
  )
}

export default BtnIcon