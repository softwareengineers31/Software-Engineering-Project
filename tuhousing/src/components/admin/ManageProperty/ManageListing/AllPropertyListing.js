import React from 'react';

const properties = [
    {
        id: 1,
        title: "Beautiful Family Home",
        type: "House",
        description: "A beautiful house located in the suburbs with a large garden.",
        location: "123 Elm St, Springfield",
        price: "$350,000",
        image: "https://via.placeholder.com/300"
    },
    {
        id: 2,
        title: "Luxury Apartment",
        type: "Apartment",
        description: "Modern apartment in the city center with stunning views.",
        location: "456 Oak St, Springfield",
        price: "$550,000",
        image: "https://via.placeholder.com/300"
    },
    {
        id: 3,
        title: "Cozy Cottage",
        type: "Cottage",
        description: "A charming cottage perfect for a weekend getaway.",
        location: "789 Pine St, Springfield",
        price: "$250,000",
        image: "https://via.placeholder.com/300"
    },
];

const PropertyListing = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">All Property Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {properties.map((property) => (
                    <div key={property.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{property.title}</h2>
                            <p className="text-gray-500">{property.type}</p>
                            <p className="mt-2">{property.description}</p>
                            <p className="mt-2 text-gray-700">{property.location}</p>
                            <p className="mt-2 text-lg font-bold">{property.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyListing;
