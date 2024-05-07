import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register ChartJS components needed for the Doughnut chart
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function DoughnutChart() {
    // Doughnut Chart Data
    const doughnutChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Doughnut Chart Options
    const doughnutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <>
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
        </>
    );
}

export default DoughnutChart;
