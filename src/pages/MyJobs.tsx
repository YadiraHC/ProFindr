import React, { useState } from 'react';
import SideMenu from '../components/common/SideMenu';
import NavbarApp from '../components/common/NavbarApp';

const MyJobs: React.FC = () => {

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    return (
        <div className="flex flex-col bg-[#F7F7F8] min-h-screen">
            <NavbarApp onMenuClick={() => setIsSideMenuOpen(true)}/>
            <div className="flex flex-1">
                <div className="hidden md:block">
                    <SideMenu isOpen={true} onClose={() => setIsSideMenuOpen(false)} />
                </div>
                <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
                <div className="flex-1 p-4">
                    {/* Próxico codigo :D */}
                </div>
            </div>
        </div>
    );
};

export default MyJobs;
