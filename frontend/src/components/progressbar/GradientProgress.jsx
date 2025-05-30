import { ProgressBar } from "react-bootstrap";

function GradientProgress() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Gradient Progressbar</h4>
                <p className="page-description">Add property <code>variant=&quot;bg-gradient-&#123;color&#125;&quot;</code> for theme gradient color</p>
                <div className="template-demo">
                  <ProgressBar variant="gradient-primary" now={5}/>
                  <ProgressBar variant="gradient-success" now={25}/>
                  <ProgressBar variant="gradient-info" now={50}/>
                  <ProgressBar variant="gradient-warning" now={75}/>
                  <ProgressBar variant="gradient-danger" now={100}/>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default GradientProgress