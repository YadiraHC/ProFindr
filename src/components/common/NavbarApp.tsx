// src/components/common/NavbarApp.tsx

import React from 'react';

interface NavbarAppProps {
    onMenuClick: () => void;
}

const NavbarApp: React.FC<NavbarAppProps> = ({ onMenuClick }) => {
    return (
        <nav className="bg-white p-4 flex justify-between items-center shadow-md md:hidden">
            <button onClick={onMenuClick} className="text-gray-600">
                <span className="material-icons">menu</span>
            </button>
            
            <img src="./images/user-avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full" />
        </nav>
    );
};

export default NavbarApp;
