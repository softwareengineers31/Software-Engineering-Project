import React, { useState } from 'react';

const CarpoolModal = ({ isOpen, onClose, addCarpool }) => {
    const [formData, setFormData] = useState({
        departureMessage: '',
        arrivalMessage: '',
        responses: '',
        meetupLocation: '',
        departureTime: '',
        arrivalTime: '',
        destination: '',
        numberOfPeople: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCarpool(formData); // Pass the new carpool data to the parent
        onClose(); // Close the modal after form submission
    };

    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-500 opacity-50 absolute inset-0"></div>
            <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-11/12 md:w-96 relative">
                <h2 className="text-xl font-semibold mb-4">Create Carpool</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-gray-700">Departure Message</label>
                            <input
                                type="text"
                                name="departureMessage"
                                value={formData.departureMessage}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Arrival Message</label>
                            <input
                                type="text"
                                name="arrivalMessage"
                                value={formData.arrivalMessage}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Responses</label>
                            <textarea
                                name="responses"
                                value={formData.responses}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Meetup Location</label>
                            <input
                                type="text"
                                name="meetupLocation"
                                value={formData.meetupLocation}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Departure Time</label>
                            <input
                                type="time"
                                name="departureTime"
                                value={formData.departureTime}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Arrival Time</label>
                            <input
                                type="time"
                                name="arrivalTime"
                                value={formData.arrivalTime}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Destination</label>
                            <input
                                type="text"
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Number of People Allowed</label>
                            <input
                                type="number"
                                name="numberOfPeople"
                                value={formData.numberOfPeople}
                                onChange={handleChange}
                                className="border rounded-md w-full p-2"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
                        >
                            Create Carpool
                        </button>
                        <button
                            type="button"
                            onClick={onClose} // Close modal on cancel
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

export default CarpoolModal;