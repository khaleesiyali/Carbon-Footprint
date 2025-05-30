import { OverlayTrigger, Button, Popover } from 'react-bootstrap';

function BasicPopover() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Basic popover</h4>
            <p className="card-description">Basic popover demo that appears on click</p>
            <p>Click the below button for interactive demo</p>
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={
                <Popover id="popover-basic">
                  <Popover.Header as="h3">Popover title</Popover.Header>
                  <Popover.Body>
                    Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="gradient-primary">Click me</Button>
            </OverlayTrigger>
        </div>
    </>
  )
}

export default BasicPopover