import { Table } from "react-bootstrap";

function BadgeGradient() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Gradient Badges</h4>
                <p className="card-description">Add class <code>.badge-gradient-&#123;color&#125;</code></p>
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
                        <td className="pe-0 text-right"><div className="badge badge-gradient-primary">Primary</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Secondary label</td>
                        <td className="pe-0 text-right"><div className="badge badge-gradient-secondary">Secondary</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Info label</td>
                        <td className="pe-0 text-right"><div className="badge badge-gradient-info">Info</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Danger label</td>
                        <td className="pe-0 text-right"><div className="badge badge-gradient-danger">Danger</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Success label</td>
                        <td className="pe-0 text-right"><div className="badge badge-gradient-success">Success</div></td>
                      </tr>
                      <tr>
                        <td className="ps-0">Warning label</td>
                        <td className="pe-0 text-right"><div className="badge badge-gradient-warning">Warning</div></td>
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

export default BadgeGradient