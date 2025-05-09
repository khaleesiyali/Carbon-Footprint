import {Link} from 'react-router-dom'

function Login2() {
  return (
    <>
      <div className="d-flex align-items-stretch auth auth-img-bg h-100">
        <div className="row flex-grow">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-left p-3">
              <div className="brand-logo">
                <img src="/images/logo.png" alt="logo" />
              </div>
              <h4>Welcome back!</h4>
              <h6 className="fw-light">Happy to see you again!</h6>
              <form className="pt-3">
                <div className="form-group">
                  <label>Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-account-outline text-primary pb-1"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-left-0" id="exampleInputEmail" placeholder="Username" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-lock-outline text-primary pb-1"></i>
                      </span>
                    </div>
                    <input type="password" className="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password" />                        
                  </div>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-primary">Forgot password?</a>
                </div>
                <div className="my-3 d-grid gap-2">
                  <Link className="btn btn-primary btn-lg fw-medium auth-form-btn" to="/dashboard">LOGIN</Link>
                </div>
                <div className="mb-2 d-flex">
                  <button type="button" className="btn btn-facebook auth-form-btn flex-grow me-1">
                    <i className="mdi mdi-facebook me-2"></i>Facebook
                  </button>
                  <button type="button" className="btn btn-google auth-form-btn flex-grow ms-1">
                    <i className="mdi mdi-google me-2"></i>Google
                  </button>
                </div>
                <div className="text-center mt-4 fw-light">
                  Don't have an account? <Link to="/user-pages/register-2" className="text-primary">Create</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 login-half-bg d-flex flex-row">
          </div>
        </div>
      </div>
    </>
  )
}

export default Login2