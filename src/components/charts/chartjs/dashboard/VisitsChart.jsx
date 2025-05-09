import { useState, useEffect, useRef} from 'react'
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

function VisitsChart() {

    const [visitSaleData, setVisitSaleData] = useState({});

    useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const gradientBar1 = ctx.createLinearGradient(0, 0, 0, 181);
    gradientBar1.addColorStop(0, 'rgba(218, 140, 255, 1)');
    gradientBar1.addColorStop(1, 'rgba(154, 85, 255, 1)');

    const gradientBar2 = ctx.createLinearGradient(0, 0, 0, 360);
    gradientBar2.addColorStop(0, 'rgba(54, 215, 232, 1)');
    gradientBar2.addColorStop(1, 'rgba(177, 148, 250, 1)');

    const gradientBar3 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientBar3.addColorStop(0, 'rgba(255, 191, 150, 1)');
    gradientBar3.addColorStop(1, 'rgba(254, 112, 150, 1)');

    const gradientDonut1 = ctx.createLinearGradient(0, 0, 0, 181);
    gradientDonut1.addColorStop(0, 'rgba(54, 215, 232, 1)');
    gradientDonut1.addColorStop(1, 'rgba(177, 148, 250, 1)');

    const gradientDonut2 = ctx.createLinearGradient(0, 0, 0, 50);
    gradientDonut2.addColorStop(0, 'rgba(6, 185, 157, 1)');
    gradientDonut2.addColorStop(1, 'rgba(132, 217, 210, 1)');

    const gradientDonut3 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientDonut3.addColorStop(0, 'rgba(254, 124, 150, 1)');
    gradientDonut3.addColorStop(1, 'rgba(255, 205, 150, 1)');

    const newVisitSaleData = {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
      datasets: [
        {
          label: 'CHN',
          borderColor: gradientBar1,
          backgroundColor: gradientBar1,
          hoverBackgroundColor: gradientBar1,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [20, 40, 15, 35, 25, 50, 30, 20]
        },
        {
          label: 'USA',
          borderColor: gradientBar2,
          backgroundColor: gradientBar2,
          hoverBackgroundColor: gradientBar2,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [40, 30, 20, 10, 50, 15, 35, 40]
        },
        {
          label: 'UK',
          borderColor: gradientBar3,
          backgroundColor: gradientBar3,
          hoverBackgroundColor: gradientBar3,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: [70, 10, 30, 40, 25, 50, 15, 30]
        }
      ]
    };

    

    setVisitSaleData(newVisitSaleData);
  }, []);


    const visitSaleOptions = {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
        min: 0,
        max: 80,
        ticks: {
          stepSize: 20
        },
        grid: {
          drawBorder: false,
          color: 'rgba(235,237,242,1)'
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          color: 'rgba(0,0,0,1)'
        },
        ticks: {
          padding: 20,
          color: '#9c9fa6',
          autoSkip: true
        },
    },
},
    categoryPercentage: 0.5,
    barPercentage: 0.5,
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };
    


  return (
    <div>
        {visitSaleData.datasets && (
        <Bar data={visitSaleData} options={visitSaleOptions} />
      )}
    </div>
  )
}

export default VisitsChart


