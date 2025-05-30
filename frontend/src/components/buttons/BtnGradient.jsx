import { Button } from "react-bootstrap";

function BtnGradient() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Gradient buttons</h4>
            <p className="card-description">Add class <code>.btn-gradient-&#123;color&#125;</code> for gradient buttons</p>
            <div className="template-demo">
              <Button variant='btn btn-gradient-primary btn-fw'>Primary</Button>
              <Button variant="btn btn-gradient-secondary btn-fw">Secondary</Button>
              <Button variant="btn btn-gradient-success btn-fw">Success</Button>
              <Button variant="btn btn-gradient-warning btn-fw">Warning</Button>
              <Button variant="btn btn-gradient-danger btn-fw">Danger</Button>
              <Button variant="btn btn-gradient-info btn-fw">Info</Button>
              <Button variant="btn btn-gradient-light btn-fw">Light</Button>
              <Button variant="btn btn-gradient-dark btn-fw">Dark</Button>
              <Button variant="btn btn-link btn-fw">Link</Button>
            </div>
        </div>
    </>
  )
}

export default BtnGradient