import React, { useState } from 'react';
import StudentPropertyCard from "./StudentPropertyCard/StudentPropertyCard";
import PropertyDetailModal from "../../../ModalComponents/PropertyDetailModal";


const properties = [
    {
        id: 1,
        title: 'Cozy Apartment in Downtown',
        type: 'Apartment',
        description: 'A cozy apartment located in the heart of the city.',
        location: 'Downtown City',
        price: '$1200/month',
        image: 'https://via.placeholder.com/300',
    },
    {
        id: 2,
        title: 'Spacious Room Near Campus',
        type: 'Room',
        description: 'Spacious room available for rent near the university campus.',
        location: 'Near Campus',
        price: '$800/month',
        image: 'https://via.placeholder.com/300',
    },
    // Add more properties as needed
];

function StudentPropertyList() {
    const [selectedProperty, setSelectedProperty] = useState(null);

    const handleViewDetails = (property) => {
        setSelectedProperty(property);
    };

    const closeModal = () => {
        setSelectedProperty(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Student Property Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                    <StudentPropertyCard
                        key={property.id}
                        property={property}
                        onViewDetails={handleViewDetails}
                    />
                ))}
            </div>
            {selectedProperty && (
                <PropertyDetailModal property={selectedProperty} onClose={closeModal} />
            )}
        </div>
    );
}

export default StudentPropertyList;
