// src/components/ChatWindow.tsx
import React from 'react';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';

interface ChatWindowProps {
    room: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ room }) => {
    return (
        <div className="flex flex-col h-full">
            {/* Room title */}
            <div className="p-4 border-b border-gray-300 bg-white">
                <h2 className="text-xl font-semibold">{room}</h2>
            </div>

            {/* Chat history */}
            <div className="flex-1 overflow-y-auto">
                <ChatHistory room={room} />
            </div>

            {/* Chat input */}
            <div className="p-4 border-t border-gray-300 bg-white">
                <ChatInput room={room} />
            </div>
        </div>
    );
};

export default ChatWindow;
