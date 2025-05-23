import { Link } from "react-router-dom"

function Register2() {
  return (
    <>
      <div className="d-flex align-items-stretch auth auth-img-bg h-100">
        <div className="row flex-grow">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="auth-form-transparent text-left p-3">
              <div className="brand-logo">
                <img src="/images/logo.png" alt="logo" />
              </div>
              <h4>New here?</h4>
              <h6 className="fw-light">Join us today! It takes only few steps</h6>
              <form className="pt-3">
                <div className="form-group">
                  <label>Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-account-outline text-primary pb-1"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control form-control-lg border-start-0" placeholder="Username" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-end-1">
                        <i className="mdi mdi-email-outline text-primary pb-1"></i>
                      </span>
                    </div>
                    <input type="email" className="form-control form-control-lg border-start-0" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <select className="form-select form-select-lg" id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="mdi mdi-lock-outline text-primary pb-1"></i>
                      </span>
                    </div>
                    <input type="password" className="form-control form-control-lg border-start-0" id="exampleInputPassword" placeholder="Password" />                        
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3 d-grid gap-2">
                  <Link className="btn btn-primary btn-lg fw-medium auth-form-btn" to="/dashboard">SIGN UP</Link>
                </div>
                <div className="text-center mt-4 fw-light">
                  Already have an account? <Link to="/user-pages/login-2" className="text-primary">Login</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 register-half-bg d-flex flex-row">
          </div>
        </div>
      </div>
    </>
  )
}

export default Register2