import Table from 'react-bootstrap/Table';

function RecentTickets() {
  return (
    <div className='table-responsive'>
        <Table>
            <thead>
                <tr>
                    <th>Assignee</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Last Update</th>
                    <th>Tracking ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="/images/faces/face1.jpg" className="m-2" alt="face" />
                         David Grey 
                    </td>
                    <td> Fund is not received </td>
                    <td>
                        <label className="badge badge-gradient-success">DONE</label>
                    </td>
                    <td> Dec 5, 2017 </td>
                    <td> WD-12345 </td>
                </tr>
                <tr>
                    <td>
                        <img src="/images/faces/face2.jpg" className="m-2" alt="face" /> 
                        Stella Johnson
                    </td>
                    <td> High loading time </td>
                    <td>
                        <label className="badge badge-gradient-warning">PROGRESS</label>
                    </td>
                    <td> Dec 12, 2017 </td>
                    <td> WD-12346 </td>
                </tr>
                <tr>
                    <td>
                        <img src="/images/faces/face3.jpg" className="m-2" alt="face" /> 
                        Marina Michel 
                    </td>
                    <td> Website down for one week </td>
                    <td>
                        <label className="badge badge-gradient-info">ON HOLD</label>
                    </td>
                    <td> Dec 16, 2017 </td>
                    <td> WD-12347 </td>
                </tr>
                <tr>
                    <td>
                        <img src="/images/faces/face4.jpg" className="m-2" alt="face" /> 
                        John Doe
                    </td>
                    <td> Loosing control on server </td>
                    <td>
                        <label className="badge badge-gradient-danger">REJECTED</label>
                    </td>
                    <td> Dec 3, 2017 </td>
                    <td> WD-12348 </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default RecentTickets