import React, { useEffect, useState } from 'react';

const Sidebar = ({ userRole }) => {

    const menuItems = [
        { label: 'Manage Property', role: 'Admin' },
        { label: 'View Available Listings', role: 'all' },
        { label: 'Manage Users', role: 'Admin' },
        { label: 'Manage Listings', role: 'Admin' },
        { label: 'Manage Housing Registration', role: 'Landlord' },
        { label: 'Settings', role: 'all' },
        { label: 'Sign Out', role: 'all' }
    ];


    const filteredMenuItems = menuItems.filter(
        item =>
            item.role === 'all' ||
            (userRole === 'Admin' && item.role === 'Admin') ||
            (userRole === 'Student' && item.role === 'Student') ||
            (userRole === 'Landlord' && item.role === 'Landlord')
    );

    return (
        <div className="w-64 bg-gray-800 text-white h-screen p-6">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <ul>
                {filteredMenuItems.map((item, index) => (
                    <li key={index} className="mb-4">
                        <button className="w-full text-left p-2 hover:bg-gray-700 rounded">
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Dashboard = () => {
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        // Load the user role from localStorage
        const role = localStorage.getItem('role');
        setUserRole(role);
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar userRole={userRole} />

            {/* Main Content Area */}
            <div className="flex-1 p-6 space-y-4">
                <h2 className="text-2xl font-bold">Welcome to your Dashboard</h2>

                {/* Role-Based Content */}
                {userRole === 'Admin' && <AdminDashboard />}
                {userRole === 'Student' && <StudentDashboard />}
                {userRole === 'Landlord' && <LandlordDashboard />}
            </div>
        </div>
    );
};

// Admin Dashboard Component
const AdminDashboard = () => (
    <div>
        <h3 className="text-xl font-semibold">Admin Dashboard</h3>
        <p>Manage users, properties, and listings.</p>
    </div>
);

// Student Dashboard Component
const StudentDashboard = () => (
    <div>
        <h3 className="text-xl font-semibold">Student Dashboard</h3>
        <p>View available listings and properties.</p>
    </div>
);

// Landlord Dashboard Component
const LandlordDashboard = () => (
    <div>
        <h3 className="text-xl font-semibold">Landlord Dashboard</h3>
        <p>Manage your properties and housing registration.</p>
    </div>
);

export default Dashboard;