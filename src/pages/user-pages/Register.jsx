import { Link } from "react-router-dom"

function Register() {
  return (
    <>
      <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-dark text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src="/images/logo.png" alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="fw-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                  <div className="form-group">
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
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
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
                    Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Register