import React, { useState, useEffect } from 'react';
import ChatService from '../services/ChatService';

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
        ChatService.connect((message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            ChatService.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (inputMessage) {
            const chatMessage = {
                content: inputMessage,
                sender: 'user', // Replace with actual user data
                type: 'CHAT'
            };
            ChatService.sendMessage(chatMessage);
            setInputMessage('');
        }
    };

    return (
        <div>
            <h2>Chat Room</h2>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg.sender}: {msg.content}</div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Enter your message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatRoom;