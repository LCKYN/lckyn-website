// frontend/src/components/chat/ChatRoomList.tsx
import React from 'react';

interface ChatRoomListProps {
    selectedRoom: string;
    setSelectedRoom: (room: string) => void;
}

const ChatRoomList: React.FC<ChatRoomListProps> = ({ selectedRoom, setSelectedRoom }) => {
    const chatRooms = ['General', 'Random', 'Help', 'Development'];

    return (
        <div className="p-4 h-full overflow-y-auto bg-gray-800 text-gray-100">
            <h2 className="text-xl font-semibold mb-4">Chat Rooms</h2>
            <ul>
                {chatRooms.map((room) => (
                    <li key={room} className="mb-2">
                        <button
                            onClick={() => setSelectedRoom(room)}
                            className={`w-full text-left px-2 py-1 rounded ${selectedRoom === room
                                    ? 'bg-gray-700 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                        >
                            {room}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatRoomList;
