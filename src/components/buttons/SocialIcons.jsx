import { Button } from "react-bootstrap";

function SocialIcons() {
  return (
    <>
        <div className="card">
            <div className="card-body">
              <h4 className="card-title">Social Icon Buttons</h4>
              <p className="card-description">Add class <code>.btn-social-icons</code></p>
              <div className="template-demo">
                <Button variant="btn btn-social-icon btn-outline-facebook"><i className="mdi mdi-facebook"></i></Button>
                <Button variant="btn btn-social-icon btn-outline-youtube"><i className="mdi mdi-youtube"></i></Button>                                        
                <Button variant="btn btn-social-icon btn-outline-twitter"><i className="mdi mdi-twitter"></i></Button>
                <Button variant="btn btn-social-icon btn-outline-dribbble"><i className="fa fa-dribbble"></i></Button>
                <Button variant="btn btn-social-icon btn-outline-linkedin"><i className="mdi mdi-linkedin"></i></Button>
                <Button variant="btn btn-social-icon btn-outline-google"><i className="mdi mdi-google-plus"></i></Button>
              </div>
              <div className="template-demo">
                <Button variant="btn btn-social-icon btn-facebook"><i className="mdi mdi-facebook"></i></Button>
                <Button variant="btn btn-social-icon btn-youtube"><i className="mdi mdi-youtube"></i></Button>                                        
                <Button variant="btn btn-social-icon btn-twitter"><i className="mdi mdi-twitter"></i></Button>
                <Button variant="btn btn-social-icon btn-dribbble"><i className="fa fa-dribbble"></i></Button>
                <Button variant="btn btn-social-icon btn-linkedin"><i className="mdi mdi-linkedin"></i></Button>
                <Button variant="btn btn-social-icon btn-google"><i className="mdi mdi-google-plus"></i></Button>
              </div>
              <div className="template-demo">
                <Button variant="btn btn-social-icon btn-facebook btn-rounded"><i className="mdi mdi-facebook"></i></Button>
                <Button variant="btn btn-social-icon btn-youtube btn-rounded"><i className="mdi mdi-youtube"></i></Button>                                        
                <Button variant="btn btn-social-icon btn-twitter btn-rounded"><i className="mdi mdi-twitter"></i></Button>
                <Button variant="btn btn-social-icon btn-dribbble btn-rounded"><i className="fa fa-dribbble"></i></Button>
                <Button variant="btn btn-social-icon btn-linkedin btn-rounded"><i className="mdi mdi-linkedin"></i></Button>
                <Button variant="btn btn-social-icon btn-google btn-rounded"><i className="mdi mdi-google-plus"></i></Button>
              </div>
            </div>
        </div>
    </>
  )
}

export default SocialIcons