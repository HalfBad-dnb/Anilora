// src/pages/ChatComponent.jsx
import { useState, useEffect } from 'react';
import WebSocketService from '../WebSocketService'; // Import WebSocketService

function ChatComponent() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [sender, setSender] = useState('Anonymous'); // Default sender name
  
    useEffect(() => {
      // Connect to WebSocket server and subscribe to /topic/messages
      WebSocketService.connect();
  
      WebSocketService.subscribe('/topic/messages', (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]); // Append new messages
      });
  
      // Cleanup WebSocket connection when the component unmounts
      return () => {
        WebSocketService.disconnect();
      };
    }, []);
  
    const handleSendMessage = () => {
      if (message.trim()) {
        // Create the ChatMessage object
        const chatMessage = { sender, content: message };
        WebSocketService.sendMessage('/app/send', chatMessage); // Send the message to /app/send
        setMessage(''); // Clear the input after sending
      }
    };
  
    return (
      <div className="chat-container">
        <h1>Chat</h1>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <strong>{msg.sender}: </strong>{msg.content}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="Enter your name"
          className="sender-input"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="chat-input"
        />
        <button onClick={handleSendMessage} className="send-button">Send</button>
      </div>
    );
  }

export default ChatComponent;
