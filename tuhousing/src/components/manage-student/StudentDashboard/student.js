import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "../../Sidebar/sidebar";
import CarpoolListing from "../Carpool/CarpoolListing/CarpoolListing";
import PropertyListings from "../../admin/ManageProperty/ManageListing/AllPropertyListing";



function StudentDashboard() {
    const [totals] = useState({
        leaseRequest: 15,
        approve: 8,
        rejection: 25,
        carpoolListing: 25,
    });

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Sidebar isOpen={true} />
            <div className="min-h-screen bg-gray-100">


                <div className="container mx-auto p-4">
                    <Routes>
                        {/* Main Dashboard Route */}
                        <Route
                            path="/"
                            element={
                                <>
                                    {/* Totals Section */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                                        <StatisticCard
                                            title="Total Application Reviews"
                                            count={totals.leaseRequest}
                                            bgColor="bg-blue-500"
                                        />
                                        <StatisticCard
                                            title="Total Status Updates"
                                            count={totals.approve}
                                            bgColor="bg-green-500"
                                        />
                                        <StatisticCard
                                            title="Total Applications"
                                            count={totals.rejection}
                                            bgColor="bg-purple-500"
                                        />

                                        <StatisticCard
                                            title="Total Carpool List"
                                            count={totals.carpoolListing}
                                            bgColor="bg-purple-500"
                                        />

                                    </div>

                                    {/* Action Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <Link to="/approvestatus-view">
                                        <Card
                                            title="Approved Status"
                                            description="View Approve Application"
                                            className="h-46"
                                        />
                                        </Link>
                                        <Link to="/viewstatus-rejection">
                                        <Card
                                            title="Rejected Status"
                                            description="View Rejected Application"
                                            className="h-46"
                                        />
                                        </Link>

                                        <Link to="/carpool-listing">
                                            <Card
                                                title="Carpool Listing"
                                                description="View Carpool Listing"
                                                className="h-46"
                                            />
                                        </Link>

                                        <Link to="/studentavailable-listing">
                                            <Card
                                                title="Property List"
                                                description="Browse all properities in detail."
                                                className="h-46"
                                            />
                                        </Link>
                                    </div>
                                </>
                            }
                        />

                        {/* Application Review Route */}
                        <Route path="/carpool-listing" element={<CarpoolListing />} />
                        <Route path="/property-list" element={<PropertyListings />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

// Component for action cards
const Card = ({ title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transform hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    );
};

// Component for statistic cards
const StatisticCard = ({ title, count, bgColor }) => {
    return (
        <div
            className={`shadow-lg rounded-lg p-6 text-white ${bgColor} flex flex-col items-center justify-center`}
        >
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-3xl font-bold">{count}</p>
        </div>
    );
};

export default StudentDashboard;


