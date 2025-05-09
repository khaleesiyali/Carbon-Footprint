import {Button} from 'react-bootstrap'

function SocialTxt() {
  return (
    <>
        <div className="card">
            <div className="card-body">
              <h4 className="card-title">Social button with text</h4>
              <p className="card-description">Add class <code>.btn-social-icon-text</code></p>
              <div className="template-demo">
                <Button variant="btn btn-social-icon-text btn-facebook"><i className="mdi mdi-facebook"></i>Facebook</Button>
                <Button variant="btn btn-social-icon-text btn-youtube"><i className="mdi mdi-youtube"></i>Youtube</Button>                                        
                <Button variant="btn btn-social-icon-text btn-twitter"><i className="mdi mdi-twitter"></i>Twitter</Button>
                <Button variant="btn btn-social-icon-text btn-dribbble"><i className="fa fa-dribbble"></i>Dribbble</Button>
                <Button variant="btn btn-social-icon-text btn-linkedin"><i className="mdi mdi-linkedin"></i>Linkedin</Button>
                <Button variant="btn btn-social-icon-text btn-google"><i className="mdi mdi-google-plus"></i>Google</Button>
              </div>
            </div>
        </div>
    </>
  )
}

export default SocialTxt