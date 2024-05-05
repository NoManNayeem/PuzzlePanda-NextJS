'use client'

import React, { useState } from 'react';

const AdminPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Toggle button for sidebar */}
      <button
        className="p-4 text-white bg-blue-800"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? 'Hide' : 'Show'}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } w-64 bg-blue-800 text-white p-5`}
      >
        <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
        <ul>
          <li className="mb-3">
            <a href="#" className="block p-2 hover:bg-blue-700 transition-colors">
              Dashboard
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="block p-2 hover:bg-blue-700 transition-colors">
              Users
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="block p-2 hover:bg-blue-700 transition-colors">
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Main content with navbar */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-gray-800 text-white w-full p-4">
          <h2 className="text-lg font-semibold">Admin Navbar</h2>
        </div>
        
        {/* Content */}
        <div className="p-10 flex-1">
          <h2 className="text-3xl font-semibold mb-5">Welcome, Admin!</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Example cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Total Users</h3>
              <p className="text-2xl">150</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Active Campaigns</h3>
              <p className="text-2xl">45</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Revenue</h3>
              <p className="text-2xl">$4,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
