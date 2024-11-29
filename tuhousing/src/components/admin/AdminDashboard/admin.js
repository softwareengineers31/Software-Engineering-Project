import React from 'react';
import Sidebar from "../../Sidebar/sidebar";


const propertyData = [
    { title: "Cozy Studio Apartment", location: "Downtown", price: "$1,500", imageUrl: "logo.png" },
    { title: "Spacious 2 BHK", location: "Uptown", price: "$2,300", imageUrl: "https://via.placeholder.com/200" },
    { title: "Luxury Condo", location: "City Center", price: "$3,200", imageUrl: "https://via.placeholder.com/200" },
    { title: "Modern Flat", location: "Suburbs", price: "$2,000", imageUrl: "https://via.placeholder.com/200" },
];


const chartData = [
    { title: "Total Revenue", value: "$150,000", icon: "💰" },
    { title: "Total Properties", value: "120", icon: "🏠" },
    { title: "Rented Properties", value: "80", icon: "🔑" },
    { title: "Available Properties", value: "40", icon: "📦" },
];

const AdminDashboard = () => {
    return (
        <div className="flex">
            <Sidebar isOpen={true} />
            <div className="flex-1 p-4">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

                {/* Statistics Section */}
                <h2 className="text-xl font-semibold mb-2">Statistics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {chartData.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                            <div className="text-3xl mr-4">{stat.icon}</div>
                            <div>
                                <h2 className="text-lg font-semibold">{stat.title}</h2>
                                <p className="text-xl font-bold">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Graphs and Charts Section */}
                <h2 className="text-xl font-semibold mb-2">Graphs and Charts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-semibold mb-2">Chart #{index + 1}</h3>
                            <div className="bg-gray-200 h-32 rounded-md">[Chart Placeholder]</div>
                        </div>
                    ))}
                </div>

                {/* Recent Listings Section */}
                <h2 className="text-xl font-semibold mb-2">Recent Listings</h2>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <ul>
                        <li className="border-b py-2">Cozy Studio Apartment - Available</li>
                        <li className="border-b py-2">Spacious 2 BHK - Rented</li>
                        <li className="border-b py-2">Luxury Condo - Available</li>
                        <li className="border-b py-2">Modern Flat - Rented</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;