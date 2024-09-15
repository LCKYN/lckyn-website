// frontend/src/components/chat/ChatHistory.tsx
import React, { useEffect, useRef } from 'react';

interface Message {
    id: number;
    user: string;
    text: string;
}

interface ChatHistoryProps {
    room: string;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ room }) => {
    const messages: Message[] = [
        { id: 1, user: 'Alice', text: `Welcome to the ${room} room!` },
        { id: 2, user: 'Bob', text: 'Hi everyone!' },
        // Add more messages or fetch from an API
    ];

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="p-4 space-y-4">
            {messages.map((msg) => (
                <div key={msg.id}>
                    <span className="font-semibold text-blue-400">{msg.user}:</span> {msg.text}
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatHistory;
