"use client";
import React from "react";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";
import { useChat } from "ai/react";
function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/ai/chat",
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <ChatMessages messages={messages} />
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ChatPage;
