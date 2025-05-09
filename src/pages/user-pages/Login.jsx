import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function Login() {
  return (
    <>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-dark text-left py-5 px-4 px-sm-5 rounded">
              <div className="brand-logo">
                <img src="/images/logo.png" alt="logo" />
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="fw-light">Sign in to continue.</h6>
              <Form className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control type="email" placeholder="Username" size="lg" className="h-auto" />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" />
                </Form.Group>
                <div className="mt-3 d-grid gap-2">
                  <Link className="btn btn-primary btn-lg fw-medium auth-form-btn" to="/dashboard">SIGN IN</Link>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-gray">Forgot password?</a>
                </div>
                <div className="mb-2 d-grid gap-2">
                  <button type="button" className="btn btn-facebook auth-form-btn">
                    <i className="mdi mdi-facebook me-2"></i>Connect using facebook
                  </button>
                </div>
                <div className="text-center mt-4 fw-light">
                  Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Login