
import React from 'react';

const PostListingModalForm = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-3xl w-full h-4/5 overflow-y-auto">
                <h2 className="text-lg font-bold mb-4">New Property Listing</h2>
                <form>
                    {/* Property Location */}
                    <h3 className="text-left font-semibold mt-4">Property Location</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">City</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Street</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Zip Code</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>
                    </div>

                    {/* Property Type */}
                    <h3 className="text-left font-semibold mt-4">Property Type</h3>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Property Type</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                            <option>Select</option>
                            <option>Apartment</option>
                            <option>House</option>
                            <option>Shared Accommodation</option>
                        </select>
                    </div>

                    {/* Property Size */}
                    <h3 className="text-left font-semibold mt-4">Property Size</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Square Footage</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Bedrooms</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Bathrooms</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>
                    </div>

                    {/* Amount */}
                    <h3 className="text-left font-semibold mt-4">Amount</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Rent</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Utilities</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Maintenance Fees</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>
                    </div>

                    {/* Lease Terms */}
                    <h3 className="text-left font-semibold mt-4">Lease Terms</h3>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Lease Terms</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                            <option>Select</option>
                            <option>Month-to-month</option>
                            <option>Short-term</option>
                            <option>Long-term</option>
                        </select>
                    </div>

                    {/* Availability */}
                    <h3 className="text-left font-semibold mt-4">Availability</h3>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Availability</label>
                        <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                    </div>

                    {/* Amenities */}
                    <h3 className="text-left font-semibold mt-4">Amenities</h3>
                    <div className="col-span-3">
                        <div className="flex flex-wrap space-x-4">
                            <label>
                                <input type="checkbox" className="mr-1"/>
                                Parking
                            </label>
                            <label>
                                <input type="checkbox" className="mr-1"/>
                                Laundry
                            </label>
                            <label>
                                <input type="checkbox" className="mr-1"/>
                                Internet
                            </label>

                        </div>
                    </div>

                    {/* Images and Videos */}
                    <h3 className="text-left font-semibold mt-4">Images and Videos</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Images</label>
                            <input type="file" multiple accept="image/*"
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Videos</label>
                            <input type="file" multiple accept="video/*"
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md"/>
                        </div>

                    </div>


                    {/* Buttons */}
                    <div className="flex justify-end mt-4 space-x-2">
                        <button type="button" onClick={onClose}
                                className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700">
                            Close
                        </button>
                        <button type="button"
                                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostListingModalForm;