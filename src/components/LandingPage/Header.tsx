import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/userService';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');

    const handleLogout = async () => {
        try {
            await logoutUser();
            localStorage.removeItem('token');
            navigate('/');
        } catch (err: any) {
            console.error(err.message);
        }
    };

    return (
        <header className="bg-white shadow">
            <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="./images/Logo.png" alt="ProFindr Logo" className="h-8 mr-3" />
                    <p className='font-bold text-xl'>ProFindr</p>
                </div>
                <div className="flex items-center">
                    {isAuthenticated ? (
                        <>
                            <button
                                className="flex items-center bg-[#0A65CC] text-white px-4 py-2 rounded-lg mr-2"
                                onClick={() => navigate('/home')}
                            >
                                <span className="material-icons mr-2">home</span>
                                Home
                            </button>
                            <button
                                className="border border-[#0A65CC] text-[#0A65CC] px-4 py-2 rounded-lg mr-2"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
