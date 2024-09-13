// src/components/chat/ChatRoomList.tsx
import React from 'react';

interface ChatRoomListProps {
  selectedRoom: string;
  setSelectedRoom: (room: string) => void;
}

const ChatRoomList: React.FC<ChatRoomListProps> = ({ selectedRoom, setSelectedRoom }) => {
  const chatRooms = ['General', 'Random', 'Help', 'Development', 'Design', 'Marketing'];

  return (
    <div className="p-4 h-full overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Chat Rooms</h2>
      <ul>
        {chatRooms.map((room) => (
          <li key={room} className="mb-2">
            <button
              onClick={() => setSelectedRoom(room)}
              className={`w-full text-left px-2 py-1 rounded ${
                selectedRoom === room ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-200'
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
