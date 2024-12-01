import React from 'react';

const ViewHouseRejectionStatus = ({ application, onClose }) => {
    if (!application) {
        return <div className="text-red-500">No application data available.</div>;
    }

    const handleFileUpload = (e) => {
        const files = e.target.files;
        console.log(files); // You can handle file upload here (e.g., sending to a server)
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">House Application Rejection Status</h2>
            <div className="mb-4">
                <h3 className="font-semibold">Applicant Details</h3>
                <p><strong>Name:</strong> {application.name}</p>
                <p><strong>Contact Details:</strong> {application.contactDetails}</p>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">Property Details</h3>
                <p><strong>Location:</strong> {application.propertyLocation.street}, {application.propertyLocation.city}, {application.propertyLocation.zipCode}</p>
                <p><strong>Type:</strong> {application.propertyType}</p>
                <p><strong>Size:</strong> {application.propertySize.squareFootage} sq ft, {application.propertySize.bedrooms} Bedrooms, {application.propertySize.bathrooms} Bathrooms</p>
                <p><strong>Rent:</strong> ${application.amount.rent}</p>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">Rejection Reasons</h3>
                <ul className="list-disc list-inside mb-2">
                    {application.rejectionReasons.map((reason, index) => (
                        <li key={index}>{reason}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">Request More Details</h3>
                <textarea
                    rows="4"
                    placeholder="Enter your request for more details here..."
                    className="w-full border rounded p-2"
                />
            </div>

            <div className="mb-4">
                <h3 className="font-semibold">Upload Supporting Documents</h3>
                <input
                    type="file"
                    onChange={handleFileUpload}
                    className="border rounded p-2 w-full"
                    multiple
                />
            </div>

            <div className="flex justify-between">
                <button className="bg-blue-500 text-white rounded p-2">
                    Send Request
                </button>
                <button
                    onClick={onClose}
                    className="bg-gray-500 text-white rounded p-2"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ViewHouseRejectionStatus;
