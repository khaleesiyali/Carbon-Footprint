import BreadcrumbsColor from "../../components/breadcrumbs/BreadcrumbsColor"
import Breadcrumbss from "../../components/breadcrumbs/Breadcrumbss"
import CustomBreadcrumbs from "../../components/breadcrumbs/CustomBreadcrumbs"
import InverseBreadcrumbs from "../../components/breadcrumbs/InverseBreadcrumbs"
import InverseCustomBreadcrumbs from "../../components/breadcrumbs/InverseCustomBreadcrumbs"

function Breadcrumbs() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          Breadcrumbs
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
            <li className="breadcrumb-item active" aria-current="page">Breadcrumbs</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <Breadcrumbss />
        <CustomBreadcrumbs />
        <InverseBreadcrumbs />
        <InverseCustomBreadcrumbs />
        <BreadcrumbsColor />
      </div>
    </>
  )
}

export default Breadcrumbs