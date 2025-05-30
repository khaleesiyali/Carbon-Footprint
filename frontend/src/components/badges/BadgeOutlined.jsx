import { Table } from "react-bootstrap";


function BadgeOutlined() {
  return (
    <>
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Badge Outlined Variations</h4>
                <p className="card-description">Add class <code>.badge-outline-*</code></p>
                <div className="template-demo">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="ps-0">Rounded</th>
                        <th className="text-right">Normal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="ps-0"><div className="badge badge-outline-primary badge-pill">Primary</div></td>
                        <td className="pe-0 text-right"><div className="badge badge-outline-primary">Primary</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0"><div className="badge badge-outline-info badge-pill">Info</div></td>
                        <td className="pe-0 text-right"><div className="badge badge-outline-info">Info</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0"><div className="badge badge-outline-danger badge-pill">Danger</div></td>
                        <td className="pe-0 text-right"><div className="badge badge-outline-danger">Danger</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0"><div className="badge badge-outline-success badge-pill">Success</div></td>
                        <td className="pe-0 text-right"><div className="badge badge-outline-success">Success</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0"><div className="badge badge-outline-warning badge-pill">Warning</div></td>
                        <td className="pe-0 text-right"><div className="badge badge-outline-warning">Warning</div></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default BadgeOutlined