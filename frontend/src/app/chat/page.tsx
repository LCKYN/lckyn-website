// frontend/src/app/chat/page.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import ChatRoomList from '../../components/chat/ChatRoomList';
import ChatWindow from '../../components/chat/ChatWindow';

const ChatPage = () => {
    const [selectedRoom, setSelectedRoom] = useState<string>('General');
    const [roomListWidth, setRoomListWidth] = useState<number>(250);
    const isResizing = useRef<boolean>(false);

    const handleMouseDown = () => {
        isResizing.current = true;
        document.body.style.cursor = 'col-resize'; // Change cursor during resize
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isResizing.current) return;
        const newWidth = e.clientX;
        if (newWidth < 150) return; // Set minimum width
        if (newWidth > 500) return; // Set maximum width
        setRoomListWidth(newWidth);
    };

    const handleMouseUp = () => {
        if (isResizing.current) {
            isResizing.current = false;
            document.body.style.cursor = 'default'; // Reset cursor
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className="flex h-screen bg-gray-900 text-gray-100">
            {/* Left-hand side chat room list */}
            <div
                className="border-r border-gray-700"
                style={{ width: roomListWidth }}
            >
                <ChatRoomList selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} />
            </div>

            {/* Divider for resizing */}
            <div
                className="w-1 bg-gray-700 cursor-col-resize"
                onMouseDown={handleMouseDown}
            ></div>

            {/* Middle section with chat history and input */}
            <div className="flex-1 flex flex-col">
                <ChatWindow room={selectedRoom} />
            </div>
        </div>
    );
};

export default ChatPage;
