import React, { useState } from 'react';
import ResponseModal from "../../../Modal Component/ResponseModalForm";


const AdditionalInformationPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Property Request</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Respond to Request
            </button>
            <ResponseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default AdditionalInformationPage;