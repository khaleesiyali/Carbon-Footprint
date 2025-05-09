import { ProgressBar } from "react-bootstrap";


function LabelProgress() {
  return (
    <>
        <div className="col-md-6 grid-margin grid-margin-md-0 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">With Label</h4>
                <p className="page-description">Progress bar with labels</p>
                <div className="template-demo">
                  <ProgressBar variant="danger" className="progress-lg" now={60} label={`60%`}/>
                  <ProgressBar variant="success" className="progress-lg" now={90} label={`90%`}/>          
                  <ProgressBar variant="warning" className="progress-lg" now={60} label={`60% complete`}/>        
                  <ProgressBar variant="info" className="progress-lg" now={88} label={`88% complete`}/>        
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default LabelProgress