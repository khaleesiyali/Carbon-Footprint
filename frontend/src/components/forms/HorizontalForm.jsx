import React from 'react'
import { Button, Form } from 'react-bootstrap'

function HorizontalForm() {
  return (
    <>
    <Form.Group className="row">
        <label htmlFor="exampleInputUsername" className="col-sm-3 col-form-label">Username</label>
        <div className="col-sm-9">
            <Form.Control type="text" className="form-control" id="exampleInputUsername" placeholder="Username" />
        </div>
    </Form.Group>
    <Form.Group className="row">
        <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Email</label>
        <div className="col-sm-9">
            <Form.Control type="email" className="form-control" id="exampleInputEmail2" placeholder="Email" />
        </div>
    </Form.Group>
    <Form.Group className="row">
        <label htmlFor="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
        <div className="col-sm-9">
            <Form.Control type="text" className="form-control" id="exampleInputMobile" placeholder="Mobile number" />
        </div>
    </Form.Group>
    <Form.Group className="row">
        <label htmlFor="exampleInputPassword2" className="col-sm-3 col-form-label">Password</label>
        <div className="col-sm-9">
            <Form.Control type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
        </div>
    </Form.Group>
    <Form.Group className="row">
        <label htmlFor="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Re Password</label>
        <div className="col-sm-9">
            <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword2" placeholder="Password" />
        </div>
    </Form.Group>
    <div className='form-check'>
        <label className="form-check-label text-muted">
            <input type="checkbox" className="form-check-input"/>
            <i className="input-helper"></i>
            Remember me
        </label>
    </div>
    <Button type='submit' variant='btn btn-gradient-primary' className='me-2'>Submit</Button>
    <Button variant='btn btn-light'>Cancel</Button>
    </>
  )
}

export default HorizontalForm