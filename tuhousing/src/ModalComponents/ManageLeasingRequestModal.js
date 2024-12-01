import React, { useState } from 'react';

const ManageLeasingRequestsModal = ({ isOpen, onClose, applications = [], onAction }) => {
    const [selectedApplication, setSelectedApplication] = useState(null);

    const handleSelectApplication = (application) => {
        setSelectedApplication(application);
    };

    const handleAction = (action) => {
        if (onAction && selectedApplication) {
            onAction(selectedApplication.id, action); // Pass application ID and action to parent
        }
        setSelectedApplication(null); // Clear selection after action
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div className="bg-gray-50 opacity-50 absolute inset-0"></div>
            {/* Modal */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-5xl z-10 overflow-hidden">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Leasing Requests</h2>
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar for Application List */}
                    <div className="w-full md:w-1/3 bg-gray-100 rounded-lg p-4 overflow-y-auto shadow-sm max-h-96">
                        <h3 className="text-lg font-medium text-gray-700 mb-4">Student Applications</h3>
                        {applications.length > 0 ? (
                            <ul className="space-y-3">
                                {applications.map((app) => (
                                    <li
                                        key={app.id}
                                        className={`p-3 rounded-md cursor-pointer border hover:bg-blue-50 ${
                                            selectedApplication?.id === app.id
                                                ? 'bg-blue-100 border-blue-300'
                                                : 'border-gray-300'
                                        }`}
                                        onClick={() => handleSelectApplication(app)}
                                    >
                                        <p className="font-medium text-gray-800">{app.studentName}</p>
                                        <p className="text-sm text-gray-600">{app.contactInfo}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No applications available.</p>
                        )}
                    </div>

                    {/* Details View */}
                    <div className="w-full flex-1 bg-gray-50 rounded-lg p-6 shadow-sm">
                        {selectedApplication ? (
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Student Name:</p>
                                        <p className="text-gray-900">{selectedApplication.studentName}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Contact Info:</p>
                                        <p className="text-gray-900">{selectedApplication.contactInfo}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Student ID:</p>
                                        <p className="text-gray-900">{selectedApplication.studentID}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Move-In Date:</p>
                                        <p className="text-gray-900">{selectedApplication.moveInDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Rental Duration:</p>
                                        <p className="text-gray-900">{selectedApplication.rentalDuration} months</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Rent Amount:</p>
                                        <p className="text-gray-900">{selectedApplication.rentAmount}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Guarantor Info:</p>
                                        <p className="text-gray-900">{selectedApplication.guarantorInfo}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Utilities:</p>
                                        <p className="text-gray-900">{selectedApplication.utilities}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-sm font-medium text-gray-600">Rental History:</p>
                                        <p className="text-gray-900">{selectedApplication.rentalHistory || 'N/A'}</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-4 justify-end">
                                    <button
                                        onClick={() => handleAction('reject')}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                    >
                                        Reject Application
                                    </button>
                                    <button
                                        onClick={() => handleAction('approve')}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                    >
                                        Approve Application
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-500">Select an application to view details.</p>
                        )}
                    </div>
                </div>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                    &#x2715;
                </button>
            </div>
        </div>
    );
};

export default ManageLeasingRequestsModal;