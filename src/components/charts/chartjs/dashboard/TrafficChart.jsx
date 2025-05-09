import { useState, useEffect, useRef} from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function TrafficChart() {

    const [trafficData, setTrafficData] = useState({});

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


        const newTrafficData = {
        datasets: [
            {
            data: [30, 30, 40],
            backgroundColor: [gradientDonut1, gradientDonut2, gradientDonut3],
            hoverBackgroundColor: [gradientDonut1, gradientDonut2, gradientDonut3],
            borderColor: [gradientDonut1, gradientDonut2, gradientDonut3]
            }
        ],
        labels: ['Search Engines', 'Direct Click', 'Bookmarks Click']
    };

    setTrafficData(newTrafficData);

    },[]);
    
    const trafficOptions = {
    responsive: true,
    animation: {
        animateScale: true,
        animateRotate: true
    },
    plugins: {
        legend: {
        display: false
        }
    },
    aspectRatio: 1.9,
    };

  return (
     <div>
        {trafficData.datasets && <Doughnut data={trafficData} options={trafficOptions} />}
    </div>
  )
}

export default TrafficChart