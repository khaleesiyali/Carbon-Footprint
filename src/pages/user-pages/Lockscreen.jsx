import {Link} from 'react-router-dom'

function Lockscreen() {
  return (
    <>
      <div className="content-wrapper d-flex align-items-center auth lock-full-bg h-100">
        <div className="row w-100 align-items-center">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-transparent text-left p-5 text-center">
              {/* <img src={require("../../assets/images/faces/face13.jpg")} className="lock-profile-img" alt="img" /> */}
              <form className="pt-5">
                <div className="form-group">
                  <label>Password to unlock</label>
                  <input type="password" className="form-control text-center" id="examplePassword1" placeholder="Password" />
                </div>
                <div className="mt-5 d-grid gap-2">
                  <Link className="btn btn-success btn-lg fw-medium" to="/dashboard">Unlock</Link>
                </div>
                <div className="mt-3 text-center">
                  <Link to="/login" className="auth-link text-white">Sign in using a different account</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lockscreen