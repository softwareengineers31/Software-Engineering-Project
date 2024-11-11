const StudentDashboard = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold">Student Dashboard</h3>
            <p>Browse available properties and listings.</p>
            <div className="grid grid-cols-1 gap-4">
                {/* Display properties */}
                <div className="border p-4 rounded-md">
                    <h4 className="font-semibold">Property Title</h4>
                    <p>Description of the property</p>
                    <button className="bg-blue-500 text-white p-2 rounded-md">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;