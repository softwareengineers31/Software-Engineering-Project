import React, { useState } from 'react';

const ResponseModal = ({ isOpen, onClose }) => {
    const [subject, setSubject] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ subject, responseMessage, file });
        onClose(); // Close modal after submission
    };

    if (!isOpen) return null; // Don't render if modal is closed

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-xl font-semibold mb-4">Response to Request</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Subject</label>
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="border rounded-lg w-full p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Response Message</label>
                        <textarea
                            value={responseMessage}
                            onChange={(e) => setResponseMessage(e.target.value)}
                            className="border rounded-lg w-full p-2 h-32"
                            required
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="block text-sm font-medium mb-1 mr-2">Upload:</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="border rounded-lg p-2"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="border rounded-lg text-gray-700 hover:bg-gray-200 p-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResponseModal;
