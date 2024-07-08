import React from 'react';

const ChatPage: React.FC = () => {
    return (
        <div className="flex flex-col w-full md:w-3/4 pl-0 h-full">
            <div className="flex items-center justify-between p-4 bg-gray-100 border-b">
                <div className="flex items-center">
                    <img
                        src="https://i.pravatar.cc/150?img=1"
                        alt="User"
                        className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                        <div className="font-bold">Travis Barker</div>
                        <div className="text-sm text-green-500">Online</div>
                    </div>
                </div>
                <svg
                    className="w-6 h-6 text-gray-400 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                    ></path>
                </svg>
            </div>
            <div className="flex-1 overflow-auto p-4 h-[calc(100vh-200px)] md:h-full">
                <div className="flex justify-center mb-4">
                    <span className="bg-gray-300 text-xs text-gray-800 py-1 px-2 rounded-full">Today</span>
                </div>
                <div className="mb-4">
                    <div className="text-left">
                        <span className="bg-gray-200 p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg inline-block relative">
                            See you at office tomorrow!
                            <span className="text-xs text-gray-500 absolute bottom-0 right-0 mr-2 mb-1">
                                15:42
                            </span>
                        </span>
                    </div>
                    <div className="text-right mt-4">
                        <span className="bg-blue-500 text-white p-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg inline-block relative">
                            Thank you for work, see you!
                            <span className="text-xs text-gray-300 absolute bottom-0 right-0 mr-2 mb-1">
                                15:42
                            </span>
                        </span>
                    </div>
                </div>
                <div className="mb-4 flex items-end">
                    <img
                        src="https://i.pravatar.cc/150?img=1"
                        alt="User"
                        className="w-10 h-10 rounded-full mr-4 mb-1"
                    />
                    <div className="text-left">
                        <span className="bg-gray-200 p-4 rounded-tl-lg rounded-tr-lg rounded-br-lg inline-block relative">
                            Hello! Have you seen my backpack anywhere in office?
                            <span className="text-xs text-gray-500 absolute bottom-0 left-2 ml-2 mb-1">
                                15:42
                            </span>
                        </span>
                    </div>
                </div>
                <div className="text-right mt-4">
                    <span className="bg-blue-500 text-white p-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg inline-block relative">
                        Hi, yes, David have found it, ask our concierge 😊
                        <span className="text-xs text-gray-300 absolute bottom-0 right-0 mr-2 mb-1">
                            15:42
                        </span>
                    </span>
                </div>
            </div>
            <div className="flex border-t p-4">
                <input 
                    type="text" 
                    placeholder="Type your message here..." 
                    className="flex-1 p-2 border rounded-lg"
                />
                <button className="text-blue-500 ml-4">Send message</button>
            </div>
        </div>
    );
};

export default ChatPage;
