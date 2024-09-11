import React from "react";

function ChatInput({ handleInputChange, handleSubmit, input }) {
  const liveSearch = "search";
  const params = ["search engine"];
  const fileText = "";
  const hanldeChatSubmit = (e) => {
    e.preventDefault();
    handleSubmit(
      e,
      (e,
      {
        body: {
          liveSearch,
          fileText,
          params,
        },
      })
    );
  };
  return (
    <form onSubmit={(e) => hanldeChatSubmit(e)}>
      <input
        className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
        value={input}
        placeholder="Say something..."
        onChange={handleInputChange}
      />
    </form>
  );
}

export default ChatInput;
