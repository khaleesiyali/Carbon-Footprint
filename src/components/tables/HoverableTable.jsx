import React from 'react'
import Table from 'react-bootstrap/esm/Table'

function HoverableTable() {
  return (
    <div className='table-responsive'>
        <Table hover>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Product</th>
                    <th>Sale</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jacob</td>
                    <td>Photoshop</td>
                    <td className="text-danger"> 28.76% <i className="fa-solid fa-arrow-down"></i></td>
                    <td><label className="badge badge-danger">Pending</label></td>
                </tr>
                <tr>
                    <td>Messsy</td>
                    <td>Flash</td>
                    <td className="text-danger"> 21.06% <i className="fa-solid fa-arrow-down"></i></td>
                    <td><label className="badge badge-warning">In progress</label></td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Premier</td>
                    <td className="text-danger"> 35.00% <i className="fa-solid fa-arrow-down"></i></td>
                    <td><label className="badge badge-info">Fixed</label></td>
                </tr>
                <tr>
                    <td>Peter</td>
                    <td>After effects</td>
                    <td className="text-success"> 82.00% <i className="fa-solid fa-arrow-up"></i></td>
                    <td><label className="badge badge-success">Completed</label></td>
                </tr>
                <tr>
                    <td>Dave</td>
                    <td>53275535</td>
                    <td className="text-success"> 98.05% <i className="fa-solid fa-arrow-up"></i></td>
                    <td><label className="badge badge-warning">In progress</label></td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default HoverableTable