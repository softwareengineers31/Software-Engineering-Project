import React, { useState } from "react";

const students = [
    {
        id: 1,
        name: "Lukeman S Kamara",
        age: 22,
        lifestyle: ["Early Riser", "Introverted"],
        habits: ["Vegetarian", "Early Sleeper", "Remote Work", "Quiet"],
        contactInfo: { email: "alice@example.com", phone: "123-456-7890" },
        hasLeasedProperty: false,
    },
    {
        id: 2,
        name: "Isatu Magdalene Kamara",
        age: 25,
        lifestyle: ["Night Owl", "Very Social"],
        habits: ["Non-Vegetarian", "Late Sleeper", "Office Work", "Party"],
        contactInfo: { email: "bob@example.com", phone: "987-654-3210" },
        hasLeasedProperty: true,
    },
    {
        id: 3,
        name: "Abdulai Brato Kamara",
        age: 23,
        lifestyle: ["Early Riser", "Very Social"],
        habits: ["Vegetarian", "Early Sleeper", "Office Work", "Outgoing"],
        contactInfo: { email: "charlie@example.com", phone: "555-555-5555" },
        hasLeasedProperty: false,
    },
    {
        id: 4,
        name: "Daniel S Samura",
        age: 21,
        lifestyle: ["Night Owl", "Introverted"],
        habits: ["Non-Vegetarian", "Late Sleeper", "Remote Work", "Quiet"],
        contactInfo: { email: "dana@example.com", phone: "444-444-4444" },
        hasLeasedProperty: true,
    },
];

const RoommateMatchingPage: React.FC = () => {
    const [filters, setFilters] = useState({
        name: "",
        lifestyle: "",
        age: "",
        habits: "",
        hasLeasedProperty: false,
    });
    const [filteredStudents, setFilteredStudents] = useState(students);
    const [recommendations, setRecommendations] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showRecommendations, setShowRecommendations] = useState(false); // New state for showing recommendations

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFilters({ ...filters, [name]: checked });
    };

    const applyFilters = () => {
        const results = students.filter((student) => {
            const matchesName = filters.name === "" || student.name.toLowerCase().includes(filters.name.toLowerCase());
            const matchesLifestyle =
                filters.lifestyle === "" || student.lifestyle.includes(filters.lifestyle);
            const matchesAge =
                filters.age === "" || student.age === parseInt(filters.age);
            const matchesHabits =
                filters.habits === "" || student.habits.includes(filters.habits);
            const matchesLeasedProperty =
                !filters.hasLeasedProperty || student.hasLeasedProperty === filters.hasLeasedProperty;

            return (
                matchesName &&
                matchesLifestyle &&
                matchesAge &&
                matchesHabits &&
                matchesLeasedProperty
            );
        });
        setFilteredStudents(results);
    };

    const recommendRoommates = (currentStudentId: number) => {
        const currentStudent = students.find((student) => student.id === currentStudentId);

        if (!currentStudent) return;

        const recommendations = students
            .filter((student) => student.id !== currentStudentId)
            .map((student) => {
                const sharedPreferences = student.lifestyle.filter((lifestyle) =>
                    currentStudent.lifestyle.includes(lifestyle)
                );
                const score = sharedPreferences.length;
                return { ...student, score };
            })
            .sort((a, b) => b.score - a.score);

        setRecommendations(recommendations);
        setShowRecommendations(true); // Show recommendations when button is clicked
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Roommate Matching System</h1>

            {/* Filters Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Filters</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={filters.name}
                        onChange={handleFilterChange}
                        className="border rounded p-2 w-full"
                    />
                    <select
                        name="lifestyle"
                        value={filters.lifestyle}
                        onChange={handleFilterChange}
                        className="border rounded p-2 w-full"
                    >
                        <option value="">Select Lifestyle</option>
                        <option value="Early Riser">Early Riser</option>
                        <option value="Night Owl">Night Owl</option>
                        <option value="Very Social">Very Social</option>
                        <option value="Introverted">Introverted</option>
                    </select>
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={filters.age}
                        onChange={handleFilterChange}
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <select
                        name="habits"
                        value={filters.habits}
                        onChange={handleFilterChange}
                        className="border rounded p-2 w-full"
                    >
                        <option value="">Select Habits</option>
                        <option value="Eating">Eating</option>
                        <option value="Sleeping">Sleeping</option>
                        <option value="Working">Working</option>
                        <option value="Social">Social</option>
                    </select>
                    <label className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            name="hasLeasedProperty"
                            checked={filters.hasLeasedProperty}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        Already have property leased
                    </label>
                </div>
                <button
                    onClick={applyFilters}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Apply Filters
                </button>
            </div>

            {/* Results Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                        <div key={student.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="font-bold text-lg">{student.name}</h3>
                            <p>Age: {student.age}</p>
                            <p>Lifestyle: {student.lifestyle.join(", ")}</p>
                            <button
                                onClick={() => recommendRoommates(student.id)}
                                className="text-blue-500 hover:underline mt-2 block"
                            >
                                View Recommendations
                            </button>
                            <button
                                onClick={() => setSelectedStudent(student)}
                                className="text-green-500 hover:underline mt-2 block"
                            >
                                View Profile
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No matches found.</p>
                )}
            </div>

            {/* Recommendations Section */}
            {showRecommendations && recommendations.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {recommendations.map((rec) => (
                            <div key={rec.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="font-bold text-lg">{rec.name}</h3>
                                <p>Age: {rec.age}</p>
                                <p>Lifestyle: {rec.lifestyle.join(", ")}</p>
                                <p>Compatibility Score: {rec.score}</p>
                                <button
                                    onClick={() => setSelectedStudent(rec)}
                                    className="text-green-500 hover:underline mt-2 block"
                                >
                                    View Profile
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Profile Modal */}
            {selectedStudent && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-xl font-semibold">{selectedStudent.name}</h2>
                        <p>Age: {selectedStudent.age}</p>
                        <p>Lifestyle: {selectedStudent.lifestyle.join(", ")}</p>
                        <p>Contact: {selectedStudent.contactInfo.email}</p>
                        <button
                            onClick={() => setSelectedStudent(null)}
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoommateMatchingPage;