import React, { useState } from 'react';
import LeasingRequestModal from "../../../ModalComponents/LeasingRequestModal";


const LeasingApplicationRequest = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="p-4">
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
            <LeasingRequestModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default LeasingApplicationRequest;