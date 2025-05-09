
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {

     const data = {
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Pink',
          'Blue',
          'Yellow',
        ]
    };

    const options = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        aspectRatio:1.6
    };

  return (
    <Pie data={data} options={options} />
  )
}

export default PieChart