import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const chatWindowRef = useRef(null);

  const sendMessage = async () => {
    if (!prompt.trim()) return;

    setMessages((prev) => [...prev, { text: prompt, sender: "user" }]);

    try {
      const response = await fetch("http://127.0.0.1:5001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.response || "No response available.", sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { text: "Error fetching response.", sender: "bot" }]);
    }

    setPrompt("");
  };

  useEffect(() => {
    chatWindowRef.current?.scrollTo({ top: chatWindowRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-background">
      <div className="chat-container">
        {/* Chat Window */}
        <div className="chat-box" ref={chatWindowRef}>
          {messages.length === 0 ? (
            <p className="placeholder-text">🚀 Start a conversation...</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))
          )}
        </div>

        {/* Full-width Fixed Input Box */}
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} disabled={!prompt.trim()}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
