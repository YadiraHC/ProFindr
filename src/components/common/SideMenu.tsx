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

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await getUserProfile();
                setUserType(profile.userType);
            } catch (error) {
                console.error('Failed to fetch user profile', error);
            }
        };

        fetchUserProfile();
    }, []);

    if (!isOpen) return null;

    return (
        <>
            {userType === 'employer' && <EmployerSideMenu onClose={onClose} />}
            {userType === 'employee' && <EmployeeSideMenu onClose={onClose} />}
        </>
    );
};

export default SideMenu;
