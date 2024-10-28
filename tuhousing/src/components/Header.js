import React, { useState } from 'react';
import ModalForm from "./PostListingModal";


const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            {/* Left Logo and Text */}
            <div className="flex items-center space-x-2">
                <img src='/public/logo.png' alt="Logo" className="h-10 w-10 rounded-full border border-gray-400"/>
                <span className="text-gray-800 font-semibold text-xl">TUSH Web Portal</span>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-400 text-gray-800 rounded-md hover:bg-gray-200 transition">
                    Sign In
                </button>
                <button className="px-4 py-2 border border-gray-400 text-gray-800 rounded-md hover:bg-gray-200 transition">
                    Sign Up
                </button>
                <button
                    onClick={toggleModal}
                    className="px-4 py-2 border border-gray-400 text-gray-800 rounded-md hover:bg-gray-200 transition"
                >
                    + Add New Listing
                </button>
            </div>

            {/* Modal Form */}
            {isModalOpen && <ModalForm onClose={toggleModal} />}
        </header>
    );
};

export default Header;