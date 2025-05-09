import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

function BasicTooltip() {
  return (
    <>
      <div className="card-body">
        <h4 className="card-title">Basic tooltip</h4>
        <p className="card-description">
          Basic tooltip demo that appears on hover
        </p>
        <p>Hover the below button for interactive demo</p>
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">Basic Tooltip</Tooltip>}>
          <span className="d-inline-block">
            <Button
              variant="gradient-primary"
              style={{ pointerEvents: "none" }}>
              Hover me
            </Button>
          </span>
        </OverlayTrigger>
      </div>
    </>
  );
}

export default BasicTooltip;
