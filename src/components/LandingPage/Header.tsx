import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="./images/Logo.png" alt="ProFindr Logo" className="h-8 mr-3" />
                    <p className='font-bold text-xl'>ProFindr</p>
                </div>
                <div className="flex items-center">
                    <button
                        className="border border-[#0A65CC] text-[#0A65CC] px-4 py-2 rounded-lg mr-2"
                        onClick={() => navigate('/register')}
                    >
                        Sign Up
                    </button>
                    <button
                        className="bg-[#0A65CC] text-white px-4 py-2 rounded-lg"
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
