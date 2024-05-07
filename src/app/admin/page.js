"use client"

// pages/AdminPage.js
import { useEffect, useState } from 'react';
import { IoStatsChart, IoPeople, IoTrophy, IoCalendar } from 'react-icons/io5';
import AdminFooter from './adminComponents/AdminFooter';
import AdminHeader from './adminComponents/AdminHeader';



// Dashboard Card Component
const DashboardCard = ({ title, icon, value, link = '#' }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100">
            <span className="text-3xl text-gray-800">{icon}</span>
            <h3 className="mt-2">{title}</h3>
            <p className="text-lg">{value}</p>
        </div>
    );
};

// Data Table Component (Placeholder)
const DataTable = ({ title, dataKey }) => {
    return (
        <div className="my-4 p-4 bg-white rounded shadow">
            <h3 className="mb-2">{title}</h3>
            {/* Placeholder for table */}
            <div>Table for {dataKey}</div>
        </div>
    );
};

// Chart Component (Placeholder)
const Chart = ({ type, dataKey }) => {
    return (
        <div className="my-4 p-4 bg-white rounded shadow">
            <h3>{type} Chart of {dataKey}</h3>
            {/* Placeholder for chart */}
            <div>Chart visualization here</div>
        </div>
    );
};

// AdminPage Component
const AdminPage = () => {
    const [stats, setStats] = useState({
        users: 0,
        campaigns: 0,
        winners: 0,
    });

    useEffect(() => {
        // Simulate fetching stats from backend
        setStats({ users: 150, campaigns: 45, winners: 10 });
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <AdminHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <DashboardCard title="Users" icon={<IoPeople />} value={stats.users} />
                <DashboardCard title="Campaigns" icon={<IoCalendar />} value={stats.campaigns} />
                <DashboardCard title="Winners" icon={<IoTrophy />} value={stats.winners} />
                <DashboardCard title="Statistics" icon={<IoStatsChart />} value="View" link="/stats" />
            </div>
            <div className="container mx-auto p-4 flex-grow">
                <Chart type="bar" dataKey="campaigns" />
                <DataTable title="Users" dataKey="users" />
                <DataTable title="Campaigns" dataKey="campaigns" />
                <DataTable title="Winners" dataKey="winners" />
            </div>
            <AdminFooter />
        </div>
    );
};

export default AdminPage;
