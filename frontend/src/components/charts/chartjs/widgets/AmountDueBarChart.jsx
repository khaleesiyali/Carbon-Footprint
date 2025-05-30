
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import {
 amountDueBarData, 
 amountDueBarOptions
} from '../../../widget/helper/rawData'

function AmountDueBarChart() {


  return (
    <Bar data={amountDueBarData} options={amountDueBarOptions}/>
  )
}

export default AmountDueBarChart