import LargeModal from "../../components/modals/LargeModal"
import MediumModal from "../../components/modals/MediumModal"
import SmallModal from "../../components/modals/SmallModal"

function Modals() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Modals </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
            <li className="breadcrumb-item active" aria-current="page">Modals</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <LargeModal />
        <MediumModal />
        <SmallModal />
      </div>
    </>
  )
}

export default Modals