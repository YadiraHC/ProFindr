import React, { useState } from 'react';
import { addUser } from '../../services/userService';

const RegisterForm: React.FC = () => {
    const [accountType, setAccountType] = useState<'employee' | 'employer'>('employee');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            setError('Passwords do not match');
            return;
        }

        const now = new Date().toISOString();
        const user = {
            fullName,
            email,
            passwordHash: password,
            userType: accountType,
            createdAt: now,
            updatedAt: now
        };

        try {
            await addUser(user);
            setSuccess('Account created successfully');
            setError('');
            // Clear form fields after successful registration
            setFullName('');
            setEmail('');
            setPassword('');
            setRepeatPassword('');
        } catch (err: any) {
            setError(err.message);
            setSuccess('');
        }
    };

    return (
        <div className="bg-white px-[1.6rem] w-full max-w-lg mx-auto mt-12 lg:mt-0" style={{ margin: '3.2rem auto' }}>
            <h2 className="text-3xl font-bold mb-4 text-left">Create your account with us below</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">You're creating an account as?</label>
                    <div className="flex flex-col md:flex-row justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
                        <button
                            type="button"
                            className={`w-full md:w-auto px-4 py-2 rounded-lg ${accountType === 'employee' ? 'bg-[#0A65CC] text-white' : 'border border-gray-300 text-gray-700'}`}
                            onClick={() => setAccountType('employee')}
                        >
                            As an Employee
                        </button>
                        <button
                            type="button"
                            className={`w-full md:w-auto px-4 py-2 rounded-lg ${accountType === 'employer' ? 'bg-[#0A65CC] text-white' : 'border border-gray-300 text-gray-700'}`}
                            onClick={() => setAccountType('employer')}
                        >
                            As an Employer
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create your password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Repeat Password</label>
                    <input
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        placeholder="Repeat your password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button type="submit" className="w-full bg-[#0A65CC] text-white px-4 py-2 rounded-lg">Create Account</button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {success && <p className="text-green-500 mt-4">{success}</p>}
            </form>
            <p className="text-gray-600 mt-4 text-center lg:text-left">
                Already have an account? <a href="/login" className="text-[#0A65CC]">Login</a>
            </p>
        </div>
    );
};

export default RegisterForm;
