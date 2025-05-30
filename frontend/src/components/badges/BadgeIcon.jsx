import { Table } from "react-bootstrap";

function BadgeIcon() {
  return (
    <>
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Badge With Icons</h4>
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
                        <td className="ps-0">Icon Badge</td>
                        <td className="pe-0 text-right"><div className="badge badge-pill badge-primary"><i className="mdi mdi-account"></i></div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Outlined Icons</td>
                        <td className="pe-0 text-right"><div className="badge badge-pill badge-outline-info"><i className="mdi mdi-cloud-outline"></i></div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Icon With Text</td>
                        <td className="pe-0 text-right"><div className="badge badge-pill badge-danger"><i className="mdi mdi-email me-2"></i>12</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Icon With Text</td>
                        <td className="pe-0 text-right"><div className="badge badge-pill badge-success">12<i className="mdi mdi-email ms-2"></i></div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Icon Badge</td>
                        <td className="pe-0 text-right"><div className="badge badge-pill badge-warning"><i className="mdi mdi-comment"></i></div></td>
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

export default BadgeIcon