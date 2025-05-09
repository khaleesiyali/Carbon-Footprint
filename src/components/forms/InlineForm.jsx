import React from 'react'
import { Form,Row,Col, Button, InputGroup } from 'react-bootstrap'


function InlineForm() {
  return (
    <>
    <Form className='form-inline'>
        <Row className="align-items-center">
            <Col sm={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Col>
            <Col sm={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                Username
            </Form.Label>
            <InputGroup>
                <div className='input-group-prepend'>
                    <InputGroup.Text>@</InputGroup.Text>
                </div>
                <Form.Control
                id="inlineFormInputGroupUsername"
                placeholder="Username"
                />
            </InputGroup>
            </Col>
            <Col xs="auto" className="my-1">
                <div className="form-check mx-sm-2">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" defaultChecked/> Remember me 
                        <i className="input-helper"></i>
                    </label>
                </div>
            </Col>
            <Col xs="auto" className="my-1">
            <Button variant='btn btn-gradient-primary' className='mb-2' type="submit">Submit</Button>
            </Col>
        </Row>
    </Form>
    </>
  )
}

export default InlineForm