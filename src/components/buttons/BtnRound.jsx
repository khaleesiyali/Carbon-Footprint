import { Button } from "react-bootstrap";

function BtnRound() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Rounded buttons</h4>
            <p className="card-description">Add class <code>.btn-rounded</code></p>
            <div className="template-demo">
                <Button  variant="btn btn-gradient-primary btn-rounded btn-fw">Primary</Button>
                <Button  variant="btn btn-gradient-secondary btn-rounded btn-fw">Secondary</Button>
                <Button  variant="btn btn-gradient-success btn-rounded btn-fw">Success</Button>
                <Button  variant="btn btn-gradient-danger btn-rounded btn-fw">Danger</Button>
                <Button  variant="btn btn-gradient-warning btn-rounded btn-fw">Warning</Button>
                <Button  variant="btn btn-gradient-info btn-rounded btn-fw">Info</Button>
                <Button  variant="btn btn-gradient-light btn-rounded btn-fw">Light</Button>
                <Button  variant="btn btn-gradient-dark btn-rounded btn-fw">Dark</Button>
                <Button  variant="btn btn-link btn-rounded btn-fw">Link</Button>
            </div>
        </div>
    </>
  )
}

export default BtnRound