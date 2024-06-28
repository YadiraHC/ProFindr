import React from 'react';

const messagesData = [
  { id: 1, name: 'John Doe', message: 'How are you doing?', time: '16:45', typing: false },
  { id: 2, name: 'Travis Barker', message: '...is typing', time: '16:45', typing: true },
  { id: 3, name: 'Kate Rose', message: 'See you tomorrow!', time: '16:45', typing: false },
  { id: 4, name: 'Robert Parker', message: 'Awesome!', time: '16:45', typing: false },
  { id: 5, name: 'Rick Owens', message: 'Good idea 😎', time: '16:45', typing: false },
  { id: 6, name: 'George Orwell', message: 'Literally 1984 😄', time: '16:45', typing: false },
  { id: 7, name: 'Franz Kafka', message: 'Are you interested in insects?', time: '16:45', typing: false },
  { id: 8, name: 'Tom Hardy', message: 'Smells like design spirit...', time: '16:45', typing: false },
  { id: 9, name: 'Vivienne Westwood', message: 'This cat is so funny 😺', time: '16:45', typing: false },
  { id: 10, name: 'Anthony Paul', message: 'Check out my page 📃', time: '16:45', typing: false },
  { id: 11, name: 'Stan Smith', message: 'Want to see this kick in?', time: '16:45', typing: false },
];

const ListChatsPage: React.FC = () => {
    return (
        <div className="flex flex-col w-full md:w-1/4 border-r pr-4">
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Messages</h2>
                <div className="relative mb-4">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="p-2 w-full border rounded-lg pl-10"
                    />
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35m1.1-4.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                        ></path>
                    </svg>
                </div>
                <div className="text-sm mb-2">
                    Sort by
                    <select className="ml-2 font-semibold text-blue-500 cursor-pointer">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
            <ul className="overflow-auto h-[calc(100vh-180px)]">
                {messagesData.map(user => (
                    <li key={user.id} className="flex items-center p-2 border-b cursor-pointer hover:bg-gray-100">
                        <img src={`https://i.pravatar.cc/150?u=${user.id}`} alt={user.name} className="w-10 h-10 rounded-full mr-4" />
                        <div className="flex flex-col flex-1">
                            <div className="flex justify-between">
                                <span className="font-semibold">{user.name}</span>
                                <span className="text-sm text-gray-500">{user.time}</span>
                            </div>
                            <div className={`text-sm ${user.typing ? 'text-green-500' : 'text-gray-700'}`}>
                                {user.message}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListChatsPage;
