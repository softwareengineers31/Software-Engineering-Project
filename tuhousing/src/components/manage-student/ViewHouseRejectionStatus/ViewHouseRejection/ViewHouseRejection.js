import React, { useState } from 'react';
import ViewHouseRejectionStatus from "../ViewHouseRejectionStatus";


const ViewHouseRejection = () => {
    const [isModalOpen, setIsModalOpen] = useState(true); // For demonstration, we start with the modal open

    const rejectedApplication = {
        name: 'John Doe',
        contactDetails: 'john.doe@example.com',
        propertyLocation: {
            street: '123 Main St',
            city: 'Springfield',
            zipCode: '12345',
        },
        propertyType: 'Apartment',
        propertySize: {
            squareFootage: '800',
            bedrooms: '2',
            bathrooms: '1',
        },
        amount: {
            rent: '1200',
        },
        rejectionReasons: [
            'Insufficient income verification.',
            'Property not meeting minimum safety standards.',
            'Incomplete application form.',
        ],
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            {isModalOpen && (
                <ViewHouseRejectionStatus application={rejectedApplication} onClose={handleClose} />
            )}
        </div>
    );
};

export default ViewHouseRejection;
