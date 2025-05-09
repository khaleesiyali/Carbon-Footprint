import { Button } from "react-bootstrap";

function BtnInverse() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Inverse buttons</h4>
            <p className="card-description">Add class <code>.btn-inverse-&#123;color&#125; for inverse buttons</code></p>
            <div className="template-demo">
                <Button variant="btn btn-inverse-primary btn-fw">Primary</Button>
                <Button variant="btn btn-inverse-secondary btn-fw">Secondary</Button>
                <Button variant="btn btn-inverse-success btn-fw">Success</Button>
                <Button variant="btn btn-inverse-danger btn-fw">Danger</Button>
                <Button variant="btn btn-inverse-warning btn-fw">Warning</Button>
                <Button variant="btn btn-inverse-info btn-fw">Info</Button>
                <Button variant="btn btn-inverse-light btn-fw">Light</Button>
                <Button variant="btn btn-inverse-dark btn-fw">Dark</Button>
                <Button variant="btn btn-link btn-fw">Link</Button>
            </div>
        </div>
    </>
  )
}

export default BtnInverse