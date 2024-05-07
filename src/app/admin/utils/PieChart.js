'use client'
import { useEffect } from "react";
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

function PieChart() {
    useEffect(() => {
        const ctx = document.getElementById('myChart2').getContext('2d');
        const myChart2 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Accepted", "Pending", "Rejected"],
                datasets: [{
                    data: [70, 10, 6],
                    borderColor: [
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                    ],
                    backgroundColor: [
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    }
                }
            }
        });

        // Cleanup function to destroy the chart on component unmount
        return () => {
            myChart2.destroy();
        };
    }, []);

    return (
        <>
            <h1 className="mx-auto mt-10 text-xl font-semibold capitalize">Doughnut Chart</h1>
            <div className="flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl pb-2' style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <canvas id='myChart2' style={{ width: '100%', height: '100%' }}></canvas>
                </div>
            </div>
        </>
    );
}

export default PieChart;
