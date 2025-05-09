import {Button, Alert} from 'react-bootstrap'
import {ToastContainer, toast} from 'react-toastify'

function Notifications() {


  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
            Notifications
        </h3>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Features</a></li>
            <li className="breadcrumb-item active" aria-current="page">Notifications</li>
            </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card px-3">
            <div className="card-body">
            <h4 className="card-title">Toast Styles</h4>
              <p className="card-description mb-0">
              Click on the below buttons for notifications in different styles. 
              </p>
              <div className="template-demo d-flex justify-content-md-between flex-wrap">
                <Button variant="btn btn-gradient-success btn-fw" onClick={() => toast.success("This is success message!")}>Success</Button>
                <Button variant="btn btn-gradient-info btn-fw" onClick={() => toast.info("This is info message!")}>Info</Button>
                <Button variant="btn btn-gradient-warning btn-fw" onClick={() => toast.warning("This is warning message!")}>Warning</Button>
                <Button variant="btn btn-gradient-danger btn-fw" onClick={() => toast.error("This is error message!")}>Error</Button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 grid-margin">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Toast Positions</h4>
              <p className="card-description mb-0">
                The <code>position</code> property can be used to specify the predefined positions of toasts.
              </p>
              <p className="card-description">
                Specify the predefined types of toasts - success, info, warn and error
              </p>
              <div className="template-demo d-flex justify-content-md-between flex-wrap">
                <Button variant="btn btn-outline-primary btn-sm" onClick={() => toast.info('Top Left', {position: 'top-left'})}>Top Left</Button>
                <Button variant="btn btn-outline-primary btn-sm" onClick={() => toast.info('Top Center', {position: 'top-center'})}>Top Center </Button>
                <Button variant="btn btn-outline-primary btn-sm" onClick={() => toast.info('Top Right', {position: 'top-right'})}>Top Right</Button>
                <Button variant="btn btn-outline-primary btn-sm" onClick={() => toast.info('Bottom Left', {position: 'bottom-left'})}>Bottom Left</Button>
                <Button variant="btn btn-outline-primary btn-sm" onClick={() => toast.info('Bottom Center', {position: 'bottom-center'})}>Bottom Center</Button>
                <Button variant="btn btn-outline-primary btn-sm" onClick={() => toast.info('Bottom Right', {position: 'bottom-right'})}>Bottom Right</Button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Bootstrap alert</h4>
              <p className="card-description">
                Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <code>variant</code>s.
              </p>
              {
                [
                  'primary',
                  'secondary',
                  'success',
                  'danger',
                  'warning',
                  'info',
                  'light',
                  'dark'
                ].map((variant, id) => (
                  <Alert key={id} variant={variant}>
                    This is a {variant} alert—check it out!
                  </Alert>
                ))
              }
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Custom alert</h4>
              <p className="card-description">Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy.</p>
              <Alert variant='secondary' className='custom-alert-secondary'>
                <p className="p-3 mb-0">
                  Well done! You successfully read this important alert message.
                </p>
                <p className="mb-0 p-3">
                  <button className="btn btn-success mb-2">Ok</button><button className="btn btn-inverse-danger mb-2">Cancel</button>
                </p>
              </Alert>
              <Alert variant='info' className='custom-alert-info'>
                <p className="p-3 mb-0">
                  Heads up! This alert needs your attention, but it's not super important.
                </p>
                <p className="mb-0 p-3">
                  <button className="btn btn-info mb-2">Ok</button><button className="btn btn-light mb-2">Cancel</button>
                </p>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notifications