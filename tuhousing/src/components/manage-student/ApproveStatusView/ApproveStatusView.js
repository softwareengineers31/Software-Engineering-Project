import React from 'react';


const approvedApplications = [
    {
        id: 1,
        applicantName: 'John Doe',
        applicationDate: '2023-09-01',
        property: 'Cozy Apartment in Downtown',
        status: 'Approved',
        notes: 'Great credit score and references.',
    },
    {
        id: 2,
        applicantName: 'Jane Smith',
        applicationDate: '2023-08-15',
        property: 'Spacious Room Near Campus',
        status: 'Approved',
        notes: 'No issues found during background check.',
    },
    // Add more sample data as needed
];

const ApproveStatusView = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Approved Status Applications</h1>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th className="border border-gray-300 p-2">ID</th>
                    <th className="border border-gray-300 p-2">Applicant Name</th>
                    <th className="border border-gray-300 p-2">Application Date</th>
                    <th className="border border-gray-300 p-2">Property</th>
                    <th className="border border-gray-300 p-2">Status</th>
                    <th className="border border-gray-300 p-2">Notes</th>
                </tr>
                </thead>
                <tbody>
                {approvedApplications.map((application) => (
                    <tr key={application.id} className="border border-gray-300">
                        <td className="border border-gray-300 p-2">{application.id}</td>
                        <td className="border border-gray-300 p-2">{application.applicantName}</td>
                        <td className="border border-gray-300 p-2">{application.applicationDate}</td>
                        <td className="border border-gray-300 p-2">{application.property}</td>
                        <td className="border border-gray-300 p-2">{application.status}</td>
                        <td className="border border-gray-300 p-2">{application.notes}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApproveStatusView;
