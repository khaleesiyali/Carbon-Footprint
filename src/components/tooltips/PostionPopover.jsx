import { OverlayTrigger, Button, ButtonToolbar, Popover } from 'react-bootstrap';

function PostionPopover() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Popover positions</h4>
            <p className="card-description">Add attribute <code>placement=&apos;&#123;position&#125;&apos;</code> to the element</p>
            <div className="popover-demo">
              <ButtonToolbar>
                {['top', 'right', 'bottom', 'left'].map(placement => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                        <Popover.Body>
                          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="gradient-primary">Popover on {placement}</Button>
                  </OverlayTrigger>
                ))}
              </ButtonToolbar>
            </div>
        </div>
    </>
  )
}

export default PostionPopover