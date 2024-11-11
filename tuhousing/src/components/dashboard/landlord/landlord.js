import React, {useState} from "react";
import ModalForm from "../../PostListingModal";

const LandlordDashboard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <h3 className="text-xl font-semibold">Landlord Dashboard</h3>
            <p>Manage your properties and housing registration.</p>
            <div className="space-y-4">
                <button onClick={toggleModal} className="bg-blue-500 text-white p-2 rounded-md"> + Add New Property</button>
                <button className="bg-yellow-500 text-white p-2 rounded-md">View Property Listings</button>
                <button className="bg-green-500 text-white p-2 rounded-md">Manage Housing Registration</button>
            </div>
            {isModalOpen && <ModalForm onClose={toggleModal}/>}
        </div>
    );
};

export default LandlordDashboard;