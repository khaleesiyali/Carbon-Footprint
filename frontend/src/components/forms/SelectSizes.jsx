import React from 'react'
import { Form } from 'react-bootstrap'


function SelectSizes() {
  return (
    <>
    <Form.Group>
        <label htmlFor='exampleFormControlSelect1'>Large select</label>
        <Form.Select  className='form-select' size='lg' id='exampleFormControlSelect1'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </Form.Select>
    </Form.Group>
    <Form.Group>
        <label htmlFor='exampleFormControlSelect2'>Default select</label>
        <Form.Select  className='form-select' id='exampleFormControlSelect2'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </Form.Select>
    </Form.Group>
    <Form.Group>
        <label htmlFor='exampleFormControlSelect3'>Small select</label>
        <Form.Select  className='form-select' size='sm' id='exampleFormControlSelect3'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </Form.Select>
    </Form.Group>
    </>

  )
}

export default SelectSizes