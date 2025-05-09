import { OverlayTrigger, Tooltip, Button, ButtonToolbar } from 'react-bootstrap';

function PositionTooltip() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Tooltip positions</h4>
            <p className="card-description">Add attribute <code>placement=&#123;position&#125;</code> to the element</p>
            <div className="tooltip-demo">
                <ButtonToolbar>
                  {['top', 'right', 'bottom', 'left'].map(placement => (
                    <OverlayTrigger
                      key={placement}
                      placement={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Tooltip on <strong>{placement}</strong>.
                        </Tooltip>
                      }
                    >
                      <Button variant="gradient-primary">Tooltip on {placement}</Button>
                    </OverlayTrigger>
                  ))}
                </ButtonToolbar>
            </div>
        </div>
    </>
  )
}

export default PositionTooltip