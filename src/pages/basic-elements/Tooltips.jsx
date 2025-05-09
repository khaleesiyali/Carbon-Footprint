import BasicPopover from "../../components/tooltips/BasicPopover";
import BasicTooltip from "../../components/tooltips/BasicTooltip";
import ColorPopover from "../../components/tooltips/ColorPopover";
import ColorTooltip from "../../components/tooltips/ColorTooltip";
import PositionTooltip from "../../components/tooltips/PositionTooltip";
import PostionPopover from "../../components/tooltips/PostionPopover";

function Tooltips() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">Tooltips</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                Dialogs
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tooltips
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-6 stretch-card">
          <div className="card">
            <BasicTooltip />
            <PositionTooltip />
            <ColorTooltip />
          </div>
        </div>
        <div className="col-md-6 stretch-card">
          <div className="card">
            <BasicPopover />
            <PostionPopover />
            <ColorPopover />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tooltips;
