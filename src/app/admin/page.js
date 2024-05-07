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
        <div className={`${bgColor} rounded-lg shadow-lg hover:shadow-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out`}>
            <Link href={link} className="text-center">
                    <span className="text-3xl text-white">{icon}</span>
                    <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
                    <p className="text-lg text-gray-200">{value}</p> 
            </Link>
        </div>
    );
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
                <DashboardCard title="Users" icon={<IoPeople />} value={stats.users} link="/admin/details/users" bgColor="bg-blue-600 hover:bg-blue-700" />
                <DashboardCard title="Campaigns" icon={<IoCalendar />} value={stats.campaigns} link="/admin/details/campaigns" bgColor="bg-red-600 hover:bg-red-700" />
                <DashboardCard title="Winners" icon={<IoTrophy />} value={stats.winners} link="/admin/details/winners" bgColor="bg-green-600 hover:bg-green-700" />
                <DashboardCard title="Statistics" icon={<IoStatsChart />} value="View" link="/admin/details/stats" bgColor="bg-yellow-500 hover:bg-yellow-600" />
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
