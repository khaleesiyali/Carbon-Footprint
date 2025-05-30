import { Button } from "react-bootstrap";

function BtnSize() {
  return (
    <>
        <div className="col-md-5">
            <h4 className="card-title">Button Size</h4>
            <p className="card-description">Use class <code>.btn-&#123;size&#125;</code></p>
            <div className="template-demo">
              <Button variant="btn btn-outline-secondary btn-lg">btn-lg</Button>
              <Button variant="btn btn-outline-secondary btn-md">btn-md</Button>
              <Button variant="btn btn-outline-secondary btn-sm">btn-sm</Button>
              </div>
            <div className="template-demo mt-4">
              <Button variant="btn btn-gradient-danger btn-lg">btn-lg</Button>
              <Button variant="btn btn-gradient-success btn-md">btn-md</Button>
              <Button variant="btn btn-gradient-primary btn-sm">btn-sm</Button>
            </div>
        </div>
    </>
  )
}

export default BtnSize