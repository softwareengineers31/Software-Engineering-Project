import React, { useState } from 'react';

const LeasingRequestModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        studentName: '',
        contactInfo: '',
        studentID: '',
        moveInDate: '',
        rentalDuration: '',
        proofOfIncome: null,
        guarantorInfo: '',
        rentalHistory: '',
        rentAmount: '',
        availabilityDate: '',
        utilities: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            proofOfIncome: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        onClose(); // Optionally close modal after submission
    };

    if (!isOpen) return null; // Don't render anything if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div
                className="bg-gray-500 opacity-50 absolute inset-0"
                style={{ pointerEvents: 'none' }}
            ></div>
            {/* Modal Content */}
            <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-11/12 md:w-96">
                <h2 className="text-xl font-semibold mb-4">Leasing Request</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {/* Form Fields */}
                        <div>
                            <label className="block text-gray-700">Student Name</label>
                            <input
                                type="text"
                                name="studentName"
                                value={formData.studentName}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Contact Info</label>
                            <input
                                type="text"
                                name="contactInfo"
                                value={formData.contactInfo}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Student ID</label>
                            <input
                                type="text"
                                name="studentID"
                                value={formData.studentID}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Move-In Date</label>
                            <input
                                type="date"
                                name="moveInDate"
                                value={formData.moveInDate}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Rental Duration (months)</label>
                            <input
                                type="number"
                                name="rentalDuration"
                                value={formData.rentalDuration}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Proof of Income</label>
                            <input
                                type="file"
                                name="proofOfIncome"
                                onChange={handleFileChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Guarantor Information</label>
                            <input
                                type="text"
                                name="guarantorInfo"
                                value={formData.guarantorInfo}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Rental History (Optional)</label>
                            <textarea
                                name="rentalHistory"
                                value={formData.rentalHistory}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Rent Amount</label>
                            <input
                                type="text"
                                name="rentAmount"
                                value={formData.rentAmount}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Availability Date</label>
                            <input
                                type="date"
                                name="availabilityDate"
                                value={formData.availabilityDate}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Utilities</label>
                            <input
                                type="text"
                                name="utilities"
                                value={formData.utilities}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                            />
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                        >
                            Submit Request
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-red-500 hover:underline"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeasingRequestModal;