import { Button } from "react-bootstrap";

function BtnOutlined() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Outlined buttons</h4>
            <p className="card-description">Add class <code>.btn-outline-&#123;color&#125;</code> for outline buttons</p>
            <div className="template-demo">
                <Button  variant="btn btn-outline-primary btn-fw">Primary</Button>
                <Button  variant="btn btn-outline-secondary btn-fw">Secondary</Button>
                <Button  variant="btn btn-outline-success btn-fw">Success</Button>
                <Button  variant="btn btn-outline-danger btn-fw">Danger</Button>
                <Button  variant="btn btn-outline-warning btn-fw">Warning</Button>
                <Button  variant="btn btn-outline-info btn-fw">Info</Button>
                <Button  variant="btn btn-outline-light btn-fw">Light</Button>
                <Button  variant="btn btn-outline-dark btn-fw">Dark</Button>
                <Button  variant="btn btn-link btn-fw">Link</Button>
            </div>
        </div>
    </>
  )
}

export default BtnOutlined