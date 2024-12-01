import React, { useState } from 'react';

function LandlordVerificationModal({ onClose, formData }) {
    const [verificationData, setVerificationData] = useState({
        fullName: '',
        contact: '',
        dob: '',
        idDocument: null,
        ownershipProof: null,
        bankDetails: '',
        address: '',
        housingReg: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVerificationData({ ...verificationData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setVerificationData({ ...verificationData, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('verificationData', JSON.stringify(verificationData));
        onClose();
        alert('Your verification request has been submitted. Please wait for admin approval.');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="w-full max-w-lg p-6 bg-white rounded shadow-lg space-y-4">
                <h3 className="text-xl font-bold">Landlord Background Verification</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={verificationData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded"
                    />
                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact Information"
                        value={verificationData.contact}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded"
                    />
                    <input
                        type="date"
                        name="dob"
                        placeholder="Date of Birth"
                        value={verificationData.dob}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded"
                    />
                    <label className="block">
                        Government-Issued ID
                        <input
                            type="file"
                            name="idDocument"
                            onChange={handleFileChange}
                            required
                            className="mt-2"
                        />
                    </label>
                    <label className="block">
                        Proof of Ownership
                        <input
                            type="file"
                            name="ownershipProof"
                            onChange={handleFileChange}
                            required
                            className="mt-2"
                        />
                    </label>
                    <input
                        type="text"
                        name="bankDetails"
                        placeholder="Bank Details (Optional)"
                        value={verificationData.bankDetails}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded"
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={verificationData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded"
                    />
                    <input
                        type="text"
                        name="housingReg"
                        placeholder="Housing Registration"
                        value={verificationData.housingReg}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border rounded"
                    />
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded">
                        Submit Verification
                    </button>
                </form>
                <button onClick={onClose} className="mt-4 text-indigo-600 underline">
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default LandlordVerificationModal;
