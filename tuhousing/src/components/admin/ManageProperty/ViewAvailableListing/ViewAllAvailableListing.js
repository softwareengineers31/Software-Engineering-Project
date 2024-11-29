import React from 'react';

const properties = [
    {
        id: 1,
        title: "Cozy Apartment in City Center",
        location: "New York, NY",
        price: "$2,500/month",
        image: "https://via.placeholder.com/300",
        description: "A cozy apartment located in the heart of the city with easy access to public transport and amenities."
    },
    {
        id: 2,
        title: "Charming Cottage",
        location: "Amherst, MA",
        price: "$1,800/month",
        image: "https://via.placeholder.com/300",
        description: "A charming cottage surrounded by nature, perfect for those who enjoy peace and quiet."
    },
    {
        id: 3,
        title: "Modern Studio Apartment",
        location: "San Francisco, CA",
        price: "$3,000/month",
        image: "https://via.placeholder.com/300",
        description: "A modern studio apartment with a beautiful view of the city skyline."
    },
    {
        id: 4,
        title: "Luxury Villa",
        location: "Miami, FL",
        price: "$5,000/month",
        image: "https://via.placeholder.com/300",
        description: "A luxury villa with a private pool and spacious garden."
    }
];

const PropertyListingPage = () => {
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
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyListingPage;
