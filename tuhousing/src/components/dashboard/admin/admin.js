const AdminDashboard = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold">Admin Dashboard</h3>
            <p>Manage users, properties, and listings.</p>
            <button className="bg-blue-500 text-white p-2 rounded-md">Add New Property</button>
            <button className="bg-red-500 text-white p-2 rounded-md">Remove Property</button>
            <button className="bg-green-500 text-white p-2 rounded-md">Manage Users</button>
        </div>
    );
};

export default AdminDashboard;
