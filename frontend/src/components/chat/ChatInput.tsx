// src/components/ChatInput.tsx
import React, { useState } from 'react';

interface ChatInputProps {
    room: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ room }) => {
    const [message, setMessage] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() === '') return;

        // Handle sending message (e.g., call an API or update state)
        console.log(`Send message to ${room}:`, message);

        // Clear the input
        setMessage('');
    };

    return (
        <form onSubmit={handleSend} className="flex">
            <input
                type="text"
                className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={`Message #${room}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Send
            </button>
        </form>
    );
};

export default ChatInput;
