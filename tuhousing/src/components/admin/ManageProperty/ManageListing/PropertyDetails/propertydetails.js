import React from 'react';

const PropertyDetails = ({ property, onClose }) => {
    if (!property) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
                <h2 className="text-2xl font-bold">{property.name}</h2>
                <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <p className="text-gray-600"><strong>Location:</strong> {property.location}</p>
                <p className="text-xl font-bold mb-4"><strong>Price:</strong> ${property.price}/month</p>
                <p className="text-gray-700"><strong>Rating:</strong> {property.rating.toFixed(1)} / 5</p>
                <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded mt-4">Close</button>
            </div>
        </div>
    );
};

export default PropertyDetails;
