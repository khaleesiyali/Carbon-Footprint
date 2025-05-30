import {ProgressBar} from 'react-bootstrap'

function AnimatedProgress() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Striped Animated</h4>
                <p className="page-description">Add property <code>animated</code>.</p>
                <div className="template-demo">
                  <ProgressBar variant="success" now={10} animated/>
                  <ProgressBar variant="primary" now={25} animated/>
                  <ProgressBar variant="info" now={50} animated/>
                  <ProgressBar variant="warning" now={75} animated/>
                  <ProgressBar variant="danger" now={100} animated/>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default AnimatedProgress