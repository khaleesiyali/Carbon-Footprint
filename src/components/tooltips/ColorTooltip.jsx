import { OverlayTrigger, Tooltip, Button, ButtonToolbar } from 'react-bootstrap';

function ColorTooltip() {
  return (
    <>
        <div className="card-body">
            <h4 className="card-title">Tooltip Colors</h4>
            <p className="card-description">Add attribute <code>className=&#123;`tooltip-&#123;color&#125;`&#125;</code> to the element</p>
            <div className="tooltip-demo">
                <ButtonToolbar>
                  {['success', 'info', 'warning', 'primary', 'danger'].map((color, id) => (
                    <OverlayTrigger 
                      key={id}
                      overlay={
                        <Tooltip className={`tooltip-${color}`} id={`tooltip-${color}`}>
                          Tooltip on <strong>{color}</strong>.
                        </Tooltip>
                      }
                    >
                      <Button variant={`gradient-${color}`}>Tooltip {color}</Button>
                    </OverlayTrigger>
                  ))}
                </ButtonToolbar>
            </div> 
        </div>
    </>
  )
}

export default ColorTooltip