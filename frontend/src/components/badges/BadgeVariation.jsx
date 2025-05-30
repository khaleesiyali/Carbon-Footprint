import { Table } from "react-bootstrap";


function BadgeVariation() {
  return (
    <>
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Badge Variations</h4>
                <div className="template-demo">
                  <Table className="table mb-0">
                    <thead>
                      <tr>
                        <th className="ps-0">Item</th>
                        <th className="text-right">Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="ps-0">Rounded Primary</td>
                        <td className="pe-0 text-right"><div className="badge badge-pill badge-primary">2</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Rounded Info</td>
                        <td className="pe-0 text-right"><div className="badge badge-pill badge-info">5</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Rounded Danger</td>
                        <td className="pe-0 text-right"><div className="badge badge-pill badge-danger">1</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Rounded Success</td>
                        <td className="pe-0 text-right"><div className="badge badge-pill badge-success">9</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Rounded Warning</td>
                        <td className="pe-0 text-right"><div className="badge badge-pill badge-warning">4</div></td>
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

export default BadgeVariation