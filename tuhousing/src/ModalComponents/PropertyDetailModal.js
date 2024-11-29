import React from 'react';

const PropertyDetailModal = ({ property, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
                <h2 className="text-xl font-semibold">{property.title}</h2>
                <p className="mt-2">{property.description}</p>
                <p className="mt-2"><strong>Type:</strong> {property.type}</p>
                <p className="mt-2"><strong>Location:</strong> {property.location}</p>
                <p className="mt-2"><strong>Price:</strong> {property.price}</p>
                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default PropertyDetailModal;