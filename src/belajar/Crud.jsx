import React, { useState } from 'react';
import '../App.css';
import './Crud.css'


export const Crud = () => {
    const [message, setMessage] = useState([]);

    const handleAddMessage = () => {
        const newMessage = document.getElementById('messageInput').value;
        if (newMessage.length > 0) {
            document.getElementById('messageInput').value = '';
            setMessage([...message, newMessage]);
            const lastMessageIndex = message.length;
            setTimeout(() => {
                const responseMessage = document.getElementById(`responseMessage-${lastMessageIndex}`);
                if (responseMessage) {
                    responseMessage.innerText = 'Hello World';
                }
            }, 1500);
        }
    };

    return (
        <div className="chat-container">
            <h1>Chat App</h1>
            <div className="chat-message">
                <h2>Hello can i help you</h2>
                {message.map((message, index) => (
                    <div key={index}>
                        <p>{message}</p>
                        {/* Use unique IDs for each response message */}
                        <p id={`responseMessage-${index}`}>Sedang mengetik...</p>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input type="text" id='messageInput' />
                <button onClick={handleAddMessage}>✈️</button>
            </div>
        </div>
    );
};

export default Crud;
