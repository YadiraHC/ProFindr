import React, { useState } from 'react';
import { addUser } from '../../services/userService';

const LoginForm: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const user = {
            fullName,
            email,
        };

        try {
            await addUser(user); 
            setSuccess('Account created successfully');
            setError('');
            // Clear form fields after successful registration
            setFullName('');
            setEmail('');
            setPassword('');
            /* setRepeatPassword(''); */
        } catch (err: any) {
            setError(err.message);
            setSuccess('');
        }
    };

    const isFormValid = () => {
        return fullName && password;
    };

    return (
        <div className="bg-white px-[1.6rem] w-full max-w-lg mx-auto mt-12 lg:mt-0" style={{ margin: '3.2rem auto' }}>
            <h2 className="text-4xl font-bold mb-4 text-left">Welcome back!</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-4">Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-4">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full px-4 py-2 rounded-lg text-white ${isFormValid() ? 'bg-[#0A65CC] hover:bg-[#084a9b]' : 'bg-[#0A65CC] bg-opacity-50 cursor-not-allowed'}`}
                    disabled={!isFormValid()}
                >
                    Log In
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {success && <p className="text-green-500 mt-4">{success}</p>}
            </form>
            <p className="text-gray-600 mt-4 text-center lg:text-left">
                Don't have an account? <a href="/register" className="text-[#0A65CC]">Register</a>
            </p>
        </div>
    );
};

export default LoginForm;
