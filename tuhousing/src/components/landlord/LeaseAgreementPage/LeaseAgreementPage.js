import React, { useState } from 'react';
import LeaseAgreementModal from "../../../ModalComponents/LeaseAggrementModalForm";


const LeaseAgreementPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Lease Agreement Generator</h1>
            <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Open Lease Agreement Form
            </button>

            <LeaseAgreementModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default LeaseAgreementPage;