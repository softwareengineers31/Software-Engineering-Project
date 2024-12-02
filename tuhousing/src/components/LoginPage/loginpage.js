import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (credentials.username && credentials.password) {

            const userRole = localStorage.getItem('role');
            localStorage.setItem('username', credentials.username)

            axios.post('http://localhost:3000/login', credentials)
            .then(res => {
                console.log(res);
                switch (userRole) {
                    case 'Admin':
                        navigate('/admin-dashboard');
                        break;
                    case 'Student':
                        navigate('/student-dashboard');
                        break;
                    case 'Landlord':
                        navigate('/landlord-dashboard');
                        break;
                    default:
                        alert('Unknown role');
                        navigate('/admin-dashboard');
                        break;
                }
            })
            .catch(err => {
                console.log(err);
                alert('Unable to log in!');
            });
        } else {

            alert('Please fill in both username and password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md space-y-4">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>

                {/* Username */}
                <label className="block">
                    <span className="text-gray-700">Username</span>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                    />
                </label>

                {/* Password */}
                <label className="block">
                    <span className="text-gray-700">Password</span>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        required
                    />
                </label>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600"
                >
                    Login
                </button>

                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-blue-500 hover:text-blue-600">
                        Sign Up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;