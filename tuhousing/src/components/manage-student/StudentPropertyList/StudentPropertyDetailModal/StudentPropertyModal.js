import React from 'react';

const StudentPropertyDetailModal = ({ isOpen, onClose, property }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg z-20 w-11/12 md:w-1/3">
                    <div className="px-6 py-4">
                        <h2 className="text-lg font-bold mb-2" id="modal-title">{property.type}</h2>
                        <img className="w-full h-48 object-cover mb-4" src={property.image} alt={property.type} />
                        <p className="text-gray-700">Location: {property.location}</p>
                        <p className="text-gray-700">Cost: ${property.cost}</p>
                        <p className="text-gray-700 mt-4">Details about the property can be placed here...</p>
                    </div>
                    <div className="px-6 py-4 flex justify-end">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentPropertyDetailModal;
