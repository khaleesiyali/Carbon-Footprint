import Table from 'react-bootstrap/Table';
import { ProgressBar } from 'react-bootstrap'



function ProjectStatus() {
  return (
    <div className='table-responsive'>
        <Table>
            <thead>
                <tr>
                    <th> # </th>
                    <th> Name </th>
                    <th> Due Date </th>
                    <th> Progress </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 1 </td>
                    <td> Herman Beck </td>
                    <td> May 15, 2015 </td>
                    <td>
                        <ProgressBar variant="gradient-success" now={25}/>
                    </td>
                </tr>
                <tr>
                    <td> 2 </td>
                    <td> Messy Adam </td>
                    <td> Jul 01, 2015 </td>
                    <td>
                    <ProgressBar variant="gradient-danger" now={75}/>
                    </td>
                </tr>
                <tr>
                    <td> 3 </td>
                    <td> John Richards </td>
                    <td> Apr 12, 2015 </td>
                    <td>
                    <ProgressBar variant="gradient-warning" now={90}/>
                    </td>
                </tr>
                <tr>
                    <td> 4 </td>
                    <td> Peter Meggik </td>
                    <td> May 15, 2015 </td>
                    <td>
                    <ProgressBar variant="gradient-primary" now={50}/>
                    </td>
                </tr>
                <tr>
                    <td> 5 </td>
                    <td> Edward </td>
                    <td> May 03, 2015 </td>
                    <td>
                    <ProgressBar variant="gradient-danger" now={50}/>
                    </td>
                </tr>
                <tr>
                    <td> 5 </td>
                    <td> Ronald </td>
                    <td> Jun 05, 2015 </td>
                    <td>
                    <ProgressBar variant="gradient-info" now={65}/>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default ProjectStatus