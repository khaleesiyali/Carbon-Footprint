import React from 'react'
import { Button, Dropdown, DropdownButton, Form , InputGroup} from 'react-bootstrap'

function BasicInputGroups() {
  return (
    <>
    <InputGroup>
        {/* <div className='input-group'> */}
            <div className='input-group-prepend'>
                {/* <span className='input-group-text'>@</span> */}
                <InputGroup.Text>@</InputGroup.Text>
            </div>
            <Form.Control type='text' className='form-control' placeholder='Username' aria-describedby='basic-addon1' />
        {/* </div> */}
    </InputGroup>
    <InputGroup>
        {/* <div className='input-group'> */}
            <div className='input-group-prepend'>
                {/* <span className='input-group-text bg-gradient-primary text-white'>$</span> */}
                <InputGroup.Text className='bg-gradient-primary text-white'>$</InputGroup.Text>
            </div>
            <Form.Control type='text' className='form-control' aria-label='Amount (to the nearest dollor)'/>
            <div className='input-group-append'>
                {/* <span className='input-group-text'>.00</span> */}
                <InputGroup.Text>.00</InputGroup.Text>
            </div>
        {/* </div> */}
    </InputGroup>
    <InputGroup>
        {/* <div className="input-group"> */}
            <div className="input-group-prepend">
                {/* <span className="input-group-text">$</span> */}
                <InputGroup.Text>$</InputGroup.Text>
            </div>
            <div className="input-group-prepend">
                {/* <span className="input-group-text">0.00</span> */}
                <InputGroup.Text>0.00</InputGroup.Text>
            </div>
            <Form.Control type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
        {/* </div> */}
    </InputGroup>
    <InputGroup>
        {/* <div className="input-group"> */}
            <Form.Control type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <Button variant="btn btn-gradient-primary" size="sm">Search</Button>
            </div>
        {/* </div> */}
    </InputGroup>
    <InputGroup>
        {/* <div className='input-group'> */}
            <div className='input-group-prepend'>   
                <DropdownButton variant='btn btn-outline-primary' title="Dropdown" className='dropdown-toggle' size='sm'>
                    <Dropdown.Item className='dropdown-item' href="!#" onClick={event => event.preventDefault()}>Action</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="!#" onClick={event => event.preventDefault()}>Another action</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="!#" onClick={event => event.preventDefault()}>Something else</Dropdown.Item>
                    <div role='separator' className='dropdown-divider'></div>
                    <Dropdown.Item className='dropdown-item' href='!#' onClick={event => event.preventDefault()}>Seperated link</Dropdown.Item>
                </DropdownButton>
            </div>
            <Form.Control type="text" className="form-control" aria-label="Text input with dropdown button" />
        {/* </div> */}
    </InputGroup>
    <InputGroup>
        {/* <div className='input-group'> */}
            <Form.Control type='text' className='form-control' placeholder='Find in facebook' aria-label="Recipient's username" aria-describedby='basic-addon2'/>
            <div className='input-group-append'>
                <Button variant="btn btn-facebook" size="sm"><i className='fa-brands fa-facebook-f'></i></Button>
            </div>
        {/* </div> */}
    </InputGroup>
    </>

  )
}

export default BasicInputGroups