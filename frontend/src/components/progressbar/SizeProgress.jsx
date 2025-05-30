import { ProgressBar } from "react-bootstrap";

function SizeProgress() {
  return (
    <>
        <div className="col-md-6 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Progressbar Sizes</h4>
                <p className="page-description">Use className <code>.progress-sm</code>, <code>.progress-lg</code>, <code>.progress-xl</code></p>
                <div className="template-demo">
                  <ProgressBar variant="info" className="progress-sm" now={25}/>
                  <ProgressBar variant="info" className="progress" now={50}/>          
                  <ProgressBar variant="info" className="progress-lg" now={75}/>          
                  <ProgressBar variant="info" className="progress-xl" now={100}/>          
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default SizeProgress