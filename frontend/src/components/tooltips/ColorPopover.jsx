import { OverlayTrigger, Button, ButtonToolbar, Popover } from 'react-bootstrap';

function ColorPopover() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Popover Colors</h4>
            <p className="card-description">Add attribute <code>placement=&apos;&#123;position&#125;&apos;</code> to the element</p>
            <div className="popover-demo">
              <ButtonToolbar>
                {['success', 'info', 'warning', 'primary', 'danger'].map((color, id) => (
                  <OverlayTrigger
                    key={id}
                    trigger="click"
                    overlay={
                      <Popover id={`popover-color-${color}`} className={`popover-${color}`}>
                        <Popover.Header as="h3">{`Popover ${color}`}</Popover.Header>
                        <Popover.Body>
                          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant={`gradient-${color}`}>Popover on {color}</Button>
                  </OverlayTrigger>
                ))}
              </ButtonToolbar>
            </div>
        </div>
    </>
  )
}

export default ColorPopover