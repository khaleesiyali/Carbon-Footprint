import React from 'react'
import { Button, Form } from 'react-bootstrap'

function DefaultForm() {
  return (
    <>
    <Form.Group>
        <label htmlFor='exampleInputUsername1'>Username</label>
        <Form.Control type='text' id='exampleInputUsername1' placeholder='Username'/>
    </Form.Group>
    <Form.Group>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <Form.Control type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
    </Form.Group>
    <Form.Group>
        <label htmlFor="exampleInputPassword1">Password</label>
        <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </Form.Group>
    <Form.Group>
        <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
        <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
    </Form.Group>
    <div className='form-check'>
        <label className='form-check-label text-muted'>
            <input type="checkbox" className='form-check-input' />
            <i className='input-helper'></i>
            Remember me
        </label>
    </div>
    <Button type='submit' variant='btn btn-gradient-primary' className='me-2'>Submit</Button>
    <Button variant='btn btn-light'>Cancel</Button>
    </>
  )
}

export default DefaultForm