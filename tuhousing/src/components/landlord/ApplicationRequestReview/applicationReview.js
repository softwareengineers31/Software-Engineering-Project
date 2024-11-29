const ApplicationReviewComponent = ({ applications = [], handleApproval, handleRejection }) => {
    const getCounts = () => {
        return applications.reduce(
            (acc, app) => {
                acc[app.status] = (acc[app.status] || 0) + 1;
                return acc;
            },
            { Pending: 0, Approved: 0, Rejected: 0 }
        );
    };

    const counts = getCounts();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Application Review</h1>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-yellow-200 p-4 rounded text-center">
                    <h2 className="font-semibold">Pending</h2>
                    <p className="text-xl">{counts.Pending}</p>
                </div>
                <div className="bg-green-200 p-4 rounded text-center">
                    <h2 className="font-semibold">Approved</h2>
                    <p className="text-xl">{counts.Approved}</p>
                </div>
                <div className="bg-red-200 p-4 rounded text-center">
                    <h2 className="font-semibold">Rejected</h2>
                    <p className="text-xl">{counts.Rejected}</p>
                </div>
            </div>

            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                <tr>
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Contact Info</th>
                    <th className="border border-gray-300 p-2">Student ID</th>
                    <th className="border border-gray-300 p-2">Status</th>
                    <th className="border border-gray-300 p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {applications.map((app, index) => (
                    <tr key={index}>
                        <td className="border border-gray-300 p-2">{app.studentName}</td>
                        <td className="border border-gray-300 p-2">{app.contactInfo}</td>
                        <td className="border border-gray-300 p-2">{app.studentID}</td>
                        <td className="border border-gray-300 p-2">{app.status}</td>
                        <td className="border border-gray-300 p-2">
                            <button
                                onClick={() => handleApproval(index)}
                                className="bg-green-500 text-white rounded-md py-1 px-2 mr-2"
                            >
                                Approve
                            </button>
                            <button
                                onClick={() => handleRejection(index)}
                                className="bg-red-500 text-white rounded-md py-1 px-2"
                            >
                                Reject
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationReviewComponent;
