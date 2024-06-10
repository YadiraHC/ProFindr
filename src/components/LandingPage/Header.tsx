import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="./images/Logo.png" alt="ProFindr Logo" className="h-8 mr-3" />
                    {/* <div className="relative">
                        <img src="./images/mexico.png" alt="Mexico" className="inline h-4 mr-1" />
                        <span>Mexico</span>
                        <svg className="inline ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div> */}
                   {/*  <div className="relative ml-4">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
                        </svg>
                        <input type="text" placeholder="Job title, keyword" className="pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    </div> */}
                </div>
                <div className="flex items-center">
                    <button
                        className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg mr-2"
                        onClick={() => navigate('/register')}
                    >
                        Sign Up
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => navigate('/login')}
                    >
                        Log In
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
