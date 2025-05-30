import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';


function BorderedTable() {
  return (
    <div className='table-responsive'>
        <Table bordered>
            <thead>
                <tr>
                    <th> # </th>
                    <th> First name </th>
                    <th> Progress </th>
                    <th> Amount </th>
                    <th> Deadline </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 1 </td>
                    <td> Herman Beck </td>
                    <td>
                        <ProgressBar variant="success" now={25} />
                    </td>
                    <td> $ 77.99 </td>
                    <td> May 15, 2015 </td>
                </tr>
                <tr>
                    <td> 2 </td>
                    <td> Messsy Adam </td>
                    <td>
                        <ProgressBar variant="danger" now={75} />
                    </td>
                    <td> $245.30 </td>
                    <td> July 1, 2015 </td>
                </tr>
                <tr>
                    <td> 3 </td>
                    <td> John Richards </td>
                    <td>
                        <ProgressBar variant="warning" now={90} />
                    </td>
                    <td> $138.00 </td>
                    <td> Apr 12, 2015 </td>
                </tr>
                <tr>
                    <td> 4 </td>
                    <td> Peter Meggik </td>
                    <td>
                        <ProgressBar variant="primary" now={50} />
                    </td>
                    <td> $ 77.99 </td>
                    <td> May 15, 2015 </td>
                </tr>
                <tr>
                    <td> 5 </td>
                    <td> Edward </td>
                    <td>
                        <ProgressBar variant="danger" now={35} />
                    </td>
                    <td> $ 160.25 </td>
                    <td> May 03, 2015 </td>
                </tr>
                <tr>
                    <td> 6 </td>
                    <td> John Doe </td>
                    <td>
                        <ProgressBar variant="info" now={65} />
                    </td>
                    <td> $ 123.21 </td>
                    <td> April 05, 2015 </td>
                </tr>
                <tr>
                    <td> 7 </td>
                    <td> Henry Tom </td>
                    <td>
                    <ProgressBar now={60} />
                        <ProgressBar variant="warning" now={20} />
                    </td>
                    <td> $ 150.00 </td>
                    <td> June 16, 2015 </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default BorderedTable