import React from 'react';

const CarpoolListing = ({ carpools, onCancel }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Arrival Time</th>
                    <th className="py-3 px-6 text-left">Arrival Message</th>
                    <th className="py-3 px-6 text-left">Departure Time</th>
                    <th className="py-3 px-6 text-left">Destination</th>
                    <th className="py-3 px-6 text-left">Meetup Location</th>
                    <th className="py-3 px-6 text-left">Number of People</th>
                    <th className="py-3 px-6 text-left">Departure Message</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                {carpools.map((carpool, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left">{carpool.arrivalTime}</td>
                        <td className="py-3 px-6 text-left">{carpool.arrivalMessage}</td>
                        <td className="py-3 px-6 text-left">{carpool.departureTime}</td>
                        <td className="py-3 px-6 text-left">{carpool.destination}</td>
                        <td className="py-3 px-6 text-left">{carpool.meetupLocation}</td>
                        <td className="py-3 px-6 text-left">{carpool.numberOfPeople}</td>
                        <td className="py-3 px-6 text-left">{carpool.departureMessage}</td>
                        <td className="py-3 px-6 text-left">
                            <button
                                onClick={() => onCancel(carpool.id)}
                                className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600"
                            >
                                Cancel
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarpoolListing;
