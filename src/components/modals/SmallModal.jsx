import {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'

function SmallModal() {

    const [show, setShow] = useState(false)

  return (
    <>
        <div className="col-md-6 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Small Modal</h4>
              <p className="card-description">Small modal with max-width set to 300px</p>
                {/* Modal starts */}
                <div className="text-center">
                  <Button onClick={() => setShow(true)} className="btn-sm">Small modal<i className="mdi mdi-arrow-right-circle-outline ms-1"></i></Button>
                </div>
                <Modal
                  size="sm"
                  show={show}
                  onHide={() => setShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                  </Modal.Body>

                  <Modal.Footer className="flex-wrap">
                    <Button variant="success btn-sm m-2" onClick={() => setShow(false)}>Submit</Button>
                    <Button variant="light btn-sm m-2" onClick={() => setShow(false)}>Cancel</Button>
                  </Modal.Footer>
                </Modal>
              {/* Modal Ends */}
            </div>
          </div>
        </div>
    </>
  )
}

export default SmallModal