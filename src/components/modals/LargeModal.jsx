import {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'


function LargeModal() {
    
    const [show, setShow] = useState(false)

  return (
    <>
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Large Modal</h4>
              <p className="card-description">Large sized modal with max-width set to <code>90%</code></p>
              {/* Modal starts */}
              <div className="text-center">
                <Button onClick={() => setShow(true)} className="btn-sm">Large modal<i className="mdi mdi-arrow-right-circle-outline ms-1"></i></Button>
              </div>
              <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="success m-2" onClick={() => setShow(false)}>Submit</Button>
                  <Button variant="light mb-" onClick={() => setShow(false)}>Cancel</Button>
                </Modal.Footer>
              </Modal>
              {/* Modal Ends */}
            </div>
          </div>
        </div>
    </>
  )
}

export default LargeModal