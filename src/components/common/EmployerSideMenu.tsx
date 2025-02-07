// src/components/common/EmployerSideMenu.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { logoutUser } from '../../services/userService';

const employerMenuItems = [
    { name: 'Home', icon: 'home', path: '/home' },
    { name: 'My Jobs', icon: 'work', path: '/my-jobs' },
    { name: 'My Activity', icon: 'insert_chart', path: '/my-activity' },
    { name: 'Notification', icon: 'mail', path: '/notifications' }
];

interface EmployerSideMenuProps {
    onClose: () => void;
    fullName: string | null;
}

const EmployerSideMenu: React.FC<EmployerSideMenuProps> = ({ onClose, fullName }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const profileDropdownRef = useRef<HTMLDivElement>(null);
    const occupation = localStorage.getItem('occupation') || '';

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
            setIsProfileDropdownOpen(false);
        }
    };

    const handleLogout = async () => {
        try {
            await logoutUser();
            localStorage.removeItem('token');
            localStorage.removeItem('userType');
            localStorage.removeItem('occupation');
            navigate('/login');
        } catch (err: any) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <aside className="fixed top-0 left-0 h-full w-full md:w-64 bg-white px-4 py-8 border-r overflow-y-auto z-50">
            <div className="flex items-center justify-between mb-8 md:hidden">
                <h1 className="text-xl font-bold">Menu</h1>
                <button onClick={onClose} className="text-gray-600">
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="flex items-center mb-8">
                <img src="./images/Logo.png" alt="ProFindr Logo" className="h-10 mr-3" />
                <span className="text-xl font-bold">ProFindr</span>
            </div>
            <nav>
                {employerMenuItems.map((item) => (
                    <div
                        key={item.name}
                        className={`flex items-center p-2 mb-4 rounded cursor-pointer ${
                            location.pathname === item.path ? 'bg-blue-100 text-[#0A65CC]' : 'text-gray-700'
                        }`}
                        onClick={() => navigate(item.path)}
                    >
                        <span className="material-icons mr-3">{item.icon}</span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </nav>
            <div className="mt-[1rem] flex items-center p-4 relative" ref={profileDropdownRef}>
                <img src="./images/user-avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <p className="text-gray-700">{fullName}</p>
                    <p className="text-sm text-gray-500">{occupation}</p>
                </div>
                <button className="material-icons text-gray-600 ml-auto" onClick={toggleProfileDropdown}>more_vert</button>
                {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                        <button className="block px-4 py-2 text-left w-full" onClick={() => navigate('/my-profile')}>View Account</button>
                        <button className="block px-4 py-2 text-left w-full text-red-500" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default EmployerSideMenu;
