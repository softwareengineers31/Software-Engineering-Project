import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HouseRegistrationModal = () => {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        contactDetails: '',
        propertyLocation: {
            city: '',
            street: '',
            zipCode: '',
        },
        propertyType: '',
        propertySize: {
            squareFootage: '',
            bedrooms: '',
            bathrooms: '',
        },
        amount: {
            rent: '',
            utilities: '',
            maintenanceFees: '',
        },
        leaseTerms: '',
        availability: '',
        amenities: {
            parking: false,
            laundry: false,
            internet: false,
            utilitiesIncluded: false,
        },
        images: null,
        videos: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name.includes('propertyLocation') || name.includes('propertySize') || name.includes('amount') || name.includes('amenities')) {
            const [mainKey, subKey] = name.split('.');
            setFormData((prevData) => ({
                ...prevData,
                [mainKey]: {
                    ...prevData[mainKey],
                    [subKey]: type === 'checkbox' ? checked : value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        var username = localStorage.getItem('username');
        formData.username = username;
        // API that sends data from UI to create a list
        axios.post('http://localhost:3000/add-listing', formData)
            .then(res => {
                console.log(res);
                navigate('/landlord-dashboard');
                alert('New listing created!');
            })
            .catch(err => {
                console.log(err);
                alert('Unable to create listing!');
            });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">House Registration</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="text"
                        name="contactDetails"
                        placeholder="Contact Details"
                        value={formData.contactDetails}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="text"
                        name="propertyLocation.city"
                        placeholder="City"
                        value={formData.propertyLocation.city}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="text"
                        name="propertyLocation.street"
                        placeholder="Street"
                        value={formData.propertyLocation.street}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="text"
                        name="propertyLocation.zipCode"
                        placeholder="Zip Code"
                        value={formData.propertyLocation.zipCode}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    >
                        <option value="">Select Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Shared Accommodations">Shared Accommodations</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="number"
                        name="propertySize.squareFootage"
                        placeholder="Square Footage"
                        value={formData.propertySize.squareFootage}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="number"
                        name="propertySize.bedrooms"
                        placeholder="Number of Bedrooms"
                        value={formData.propertySize.bedrooms}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="number"
                        name="propertySize.bathrooms"
                        placeholder="Number of Bathrooms"
                        value={formData.propertySize.bathrooms}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="number"
                        name="amount.rent"
                        placeholder="Rent Amount"
                        value={formData.amount.rent}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="number"
                        name="amount.utilities"
                        placeholder="Utilities Amount"
                        value={formData.amount.utilities}
                        onChange={handleChange}
                        className="border rounded p-2"
                    />
                    <input
                        type="number"
                        name="amount.maintenanceFees"
                        placeholder="Maintenance Fees"
                        value={formData.amount.maintenanceFees}
                        onChange={handleChange}
                        className="border rounded p-2"
                    />
                    <select
                        name="leaseTerms"
                        value={formData.leaseTerms}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    >
                        <option value="">Select Lease Terms</option>
                        <option value="month-to-month">Month-to-Month</option>
                        <option value="short-term">Short-Term</option>
                    </select>
                    <input
                        type="text"
                        name="availability"
                        placeholder="Availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="border rounded p-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="amenities.parking"
                            checked={formData.amenities.parking}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Parking
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="amenities.laundry"
                            checked={formData.amenities.laundry}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Laundry
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="amenities.internet"
                            checked={formData.amenities.internet}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Internet
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="amenities.utilitiesIncluded"
                            checked={formData.amenities.utilitiesIncluded}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Utilities Included
                    </label>
                </div>

                <div className="mb-4">
                    <input
                        type="file"
                        name="images"
                        onChange={(e) => setFormData({ ...formData, images: e.target.files })}
                        className="border rounded p-2"
                        multiple
                    />
                    <input
                        type="file"
                        name="videos"
                        onChange={(e) => setFormData({ ...formData, videos: e.target.files })}
                        className="border rounded p-2 mt-2"
                        multiple
                    />
                </div>

                <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">
                    Register House
                </button>
            </form>
        </div>
    );
};

export default HouseRegistrationModal;

