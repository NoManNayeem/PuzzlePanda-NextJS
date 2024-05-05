'use client'

// pages/userpage.js
import AdminHeader from './adminComponents/AdminHeader';
import AdminFooter from './adminComponents/AdminFooter';

const AdminPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <AdminHeader />
            <div className="flex-grow container mx-auto p-4">
                Welcome to Puzzle Panda! Explore our puzzles.
            </div>
            <AdminFooter />
        </div>
    );
};

export default AdminPage;
