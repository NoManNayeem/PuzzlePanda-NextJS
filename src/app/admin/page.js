'use client';
import { useEffect, useState } from 'react';
import { IoStatsChart, IoPeople, IoTrophy, IoCalendar } from 'react-icons/io5';
import AdminFooter from './adminComponents/AdminFooter';
import AdminHeader from './adminComponents/AdminHeader';
import PieChart from './utils/PieChart';
import Link from 'next/link';
import { Bar, Line } from 'react-chartjs-2';
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

// Dashboard Card Component
const DashboardCard = ({ title, icon, value, link }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100 cursor-pointer">
            <Link href={link}> 
                    <span className="text-3xl text-gray-800">{icon}</span>
                    <h3 className="mt-2">{title}</h3>
                    <p className="text-lg">{value}</p> 
            </Link>
        </div>
    );
};

// Bar Chart Data
const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'User Registrations',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

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

const data = [
    {name: 'Page A', uv: 4000, amt: 2400},
    {name: 'Page B', uv: 3000, amt: 2210},
    {name: 'Page C', uv: 2000, amt: 2290},
    {name: 'Page D', uv: 2780, amt: 2000},
    {name: 'Page E', uv: 1890, amt: 2181},
];
const data2 = [
    {name: 'Page A', pv: 2400, amt: 2400},
    {name: 'Page B', pv: 1398, amt: 2210},
    {name: 'Page C', pv: 9800, amt: 2290},
    {name: 'Page D', pv: 3908, amt: 2000},
];
  
// AdminPage Component
const AdminPage = () => {
    const [stats, setStats] = useState({
        users: 150,
        campaigns: 45,
        winners: 10,
    });

    return (
        <div className="flex flex-col min-h-screen">
            <AdminHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <DashboardCard title="Users" icon={<IoPeople />} value={stats.users} link="/admin/details/users" />
                <DashboardCard title="Campaigns" icon={<IoCalendar />} value={stats.campaigns} link="/admin/details/campaigns" />
                <DashboardCard title="Winners" icon={<IoTrophy />} value={stats.winners} link="/admin/details/winners" />
                <DashboardCard title="Statistics" icon={<IoStatsChart />} value="View" link="/admin/details/stats" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4  flex-grow">
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100">
                    <Bar data={barChartData} options={barChartOptions} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100">
                    <PieChart />
                </div>
            </div>
            <AdminFooter />
        </div>
    );
};

export default AdminPage;
