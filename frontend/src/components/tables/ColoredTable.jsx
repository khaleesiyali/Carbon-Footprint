import React from 'react'
import { Table } from 'react-bootstrap'

function ColoredTable() {
  return (
    <div className='table-responsive'>
        <Table bordered>
            <thead>
                <tr>
                    <th> # </th>
                    <th> First name </th>
                    <th> Product </th>
                    <th> Amount </th>
                    <th> Deadline </th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-info">
                    <td> 1 </td>
                    <td> Herman Beck </td>
                    <td> Photoshop </td>
                    <td> $ 77.99 </td>
                    <td> May 15, 2015 </td>
                </tr>
                <tr className="table-warning">
                    <td> 2 </td>
                    <td> Messsy Adam </td>
                    <td> Flash </td>
                    <td> $245.30 </td>
                    <td> July 1, 2015 </td>
                </tr>
                <tr className="table-danger">
                    <td> 3 </td>
                    <td> John Richards </td>
                    <td> Premeire </td>
                    <td> $138.00 </td>
                    <td> Apr 12, 2015 </td>
                </tr>
                <tr className="table-success">
                        <td> 4 </td>
                        <td> Peter Meggik </td>
                        <td> After effects </td>
                        <td> $ 77.99 </td>
                        <td> May 15, 2015 </td>
                </tr>
                <tr className="table-primary">
                    <td> 5 </td>
                    <td> Edward </td>
                    <td> Illustrator </td>
                    <td> $ 160.25 </td>
                    <td> May 03, 2015 </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default ColoredTable