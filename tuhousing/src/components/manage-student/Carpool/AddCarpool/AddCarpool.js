import React, { useState } from 'react';

import CarpoolListing from "../CarpoolListing/CarpoolListing";
import CarpoolModal from "../../../../ModalComponents/CarpoolModalForm";

const initialCarpools = [
    {
        id: 1,
        arrivalTime: "8:00 AM",
        arrivalMessage: "On time",
        departureTime: "6:00 PM",
        destination: "City Center",
        meetupLocation: "Main Square",
        numberOfPeople: 3,
        departureMessage: "Heading home",
    },
    // Add more carpool entries as needed
];

const AddCarpool = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [carpools, setCarpools] = useState(initialCarpools);

    const addCarpool = (newCarpool) => {
        setCarpools((prevCarpools) => [...prevCarpools, newCarpool]);
        setIsModalOpen(false); // Close the modal after adding
    };

    const handleCancel = (id) => {
        setCarpools((prevCarpools) => prevCarpools.filter(carpool => carpool.id !== id));
    };

    return (
        <div className="p-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-green-500 text-white py-2 px-4 rounded">
                Create Carpool
            </button>
            <CarpoolModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} addCarpool={addCarpool} />
            <CarpoolListing carpools={carpools} onCancel={handleCancel} />
        </div>
    );
};

export default AddCarpool;
