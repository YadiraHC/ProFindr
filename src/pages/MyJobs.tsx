import React from 'react';
import SideMenu from '../components/common/SideMenu';

const MyJobs: React.FC = () => {
    return (
        <div className="flex bg-[#F7F7F8]">
            <div className="hidden md:block">
                <SideMenu />
            </div>
            
        </div>
    );
};

export default MyJobs;
