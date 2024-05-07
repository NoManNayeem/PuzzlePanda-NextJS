import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart() {
    // Bar Chart Data
    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'User Registrations',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Bar Chart Options
    const barChartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <>
            <Bar data={barChartData} options={barChartOptions} />
        </>
    );
}

export default BarChart;
