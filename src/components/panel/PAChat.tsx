import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const PAChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate a bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: `Bot response to: ${input}`,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full max-w-full mx-auto bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            <div
              className={`rounded-lg p-2 ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex p-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PAChat;
