import React, { useState } from 'react';

const ManageProperty = () => {
    const [properties, setProperties] = useState([
        {
            title: 'Cozy Apartment in Downtown',
            location: 'Downtown City',
            price: '$1200/month',
            description: 'A cozy apartment located in the heart of the city.',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Spacious Room Near Campus',
            location: 'Near Campus',
            price: '$800/month',
            description: 'Spacious room available for rent near the university campus.',
            image: 'https://via.placeholder.com/150',
        },
    ]);

    const [editingIndex, setEditingIndex] = useState(null);
    const [editedProperty, setEditedProperty] = useState({});

    const openEditModal = (index) => {
        setEditingIndex(index);
        setEditedProperty(properties[index]);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedProperty({ ...editedProperty, [name]: value });
    };

    const saveEdit = () => {
        const updatedProperties = properties.map((item, i) => (i === editingIndex ? editedProperty : item));
        setProperties(updatedProperties);
        setEditingIndex(null);
    };

    const handleDeleteProperty = (index) => {
        const updatedProperties = properties.filter((_, i) => i !== index);
        setProperties(updatedProperties);
    };

    const closeEditModal = () => {
        setEditingIndex(null);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Property</h1>

            <h2 className="text-xl font-semibold mb-2">Property List</h2>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th className="border border-gray-300 p-2">Image</th>
                    <th className="border border-gray-300 p-2">Title</th>
                    <th className="border border-gray-300 p-2">Location</th>
                    <th className="border border-gray-300 p-2">Price</th>
                    <th className="border border-gray-300 p-2">Description</th>
                    <th className="border border-gray-300 p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {properties.map((item, index) => (
                    <tr key={index} className="border border-gray-300">
                        <td className="border border-gray-300 p-2">
                            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                        </td>
                        <td className="border border-gray-300 p-2">{item.title}</td>
                        <td className="border border-gray-300 p-2">{item.location}</td>
                        <td className="border border-gray-300 p-2">{item.price}</td>
                        <td className="border border-gray-300 p-2">{item.description}</td>
                        <td className="border border-gray-300 p-2">
                            <button onClick={() => openEditModal(index)} className="bg-yellow-500 text-white p-1 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => handleDeleteProperty(index)} className="bg-red-500 text-white p-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {editingIndex !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
                        <h2 className="text-xl font-semibold mb-4">Edit Property</h2>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="title"
                                placeholder="Property Title"
                                value={editedProperty.title}
                                onChange={handleEditChange}
                                className="border-b border-gray-400 w-full mb-2"
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={editedProperty.location}
                                onChange={handleEditChange}
                                className="border-b border-gray-400 w-full mb-2"
                            />
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                value={editedProperty.price}
                                onChange={handleEditChange}
                                className="border-b border-gray-400 w-full mb-2"
                            />
                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                value={editedProperty.image}
                                onChange={handleEditChange}
                                className="border-b border-gray-400 w-full mb-2"
                            />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={editedProperty.description}
                                onChange={handleEditChange}
                                className="border-b border-gray-400 w-full mb-2"
                                rows="2"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button onClick={saveEdit} className="bg-green-500 text-white p-2 rounded mr-2">
                                Save
                            </button>
                            <button onClick={closeEditModal} className="bg-red-500 text-white p-2 rounded">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProperty;
