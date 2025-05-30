import DefaultTable from "../../components/tables/DefaultTable"
import HoverableTable from "../../components/tables/HoverableTable"
import StripedTable from "../../components/tables/StripedTable"
import BorderedTable from "../../components/tables/BorderedTable"
import InverseTable from "../../components/tables/InverseTable"
import ColoredTable from "../../components/tables/ColoredTable"

function BasicTable() {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Basic Tables</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
            <li className="breadcrumb-item active" aria-current="page">Basic Tables</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic Table</h4>
              <p className="card-describtion"> Basic table using react-bootstrap <code>Table</code> component </p>
              <DefaultTable />
            </div>
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Hoverable Table</h4>
              <p className="card-description">Add the <code>hover</code> prop to the <code>Table</code> component</p>
              <HoverableTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Striped Table</h4>
              <p className="card-desciption">Add the <code>striped</code> prop to the <code>Table</code> component</p>
              <StripedTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Bordered Table</h4>
              <p className="card-description">Add the <code>bordered</code> prop to the <code>Table</code> component</p>
              <BorderedTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Inverse Table</h4>
              <p className="card-description">Use <code>variant="dark"</code> to invert the colors of the table and get light text on a dark background.</p>
              <InverseTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Table with contextual classNames</h4>
              <p className="card-description">Add className <code>.table-&#123;color&#125;</code></p>
              <ColoredTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicTable