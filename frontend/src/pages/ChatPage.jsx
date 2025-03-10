import { useState, useEffect } from "react";
import FlowerMenu from "./FlowerMenu"; // Correct import path for FlowerMenu.jsx
import MessageBubble from "./MessageBubble"; // Import the MessageBubble component
import "../Styles/Chat.css"; // Ensure this is the correct path to your CSS
import { Link } from 'react-router-dom';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [activeTab, setActiveTab] = useState(0); // Track active tab index

  const conversations = [
    {
      name: "General Chat",
      messages: ["Hello there!", "How's everyone doing?", "What's up?"]
    },
    {
      name: "Product Inquiry",
      messages: ["I have a question about the roses.", "Do you have bouquets for anniversaries?"]
    },
    {
      name: "Artist Discussion",
      messages: ["Who is your favorite artist?", "I love Van Gogh!", "What do you think about Monet?"]
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedConversations = [...conversations];
      updatedConversations[activeTab].messages.push(newMessage);
      setMessages(updatedConversations[activeTab].messages.reverse()); // Reverse the messages
      setNewMessage("");
    }
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
    setMessages(conversations[index].messages.reverse()); // Reverse the messages for the selected tab
  };

  useEffect(() => {
    setMessages(conversations[activeTab].messages.reverse()); // Load initial reversed messages for the active tab
  }, [activeTab]);

  return (
    <>
      {/* Flower Menu Section */}
      <FlowerMenu />

      <h1 className="chat-header">Chat</h1>
      <p className="chat-subheader">Send and receive messages in this chat.</p>

      {/* Tabbed Chat Interface */}
      <div className="tabs-container">
        {conversations.map((conversation, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabChange(index)}
          >
            {conversation.name}
          </button>
        ))}
      </div>

      {/* Transparent Messages Section */}
      <div className="chat-messages transparent">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message}
            isSent={index % 2 === 0} // Alternate between sent and received
          />
        ))}
      </div>

      {/* Chat Input Section */}
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          className="send-btn"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>

      {/* Link to bouquet page */}
      <div className="text-center mt-8">
        <Link to="/bouquet" className="text-xl text-blue-500 hover:underline">Check our Bouquets</Link>
      </div>
    </>
  );
};

export default ChatPage;
