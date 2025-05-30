import { Button } from "react-bootstrap";

function BtnSingle() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Single color buttons</h4>
            <p className="card-description">Add class <code>.btn-&#123;color&#125;</code> for buttons in theme colors</p>
            <div className="template-demo">
                <Button variant="btn btn-primary btn-fw">Primary</Button>
                <Button variant="btn btn-secondary btn-fw">Secondary</Button>
                <Button variant="btn btn-success btn-fw">Success</Button>
                <Button variant="btn btn-danger btn-fw">Danger</Button>
                <Button variant="btn btn-warning btn-fw">Warning</Button>
                <Button variant="btn btn-info btn-fw">Info</Button>
                <Button variant="btn btn-light btn-fw">Light</Button>
                <Button variant="btn btn-dark btn-fw">Dark</Button>
                <Button variant="btn btn-link btn-fw">Link</Button>
            </div>
        </div>
    </>
  )
}

export default BtnSingle