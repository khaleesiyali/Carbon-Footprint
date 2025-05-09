import {Button} from 'react-bootstrap'
import Swal from 'sweetalert2'

function Popups() {
 
  const clicks1 = [
   () => Swal.fire("Any fool can use a computer"),
   () => Swal.fire({
      title: "Read the alert!",
      text: "Click OK to close this alert",
      // icon: "question"
    }),
   () => Swal.fire({
      icon: "success",
      title: "Read the alert!",
      text: "Click OK to close this alert",
    })
  ]

  const click2 = [
    () => Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
    }),
    () =>  Swal.fire({
      icon: "question",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
    }),
    () => Swal.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: `
        You can use <b>bold text</b>,
        <a href="#">links</a>,
        and other HTML tags
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    })
  ]

  
  const desc1 = [
    'A basic message',
    'A title with a text under',
    'A success message!',
  ]
  const desc2 = [
    'A waring alert!',
    'A question alert!',
    'Custom HTML title and description alert',
  ]

  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          Popups
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Dialogs</a></li>
            <li className="breadcrumb-item active" aria-current="page">Popups</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                {desc1.map((description, id) => 
                <div key={id} className="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                    <div className="wrapper text-center">
                      <h4 className="card-title">Alerts Popups</h4>
                      <p className="card-description">{description}</p>
                      <Button variant="btn btn-outline-primary" onClick={clicks1[id]}>Click here!</Button>
                    </div>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                {desc2.map((description, id) => 
                <div key={id} className="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                    <div className="wrapper text-center">
                      <h4 className="card-title">Alerts Popups</h4>
                      <p className="card-description">{description}</p>
                      <Button variant="btn btn-outline-primary" onClick={click2[id]}>Click here!</Button>
                    </div>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popups