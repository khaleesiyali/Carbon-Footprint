import { Wizard, useWizard } from 'react-use-wizard';

const finishMessage = () => alert('Form Submitted Successfully!!')

const Account = () => {
  const { nextStep } = useWizard();


  return (
    <section className="content">
      <h3 className="mb-4">Account</h3>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" className="form-control" placeholder="Confirm password" />
      </div>
      <button className="btn btn-primary" onClick={nextStep}>Next</button>
    </section>
  );
};

const Profile = () => {
  const { nextStep, previousStep } = useWizard();

  return (
    <section className="content">
      <h3 className="mb-4">Profile</h3>
      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="Enter first name" />
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>
      <div className="form-group">
        <label>Profession</label>
        <input type="text" className="form-control" placeholder="Profession" />
      </div>
      <button className="btn btn-secondary" onClick={previousStep}>Back</button>
      <button className="btn btn-primary" onClick={nextStep}>Next</button>
    </section>
  );
};

const Comments = () => {
  const { nextStep, previousStep } = useWizard();

  return (
    <section className="content">
      <h3 className="mb-4">Comments</h3>
      <div className="form-group">
        <label>Comments</label>
        <textarea className="form-control" rows="3"></textarea>
      </div>
      <button className="btn btn-secondary" onClick={previousStep}>Back</button>
      <button className="btn btn-primary" onClick={nextStep}>Next</button>
    </section>
  );
};

const Finish = () => {
  const { previousStep } = useWizard();

  return (
    <section className="content">
      <h3 className="mb-4">Finish</h3>
      <div className="form-check">
        <label className="form-check-label">
          <input className="checkbox" type="checkbox" />
          <i className="input-helper"></i>
          I agree with the Terms and Conditions.
        </label>
      </div>
      <button className="btn btn-secondary" onClick={previousStep}>Back</button>
      <button className="btn btn-success" onClick={finishMessage}>Submit</button>
    </section>
  );
};

const MultiStepWizard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <Wizard>
                <Account />
                <Profile />
                <Comments />
                <Finish />
              </Wizard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepWizard;
