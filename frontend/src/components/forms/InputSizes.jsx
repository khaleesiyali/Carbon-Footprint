import React from 'react'
import { Form } from 'react-bootstrap'


function InputSizes() {
  return (
    <>
    <Form.Group>
        <label>Large input</label>
        <Form.Control type='text' placeholder='Username' aria-label='Username' size='lg'/>
    </Form.Group>
    <Form.Group>
        <label>Default input</label>
        <Form.Control type='text' placeholder='Username' aria-label='Username'/>
    </Form.Group>
    <Form.Group>
        <label>Smalll input</label>
        <Form.Control type='text' placeholder='Username' aria-label='Username' size='sm'/>
    </Form.Group>
    </>

  )
}

export default InputSizes