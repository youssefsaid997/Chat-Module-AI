import React from "react";

function ChatMessages({ messages }) {
  console.log(messages);

  return messages.map((m) => (
    <div key={m.id} className="whitespace-pre-wrap">
      {m.role === "user" ? "User: " : "AI: "}
      {m.content}
    </div>
  ));
}

export default ChatMessages;
