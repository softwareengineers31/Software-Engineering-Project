import React, { useState } from 'react';

const SearchListing = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);

        // Clear results if input is empty
        if (value === '') {
            setSearchResults([]);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Simulate search results based on the searchInput
        const results = [
            {
                id: 1,
                title: 'Beautiful Apartment',
                location: 'New York',
                propertyType: 'Apartment',
                amenities: ['Parking', 'Internet'],
                price: '$1200/month',
                bedrooms: 2,
                bathrooms: 1,
                moveInDate: '2023-12-01',
                leaseDuration: 'Month-to-Month',
                distanceFromSchool: 1,
            },
            {
                id: 2,
                title: 'Cozy House',
                location: 'San Francisco',
                propertyType: 'House',
                amenities: ['Laundry'],
                price: '$2500/month',
                bedrooms: 3,
                bathrooms: 2,
                moveInDate: '2023-11-15',
                leaseDuration: 'Short-Term',
                distanceFromSchool: 2,
            },
            {
                id: 3,
                title: 'Modern Studio',
                location: 'Los Angeles',
                propertyType: 'Apartment',
                amenities: ['Internet'],
                price: '$1500/month',
                bedrooms: 1,
                bathrooms: 1,
                moveInDate: '2023-11-30',
                leaseDuration: 'Month-to-Month',
                distanceFromSchool: 3,
            },
            // Additional mock results can be added here
        ];

        // Filter results based on searchInput
        const filteredResults = results.filter((result) => {
            const searchTerms = searchInput.toLowerCase().split(' ');
            return searchTerms.every(term =>
                result.title.toLowerCase().includes(term) ||
                result.location.toLowerCase().includes(term) ||
                result.propertyType.toLowerCase().includes(term) ||
                result.amenities.some(amenity => amenity.toLowerCase().includes(term)) ||
                result.price.toLowerCase().includes(term) ||
                result.bedrooms.toString().includes(term) ||
                result.bathrooms.toString().includes(term) ||
                result.moveInDate.includes(term) ||
                result.leaseDuration.toLowerCase().includes(term) ||
                result.distanceFromSchool.toString().includes(term)
            );
        });

        setSearchResults(filteredResults);
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8">
                <form onSubmit={handleSearch} className="flex mb-4">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={handleChange}
                        placeholder="Search by conditions (e.g., New York Apartment Parking)"
                        className="border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:border-blue-500 w-full"
                    />
                    <button
                        className="bg-blue-500 text-white rounded-r-md py-2 px-4 hover:bg-blue-600 transition duration-200">
                        Search
                    </button>
                </form>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {searchResults.map((result) => (
                        <div key={result.id} className="border border-gray-300 rounded-md p-4 h-full">
                            <h3 className="font-bold text-lg">{result.title}</h3>
                            <p><strong>Location:</strong> {result.location}</p>
                            <p><strong>Property Type:</strong> {result.propertyType}</p>
                            <p><strong>Amenities:</strong> {result.amenities.join(', ') || 'None'}</p>
                            <p><strong>Price:</strong> {result.price}</p>
                            <p><strong>Bedrooms:</strong> {result.bedrooms}</p>
                            <p><strong>Bathrooms:</strong> {result.bathrooms}</p>
                            <p><strong>Move-in Date:</strong> {result.moveInDate}</p>
                            <p><strong>Lease Duration:</strong> {result.leaseDuration}</p>
                            <p><strong>Distance from School:</strong> {result.distanceFromSchool} miles</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchListing;
