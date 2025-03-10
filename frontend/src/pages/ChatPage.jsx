import { useState, useEffect } from "react";
import FlowerMenu from "./FlowerMenu"; // Correct import path
import MessageBubble from "./MessageBubble"; // Correct import for MessageBubble component
import "../App.css"; 


const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Sample conversation object with participant name
  const conversation = {
    name: "General Chat",
    participant: "John Doe", // Name of the person you're chatting with
    messages: ["Hello there!", "How's everyone doing?", "What's up?"]
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage].reverse()); // Add and reverse the messages
      setNewMessage("");
    }
  };

  useEffect(() => {
    setMessages(conversation.messages.reverse()); // Load initial reversed messages
  }, []);

  return (
    <>
      {/* Flower Menu Section */}
      <FlowerMenu />

      {/* Dark Themed Header */}
      <h1 className="chat-header dark-header">Chat with {conversation.participant}</h1> {/* Display participant name */}
      <p className="chat-subheader dark-subheader">Send and receive messages in this chat.</p>

      {/* Dark Themed Messages Section */}
      <div className="chat-messages dark-messages">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message}
            isSent={index % 2 === 0} // Alternate between sent and received
          />
        ))}
      </div>

      {/* Dark Themed Input Section */}
      <div className="chat-input-container dark-input-container">
        <input
          type="text"
          className="chat-input dark-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          className="send-btn dark-send-btn"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default ChatPage;
