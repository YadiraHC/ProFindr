import React, { useState } from 'react';
import { addUser } from '../../services/userService';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };

        try {
            await addUser(user); 
            setSuccess('Account created successfully');
            setError('');
            // Clear form fields after successful registration
            setEmail('');
            setPassword('');
        } catch (err: any) {
            setError(err.message);
            setSuccess('');
        }
    };

    const isFormValid = () => {
        return email && password;
    };

    return (
        <div className="bg-white px-[1.6rem] mt-[1.6rem] w-full max-w-lg mx-auto" >
            <h2 className="text-4xl font-bold mb-4 text-left md:mb-[3.2rem] ">Welcome back!</h2>
            <div className="md:hidden flex justify-center mb-[3.2rem]">
                <img src="./images/avatar.png" alt="Profile" className="w-50 h-50" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-4">Email Address</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
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
                <div className="flex justify-between items-center mb-6">
                    <a href="/reset" className="text-[#0A65CC]">Forgot Password?</a>
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
 