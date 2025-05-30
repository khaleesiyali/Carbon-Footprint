import React from 'react'
import { Button, Form } from 'react-bootstrap'


function BasicFormElements() {
  return (
    <>
    <Form.Group>
      <label htmlFor="exampleInputName">Name</label>
      <Form.Control type="text" className="form-control" id="exampleInputName" placeholder="Name" />
    </Form.Group>
    <Form.Group>
      <label htmlFor="exampleInputEmail3">Email address</label>
      <Form.Control type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
    </Form.Group>
    <Form.Group>
      <label htmlFor="exampleInputPassword4">Password</label>
      <Form.Control type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
    </Form.Group>
    <Form.Group>
      <label htmlFor="exampleSelectGender">Gender</label>
      <Form.Select aria-label='Example select' className='form-select mb-3' id='exampleSelectGender'>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </Form.Select>
    </Form.Group>
    <Form.Group>
        <label>File upload</label>
        <div className="custom-file">
          <Form.Control type="file" className="form-control visibility-hidden custom-file-label" id="customFileLang" lang="es"/>
          {/* <label className="custom-file-label" htmlFor="customFileLang">Upload image</label> */}
        </div>
    </Form.Group>
    <Form.Group>
      <label htmlFor="exampleInputCity1">City</label>
      <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
    </Form.Group>
    <Form.Group>
      <label htmlFor="exampleTextarea1">Textarea</label>
      <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
    </Form.Group>
    <Button type='submit' variant='btn btn-gradient-primary' className='me-2'>Submit</Button>
    <Button variant='btn btn-light'>Cancel</Button>
    </>
  )
}

export default BasicFormElements