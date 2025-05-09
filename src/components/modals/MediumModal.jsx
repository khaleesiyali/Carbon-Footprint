import {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

function MediumModal() {
    const [show, setShow] = useState(false)
  return (
    <>
        <div className="col-md-6 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Medium Modal</h4>
              <p className="card-description">Normal modal with default bootstrap settings</p>
                {/* Modal starts */}
                <div className="text-center">
                  <Button onClick={() => setShow(true)} className="btn-sm">Medium modal<i className="mdi mdi-arrow-right-circle-outline ms-1"></i></Button>
                </div>
                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  aria-labelledby="example-modal-sizes-title-md"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                  </Modal.Body>

                  <Modal.Footer className="flex-wrap">
                    <Button variant="success m-2" onClick={() => setShow(false)}>Submit</Button>
                    <Button variant="light m-2" onClick={() => setShow(false)}>Cancel</Button>
                  </Modal.Footer>
                </Modal>
              {/* Modal Ends */}
            </div>
          </div>
        </div>
    </>
  )
}

export default MediumModal