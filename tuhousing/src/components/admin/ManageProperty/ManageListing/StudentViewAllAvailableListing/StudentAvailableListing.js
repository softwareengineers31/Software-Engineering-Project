import React, { useState } from 'react';
import LeasingRequestModal from "../../../../../ModalComponents/LeasingRequestModal";

const properties = [
    {
        id: 1,
        title: "Cozy Apartment in City Center",
        location: "New York, NY",
        price: "$2,500/month",
        image: "https://via.placeholder.com/300",
        description: "A cozy apartment located in the heart of the city with easy access to public transport and amenities.",
        details: "This apartment features a modern kitchen, spacious living room, and a balcony with a view."
    },
    {
        id: 2,
        title: "Charming Cottage",
        location: "Amherst, MA",
        price: "$1,800/month",
        image: "https://via.placeholder.com/300",
        description: "A charming cottage surrounded by nature, perfect for those who enjoy peace and quiet.",
        details: "The cottage includes two bedrooms, a full kitchen, and a large garden."
    },
    {
        id: 3,
        title: "Modern Studio Apartment",
        location: "San Francisco, CA",
        price: "$3,000/month",
        image: "https://via.placeholder.com/300",
        description: "A modern studio apartment with a beautiful view of the city skyline.",
        details: "This studio features high ceilings, an open floor plan, and luxury appliances."
    },
    {
        id: 4,
        title: "Luxury Villa",
        location: "Miami, FL",
        price: "$5,000/month",
        image: "https://via.placeholder.com/300",
        description: "A luxury villa with a private pool and spacious garden.",
        details: "The villa includes four bedrooms, a gourmet kitchen, and a large terrace."
    }
];

const StudentAvailableListing = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [ratings, setRatings] = useState({});
    const [selectedProperty, setSelectedProperty] = useState(null);

    const handleRating = (propertyId, rating) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [propertyId]: rating,
        }));
    };

    const handleViewDetails = (property) => {
        setSelectedProperty(property);
    };

    const handleCloseModal = () => {
        setSelectedProperty(null);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map(property => (
                    <div key={property.id} className="border rounded-lg shadow-lg overflow-hidden">
                        <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{property.title}</h2>
                            <p className="text-gray-600">{property.location}</p>
                            <p className="text-lg font-bold mt-2">{property.price}</p>
                            <p className="mt-2 text-gray-700">{property.description}</p>
                            <div className="flex items-center mt-2">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <svg
                                        key={star}
                                        onClick={() => handleRating(property.id, star)}
                                        className={`w-5 h-5 cursor-pointer ${ratings[property.id] >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.12-6.511L.244 6.91l6.515-.953L10 0l2.241 5.957 6.515.953-4.998 4.569 1.12 6.511z" />
                                    </svg>
                                ))}
                            </div>
                            <div className="flex mt-4 space-x-2">
                                <button onClick={() => setModalOpen(true)}
                                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                                    Rent
                                </button>
                                <LeasingRequestModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

                                <button
                                    onClick={() => handleViewDetails(property)}
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                >
                                    View Details
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Property Details */}
            {selectedProperty && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">{selectedProperty.title}</h2>
                        <p className="mb-4">{selectedProperty.details}</p>
                        <button onClick={handleCloseModal} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentAvailableListing;
