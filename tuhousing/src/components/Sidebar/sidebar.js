// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
//
// const Sidebar = () => {
//     const navigate = useNavigate();
//     const [role, setRole] = useState('');
//
//     // Load the user's role from localStorage
//     useEffect(() => {
//         const userRole = localStorage.getItem('role');
//         setRole(userRole);
//     }, []);
//
//     // Define menu items and access control based on role
//     const menuItems = [
//         { name: 'Manage Property', path: '/manage-property', roles: ['Admin', 'Landlord'] },
//         { name: 'Manage Registration', path: '/manage-registration', roles: ['Admin'] },
//         { name: 'Manage Listing', path: '/manage-listings', roles: ['Admin'] },
//         { name: 'Manage Housing Registration', path: '/manage-housing-registration', roles: ['Admin', 'Landlord'] },
//         { name: 'View Available Listings', path: '/view-listings', roles: ['Admin', 'Student', 'Landlord'] },
//         { name: 'Manage Users', path: '/manage-users', roles: ['Admin'] },
//         { name: 'Settings', path: '/settings', roles: ['Admin', 'Student', 'Landlord'] },
//     ];
//
//     const handleSignOut = () => {
//         localStorage.clear();
//         navigate('/login');
//     };
//
//     return (
//         <div className="min-h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
//             <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
//
//             {/* Render menu items based on user role */}
//             <ul className="space-y-4">
//                 {menuItems
//                     .filter(item => item.roles.includes(role))
//                     .map(item => (
//                         <li
//                             key={item.name}
//                             onClick={() => navigate(item.path)}
//                             className="cursor-pointer p-2 hover:bg-gray-700 rounded-md"
//                         >
//                             {item.name}
//                         </li>
//                     ))}
//             </ul>
//
//             {/* Sign Out Button */}
//             <button
//                 onClick={handleSignOut}
//                 className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
//             >
//                 Sign Out
//             </button>
//         </div>
//     );
// };
//
// export default Sidebar;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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


            ]
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
                { name: 'Dining Information', path: '/https://www.towson.edu/studentlife/housing/', roles: ['Admin', 'Student'], external:true},
                { name: 'Fitness Information', path: '/fitness-information', roles: ['Admin', 'Student'] },
                { name: 'Shuttle Information', path: '/shuttle-information', roles: ['Admin', 'Student'] },
                { name: 'Parking Information', path: '/parking-information', roles: ['Admin', 'Student'] },
            ]
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

    const handleSignOut = () => {
        localStorage.clear();
        navigate('/login');
    };

    const toggleSubmenu = (itemName) => {
        setOpenSubmenu(prev => ({
            ...prev,
            [itemName]: !prev[itemName] // Toggle submenu visibility
        }));
    };

    return (
        <div className="min-h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

            {/* Render menu items based on user role */}
            <ul className="space-y-4">
                {menuItems
                    .filter(item => item.roles.includes(role))
                    .map(item => (
                        <div key={item.name}>
                            <li
                                onClick={() => {
                                    if (item.submenu.length > 0) {
                                        toggleSubmenu(item.name);
                                    } else {
                                        navigate(item.path);
                                    }
                                }}
                                className="cursor-pointer p-2 hover:bg-gray-700 rounded-md flex items-center justify-between"
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
                                        .filter(subItem => subItem.roles.includes(role)) // Filter submenu by role
                                        .map(subItem => (
                                            <li
                                                key={subItem.name}
                                                onClick={() => navigate(subItem.path)}
                                                className="cursor-pointer p-2 hover:bg-gray-600 rounded-md"
                                            >
                                                {subItem.name}
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