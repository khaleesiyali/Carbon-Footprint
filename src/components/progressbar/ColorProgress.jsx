import {ProgressBar} from 'react-bootstrap'

function ColorProgress() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Colored Progressbar</h4>
                <p className="page-description">Add property <code>variant=&#123;color&#125;</code> for theme colors</p>
                <div className="template-demo">
                  <ProgressBar variant="success" now={10}/>
                  <ProgressBar variant="primary" now={25}/>
                  <ProgressBar variant="info" now={50}/>
                  <ProgressBar variant="warning" now={75}/>
                  <ProgressBar variant="danger" now={100}/>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default ColorProgress