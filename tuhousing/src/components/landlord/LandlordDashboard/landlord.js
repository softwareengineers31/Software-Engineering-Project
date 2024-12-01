import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Sidebar from "../../Sidebar/sidebar";
import HousingSearch from "../../HousingSearch/HousingSearch";
import ApplicationReviewComponent from "../ApplicationRequestReview/applicationReview";

function LandlordDashboard() {
    const [totals] = useState({
        reviews: 15,
        statusUpdates: 8,
        applications: 25,
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
                                            count={totals.reviews}
                                            bgColor="bg-blue-500"
                                        />
                                        <StatisticCard
                                            title="Total Status Updates"
                                            count={totals.statusUpdates}
                                            bgColor="bg-green-500"
                                        />
                                        <StatisticCard
                                            title="Total Applications"
                                            count={totals.applications}
                                            bgColor="bg-purple-500"
                                        />
                                    </div>

                                    {/* Action Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <Link to="/application-review">
                                            <Card
                                                title="Application Review"
                                                description="Review new tenant applications."
                                            />
                                        </Link>

                                        <Link to="/additional-information">
                                        <Card
                                            title="Additional Information"
                                            description="Request more details from applicants."
                                            className="h-46"
                                        />
                                        </Link>
                                        <Link to="/lease-agreement">
                                        <Card
                                            title="Lease Agreement"
                                            description="Generate and notify tenants about agreements."
                                            className="h-46"
                                        />
                                        </Link>
                                        <Link to="/allproperty-listing">
                                            <Card
                                                title="Application List"
                                                description="Browse all applications in detail."
                                                className="h-46"
                                            />
                                        </Link>
                                    </div>
                                </>
                            }
                        />

                        {/* Application Review Route */}
                        <Route path="/application-review" element={<ApplicationReviewComponent />} />
                        <Route path="/application-list" element={<HousingSearch />} />
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

export default LandlordDashboard;
