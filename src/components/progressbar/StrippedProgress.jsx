import { ProgressBar } from "react-bootstrap";

function StrippedProgress() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Progressbar Striped</h4>
                <p className="page-description">Add property <code>striped</code>.</p>
                <div className="template-demo">
                  <ProgressBar variant="success" now={10} striped/>
                  <ProgressBar variant="primary" now={25} striped/>
                  <ProgressBar variant="info" now={50} striped/>
                  <ProgressBar variant="warning" now={75} striped/>
                  <ProgressBar variant="danger" now={100} striped/>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default StrippedProgress