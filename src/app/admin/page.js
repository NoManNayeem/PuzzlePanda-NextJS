'use client';
import { useEffect, useState } from 'react';
import { IoStatsChart, IoPeople, IoTrophy, IoCalendar } from 'react-icons/io5';
import AdminFooter from './adminComponents/AdminFooter';
import AdminHeader from './adminComponents/AdminHeader';
import Link from 'next/link';
import BarChart from './utils/BarChart';
import DoughnutChart from './utils/DoughnutChart';



// Dashboard Card Component with dynamic background color
const DashboardCard = ({ title, icon, value, link, bgColor }) => {
    return (
        <div className={`bg-${bgColor}-100 hover:bg-${bgColor}-200 shadow-md rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-colors`}>
            <Link href={link} className="text-center">
                    <span className="text-3xl text-gray-800">{icon}</span>
                    <h3 className="mt-2">{title}</h3>
                    <p className="text-lg">{value}</p> 
            </Link>
        </div>
    );
};

// Bar Chart Data and Options
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
                <DashboardCard title="Users" icon={<IoPeople />} value={stats.users} link="/admin/details/users" bgColor="blue" />
                <DashboardCard title="Campaigns" icon={<IoCalendar />} value={stats.campaigns} link="/admin/details/campaigns" bgColor="red" />
                <DashboardCard title="Winners" icon={<IoTrophy />} value={stats.winners} link="/admin/details/winners" bgColor="green" />
                <DashboardCard title="Statistics" icon={<IoStatsChart />} value="View" link="/admin/details/stats" bgColor="yellow" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 flex-grow">
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100">
                    <BarChart />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100">
                    <DoughnutChart />
                </div>
            </div>
            <AdminFooter />
        </div>
    );
};

export default AdminPage;
