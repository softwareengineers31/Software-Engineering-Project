
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const [openSubmenu, setOpenSubmenu] = useState({}); // State to manage open submenus

    // Load the user's role from localStorage
    useEffect(() => {
        const userRole = localStorage.getItem('role');
        setRole(userRole);
    }, []);

    // Define menu items and access control based on role
    const menuItems = [
        {
            name: 'Manage Property',
            path: '/manage-property',
            roles: ['Admin', 'Landlord'],
            submenu: [
                { name: 'Add Listing', path: '/add-listing', roles: ['Admin', 'Landlord'] },
                { name: 'View All Property Listing', path: '/allproperty-listing', roles: ['Admin', 'Landlord'] },
                { name: 'Manage Listing', path: '/manage-property', roles: ['Admin', 'Landlord'] },
                { name: 'View Available Listings', path: '/viewavailable-listings', roles: ['Admin', 'Landlord'] },
            ],
        },
        {
        name: 'Manage Landlord',
            path: '/manage-listings',
            roles: ['Admin', 'Landlord'],
            submenu: [
            { name: 'Application Request Review', path: '/application-review', roles: ['Admin', 'Landlord'] },

        ]
    },

        {
            name: 'Manage Student',
            path: '/manage-listings',
            roles: ['Admin', 'Student'],
            submenu: [
                { name: 'View Available Listings', path: '/studentavailable-listing', roles: ['Student'] },
                { name: 'Carpool Listing', path: '/carpool-listing', roles: ['Admin', 'Student'] },
                { name: 'Roommate Matching System', path: '/roommate-matching', roles: ['Admin', 'Student'] },

            ]
        },


        {
            name: 'Manage Resources',
            path: '/manage-listings',
            roles: ['Admin', 'Student'],
            submenu: [
                { name: 'Dining Information', path: 'https://www.towson.edu/studentlife/housing/dining.html', roles: ['Admin', 'Student'], external: true },
                { name: 'Fitness Information', path: 'https://www.towson.edu/studentlife/activities/recreation/campusrec/fitness/', roles: ['Admin', 'Student'], external: true },
                { name: 'Shuttle Information', path: 'https://www.towson.edu/parking/shuttle/', roles: ['Admin', 'Student'], external: true },
                { name: 'Parking Information', path: 'https://www.towson.edu/parking/', roles: ['Admin', 'Student'], external: true },
            ],
        },
        {
            name: 'Manage Users',
            path: '/manage-users',
            roles: ['Admin'],
            submenu: [
                { name: 'Add New User', path: '/signup', roles: ['Admin'] },
                { name: 'Sign In', path: '/login', roles: ['Admin', 'Student', 'Landlord'] },
                { name: 'Sign Out', path: '/', roles: [ 'Student', 'Landlord'] },
            ]
        },
        { name: 'Sign Out', path: '/', roles: ['Admin', 'Student', 'Landlord'], submenu: [] },
        { name: 'Settings', path: '/settings', roles: ['Admin', 'Student', 'Landlord'], submenu: [] },
    ];


    // Handle toggling submenu
    const toggleSubmenu = (itemName) => {
        setOpenSubmenu((prev) => ({
            ...prev,
            [itemName]: !prev[itemName],
        }));
    };

    // Handle sign-out logic
    const handleSignOut = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="min-h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

            <ul className="space-y-4">
                {menuItems
                    .filter((item) => item.roles.includes(role)) // Filter menu items by role
                    .map((item) => (
                        <div key={item.name}>
                            <li
                                onClick={() => {
                                    if (item.submenu.length > 0) {
                                        toggleSubmenu(item.name);
                                    } else if (item.name === 'Sign Out') {
                                        handleSignOut();
                                    } else {
                                        navigate(item.path);
                                    }
                                }}
                                className="cursor-pointer text-white p-2 hover:bg-gray-700 rounded-md flex items-center justify-between"
                            >
                                <span>{item.name}</span>
                                {item.submenu.length > 0 && (
                                    <span className="text-sm">{openSubmenu[item.name] ? '-' : '+'}</span>
                                )}
                            </li>

                            {/* Render submenu if it exists and is open */}
                            {item.submenu.length > 0 && openSubmenu[item.name] && (
                                <ul className="ml-4">
                                    {item.submenu
                                        .filter((subItem) => subItem.roles.includes(role)) // Filter submenu items by role
                                        .map((subItem) => (
                                            <li key={subItem.name} className="py-1">
                                                {subItem.external ? (
                                                    <a
                                                        href={subItem.path}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white hover:underline"
                                                    >
                                                        {subItem.name}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        to={subItem.path}
                                                        className="text-white hover:underline"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                </ul>
                            )}
                        </div>
                    ))}
            </ul>
        </div>
    );
};

export default Sidebar;

