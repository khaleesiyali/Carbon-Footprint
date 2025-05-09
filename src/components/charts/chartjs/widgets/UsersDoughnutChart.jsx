import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


import {
  usersDoughnutChartData, 
  usersDoughnutChartOptions
} from '../../../widget/helper/rawData'

function UsersDoughnutChart() {


  return (
    <Doughnut data={usersDoughnutChartData} options={usersDoughnutChartOptions}/>
  )
}

export default UsersDoughnutChart