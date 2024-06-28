import React from 'react';
import SideMenu from '../components/common/SideMenu';
import ListChatsPage from '../components/MessagePage/ListChatsPage';
import ChatPage from '../components/MessagePage/ChatPage';

const Messages: React.FC = () => {
    return (
        <div className="flex bg-[#F7F7F8] min-h-screen">
            <div className="hidden md:block w-1/5">
                <SideMenu />
            </div>
            <div className="flex flex-col w-full md:w-4/5">
                <div className="bg-white flex-1 flex">
                    <ListChatsPage />
                    <ChatPage />
                </div>
            </div>
        </div>
    );
};

export default Messages;
