import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [role, setRole] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        contactInfo: '',
        address: '',
        governmentId: [],
        proofOfOwnership: [],
        bankDetails: '',
        housingRegistration: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? Array.from(files) : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        localStorage.setItem('role', role);


        alert('Account created successfully. Please log in.');
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md space-y-4">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Sign Up</h2>

                {/* User Role Selection */}
                <label className="block">
                    <span className="text-gray-700">User Role</span>
                    <select
                        name="role"
                        onChange={(e) => setRole(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                    >
                        <option value="">Select role</option>
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                        <option value="Landlord">Landlord</option>
                    </select>
                </label>

                {/* Common Fields */}
                <label className="block">
                    <span className="text-gray-700">Full Name</span>
                    <input
                        type="text"
                        name="fullName"
                        onChange={handleInputChange}
                        value={formData.fullName}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Username</span>
                    <input
                        type="text"
                        name="username"
                        onChange={handleInputChange}
                        value={formData.username}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        value={formData.email}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Password</span>
                    <input
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        value={formData.password}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Contact Information</span>
                    <input
                        type="text"
                        name="contactInfo"
                        onChange={handleInputChange}
                        value={formData.contactInfo}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Address</span>
                    <input
                        type="text"
                        name="address"
                        onChange={handleInputChange}
                        value={formData.address}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                    />
                </label>

                {/* Government-Issued ID - Required for all roles */}
                <label className="block">
                    <span className="text-gray-700">Government-Issued ID (scanned copy of driver’s license, passport)</span>
                    <input
                        type="file"
                        name="governmentId"
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        multiple
                        required
                    />
                    {/* Display selected filenames */}
                    {formData.governmentId.length > 0 && (
                        <div className="mt-1">
                            {formData.governmentId.map((file, index) => (
                                <span key={index} className="block text-gray-500 text-sm">
                                    {file.name}
                                </span>
                            ))}
                        </div>
                    )}
                </label>

                {/* Conditional Fields for Landlord */}
                {role === 'Landlord' && (
                    <>
                        <label className="block">
                            <span className="text-gray-700">Proof of Ownership (property deeds, utility bills)</span>
                            <input type="file" name="proofOfOwnership" onChange={handleInputChange}
                                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" multiple
                                   required/>
                            {/* Display selected filenames */}
                            {formData.proofOfOwnership.length > 0 && (
                                <div className="mt-1">
                                    {formData.proofOfOwnership.map((file, index) => (
                                        <span key={index} className="block text-gray-500 text-sm">
                                            {file.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Housing Registration</span>
                            <input type="file" name="proofOfOwnership" onChange={handleInputChange}
                                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" multiple
                                   required/>
                            {/* Display selected filenames */}
                            {formData.proofOfOwnership.length > 0 && (
                                <div className="mt-1">
                                    {formData.proofOfOwnership.map((file, index) => (
                                        <span key={index} className="block text-gray-500 text-sm">
                                            {file.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Bank Details (Optional)</span>
                            <input type="file" name="proofOfOwnership" onChange={handleInputChange}
                                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" multiple
                                   required/>
                            {/* Display selected filenames */}
                            {formData.proofOfOwnership.length > 0 && (
                                <div className="mt-1">
                                    {formData.proofOfOwnership.map((file, index) => (
                                        <span key={index} className="block text-gray-500 text-sm">
                                            {file.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </label>
                    </>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600"
                >
                    Create New Account
                </button>
            </form>
        </div>
    );
};

export default SignupForm;