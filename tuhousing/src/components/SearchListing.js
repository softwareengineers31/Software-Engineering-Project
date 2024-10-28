import React from 'react';

const SearchListing = () => {
    return (
        <div className="flex items-center justify-center p-4">
            <input
                type="text"
                placeholder="Search Location, PropertyType, Amount"
                className="border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:border-blue-500 w-4/5"
            />
            <button className="bg-blue-500 text-white rounded-r-md py-2 px-4 hover:bg-blue-600 transition duration-200">
                Search
            </button>
        </div>
    );
};

export default SearchListing;