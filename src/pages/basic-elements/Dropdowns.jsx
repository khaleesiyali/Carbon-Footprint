import BasicDropdown from "../../components/dropdowns/BasicDropdown"
import Dropup from "../../components/dropdowns/Dropup"
import GradientDropdown from "../../components/dropdowns/GradientDropdown"
import IconDropdown from "../../components/dropdowns/IconDropdown"
import OutlineDropdown from "../../components/dropdowns/OutlineDropdown"
import SizeDropdown from "../../components/dropdowns/SizeDropdown"
import SplitDropdown from "../../components/dropdowns/SplitDropdown"

function Dropdowns() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          Dropdowns
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
            <li className="breadcrumb-item active" aria-current="page">Dropdowns</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin">
          <div className="card">
              <GradientDropdown />
              <BasicDropdown />
              <OutlineDropdown />
          </div>
        </div>
        <SplitDropdown />
        <IconDropdown />
        <Dropup />
        <SizeDropdown />
      </div>
    </>
  )
}

export default Dropdowns