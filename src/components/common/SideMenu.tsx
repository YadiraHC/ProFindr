// src/components/common/SideMenu.tsx

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
    { name: 'Home', icon: 'home', path: '/home' },
    { name: 'Find Work', icon: 'search', path: '/find-work' },
    { name: 'My Jobs', icon: 'work', path: '/my-jobs' },
    { name: 'My Activity', icon: 'insert_chart', path: '/my-activity' },
    { name: 'Messages', icon: 'sms', path: '/messages' },
    { name: 'Notification', icon: 'mail', path: '/notifications' }
];

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const profileDropdownRef = useRef<HTMLDivElement>(null);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
            setIsProfileDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <aside className={`fixed top-0 left-0 h-full w-full md:w-64 bg-white px-4 py-8 border-r overflow-y-auto z-50 transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}>
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
                {menuItems.map((item) => (
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
                    <p className="text-gray-700">Alexis Wolen</p>
                    <p className="text-sm text-gray-500">Maintenance</p>
                </div>
                <button className="material-icons text-gray-600 ml-auto" onClick={toggleProfileDropdown}>more_vert</button>
                {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                        <button className="block px-4 py-2 text-left w-full" onClick={() => navigate('/my-profile')}>View Account</button>
                        <button className="block px-4 py-2 text-left w-full text-red-500" onClick={() => console.log('Logging out...')}>Logout</button>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default SideMenu;
