import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { loginUser, getUserProfile } from '../../services/userService';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const credentials = { email, password };

        try {
            const response = await loginUser(credentials); 
            localStorage.setItem('token', response.token);

            setError('');
            
            // Fetch user profile
            const profile = await getUserProfile();
            
            // Redirect based on user type
            if (profile.userType === 'employer') {
                navigate('/home');
            } else if (profile.userType === 'employee') {
                navigate('/find-work');
            }
        } catch (err: any) {
            setError(err.message);
        }
    };

    const isFormValid = () => {
        return email && password;
    };

    return (
        <div className="bg-white px-[1.6rem] w-full max-w-lg mx-auto mt-12 lg:mt-0" style={{ margin: '3.2rem auto' }}>
            <h2 className="text-4xl font-bold mb-4 text-left md:mb-[3.2rem]">Welcome back!</h2>
            <div className="md:hidden flex justify-center mb-6">
                <img src="./images/avatar.png" alt="Profile" className="w-32 h-32" />
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
                    <a href="/forgot-password" className="text-[#0A65CC]">Forgot Password?</a>
                </div>
                <button
                    type="submit"
                    className={`w-full px-4 py-2 rounded-lg text-white ${isFormValid() ? 'bg-[#0A65CC] hover:bg-[#084a9b]' : 'bg-[#0A65CC] bg-opacity-50 cursor-not-allowed'}`}
                    disabled={!isFormValid()}
                >
                    Log In
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
            <p className="text-gray-600 mt-4 text-center lg:text-left">
                Don't have an account? <a href="/register" className="text-[#0A65CC]">Register</a>
            </p>
        </div>
    );
};

export default LoginForm;
