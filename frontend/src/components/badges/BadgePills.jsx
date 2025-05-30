import { Table } from "react-bootstrap";


function BadgePills() {
  return (
    <>
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Badge Pills</h4>
                <p className="card-description">Add class <code>.badge-pill</code></p>
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
                        <td className="ps-0">Primary label</td>
                        <td className="pe-0 text-right"><div className="badge badge-primary badge-pill">Primary</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Info label</td>
                        <td className="pe-0 text-right"><div className="badge badge-info badge-pill">Info</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Danger label</td>
                        <td className="pe-0 text-right"><div className="badge badge-danger badge-pill">Danger</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Success label</td>
                        <td className="pe-0 text-right"><div className="badge badge-success badge-pill">Success</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Warning label</td>
                        <td className="pe-0 text-right"><div className="badge badge-warning badge-pill">Warning</div></td>
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

export default BadgePills