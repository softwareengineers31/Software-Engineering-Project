import React, { useState } from 'react';
import HouseRegistrationModal from "../../../../../ModalComponents/AddListingModalForm";


const AddListing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="App">
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-500 text-white px-4 py-2 rounded"
            >
                Register House
            </button>
            {isModalOpen && <HouseRegistrationModal />}
        </div>
    );
};

export default AddListing;