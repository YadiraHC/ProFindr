// src/components/common/SideMenu.tsx
import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../../services/userService';
import EmployerSideMenu from './EmployerSideMenu';
import EmployeeSideMenu from './EmployeeSideMenu';

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
    const [userType, setUserType] = useState<string | null>(null);
    const [fullName, setFullName] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await getUserProfile();
                setUserType(profile.userType);
                setFullName(profile.fullName);
                console.log("Info ", profile);
            } catch (error) {
                console.error('Failed to fetch user profile', error);
            }
        };

        fetchUserProfile();
    }, []);

    if (!isOpen) return null;

    return (
        <>
            {userType === 'employer' && <EmployerSideMenu onClose={onClose} fullName={fullName} />}
            {userType === 'employee' && <EmployeeSideMenu onClose={onClose} fullName={fullName} />}
        </>
    );
};

export default SideMenu;
