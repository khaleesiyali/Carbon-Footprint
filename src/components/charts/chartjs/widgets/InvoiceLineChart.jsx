
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

import { 
  lineOptions, 
} from '../../../widget/helper/rawData'


function InvoiceLineChart({chartData}) {

  return (
    <Line data={chartData} options={lineOptions} />
  )
}

export default InvoiceLineChart