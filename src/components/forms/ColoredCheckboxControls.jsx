import React from 'react'
import { Form } from 'react-bootstrap'


function ColoredCheckboxControls() {
  return (
    <>
    <Form>
        <div className="row">
            <div className="col-md-6">
                <Form.Group>
                <div className="form-check form-check-primary">
                    <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultChecked /> Primary 
                    <i className="input-helper"></i>
                    </label>
                </div>
                <div className="form-check form-check-success">
                    <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultChecked /> Success 
                    <i className="input-helper"></i>
                    </label>
                </div>
                <div className="form-check form-check-info">
                    <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultChecked /> Info 
                    <i className="input-helper"></i>
                    </label>
                </div>
                <div className="form-check form-check-danger">
                    <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultChecked /> Danger 
                    <i className="input-helper"></i>
                    </label>
                </div>
                <div className="form-check form-check-warning">
                    <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultChecked /> Warning 
                    <i className="input-helper"></i>
                    </label>
                </div>
                </Form.Group>
            </div>
            <div className="col-md-6">
                <Form.Group>
                <div className="form-check form-check-primary">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="ExampleRadio1" id="ExampleRadio1" defaultChecked /> Primary 
                    <i className="input-helper"></i>
                    </label>
                </div>
                <div className="form-check form-check-success">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="ExampleRadio2" id="ExampleRadio2" defaultChecked /> Success 
                    <i className="input-helper"></i>
                    </label>
                </div>
                <div className="form-check form-check-info">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="ExampleRadio3" id="ExampleRadio3" defaultChecked /> Info 
                    <i className="input-helper"></i>
                    </label>
                </div>
                <div className="form-check form-check-danger">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="ExampleRadio4" id="ExampleRadio4" defaultChecked /> Danger 
                    <i className="input-helper"></i>
                    </label>
                </div>
                <div className="form-check form-check-warning">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="ExampleRadio5" id="ExampleRadio5" defaultChecked /> Warning 
                    <i className="input-helper"></i>
                    </label>
                </div>
                </Form.Group>
            </div>
        </div>
    </Form>
    </>
  )
}

export default ColoredCheckboxControls