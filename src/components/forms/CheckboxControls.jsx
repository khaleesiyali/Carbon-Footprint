import React from 'react'
import { Form } from 'react-bootstrap'

function CheckboxControls() {
  return (
    <>
    <Form>
        <div className="row">
            <div className="col-md-6">
                <Form.Group>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="checkbox" className="form-check-input"/>
                    <i className="input-helper"></i>
                    Default
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="checkbox" defaultChecked className="form-check-input"/>
                    <i className="input-helper"></i>
                    Checked
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="checkbox" disabled className="form-check-input"/>
                    <i className="input-helper"></i>
                    Disabled
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="checkbox" disabled defaultChecked className="form-check-input"/>
                    <i className="input-helper"></i>
                    Disabled checked
                    </label>
                </div>
                </Form.Group>
            </div>
            <div className="col-md-6">
                <Form.Group>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value=""/>
                    <i className="input-helper"></i>
                    Default
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" defaultChecked/>
                    <i className="input-helper"></i>
                    Selected
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios2" id="optionsRadios3" value="option3" disabled/>
                    <i className="input-helper"></i>
                    Disabled
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios2" id="optionsRadios4" value="option4" disabled defaultChecked/>
                    <i className="input-helper"></i>
                    Selected and disabled 
                    </label>
                </div>
                </Form.Group>
            </div>
        </div>
    </Form>
    </>
  )
}

export default CheckboxControls