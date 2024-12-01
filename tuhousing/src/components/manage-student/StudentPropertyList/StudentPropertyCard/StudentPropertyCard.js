import React, { useState } from 'react';
import LeasingRequestModal from "../../../../ModalComponents/LeasingRequestModal";

const StudentPropertyCard = ({ property, onViewDetails }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleRent = () => {
        alert(`You selected to rent: ${property.title}`);
    };

    return (
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={property.image} alt={property.title} />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{property.title}</h2>
                <p className="text-gray-600">{property.type}</p>
                <p className="text-gray-800">{property.description}</p>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-lg font-bold">{property.price}</p>
                <div className="flex items-center mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            onClick={() => handleRating(star)}
                            className={`w-6 h-6 cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 2 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
                        </svg>
                    ))}
                </div>
                <div className="flex space-x-2 mt-4">
                    <button
                        onClick={() => onViewDetails(property)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded"
                    >
                        View Details
                    </button>
                    <button onClick={() => setModalOpen(true)}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded">
                        Rent Now
                    </button>
                    <LeasingRequestModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />





            </div>
        </div>
</div>
);
};

export default StudentPropertyCard;
