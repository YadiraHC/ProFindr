// src/common/SideMenu.tsx

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
    { name: 'Home', icon: 'home', path: '/home' },
    { name: 'Find Work', icon: 'search', path: '/find-work' },
    { name: 'My Jobs', icon: 'work', path: '/my-jobs' },
    { name: 'My Activity', icon: 'insert_chart', path: '/my-activity' },
    { name: 'Messages', icon: 'sms', path: '/messages' },
    { name: 'Notification', icon: 'mail', path: '/notifications' }
];

const SideMenu: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside className="bg-gray-50 w-64 h-screen px-4 py-8 border-r">
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
            <div className="mt-auto flex items-center p-4">
                <img src="./images/user-avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <p className="text-gray-700">Alexis Wolen</p>
                    <p className="text-sm text-gray-500">Maintenance</p>
                </div>
            </div>
        </aside>
    );
};

export default SideMenu;
