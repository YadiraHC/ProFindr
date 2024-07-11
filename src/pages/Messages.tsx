import React, { useState } from 'react';
import SideMenu from '../components/common/SideMenu';
import ListChatsPage from '../components/MessagePage/ListChatsPage';
import ChatPage from '../components/MessagePage/ChatPage';
import NavbarApp from '../components/common/NavbarApp';

const Messages: React.FC = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    return (
        <div className="lg:flex bg-[#F7F7F8] min-h-screen">
            <NavbarApp onMenuClick={() => setIsSideMenuOpen(true)} />
            <div className="hidden md:block fixed">
                <SideMenu />
            </div>
            {isSideMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsSideMenuOpen(false)}></div>
                    <SideMenu />
                </div>
            )}
            <div className="flex-1 p-1 md:ml-64 overflow-auto">
                <div className="flex flex-col md:flex-row w-full h-full">
                    <ListChatsPage />
                    <ChatPage />
                </div>
            </div>
        </div>
    );
};

export default Messages;
