import React, { useState } from "react";
import ContentTop from "../../components/ContentTop/ContentTop";

const messages = [
  {
    id: 1,
    sender: "Alice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate, justo vitae.",
    dateTime: "2024-07-08 10:00",
  },
  {
    id: 2,
    sender: "Bob",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    dateTime: "2024-07-08 11:00",
  },
  {
    id: 3,
    sender: "Charlie",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    dateTime: "2024-07-08 12:00",
  },
];

const MessageComponent = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleClick = (message) => {
    setSelectedMessage(message);
  };

  const handleClose = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="main-content">
      <ContentTop />
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="-bg--clr-primary p-4 rounded shadow-md flex flex-col cursor-pointer"
              onClick={() => handleClick(message)}
            >
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-bold mr-3">
                  {message.sender.charAt(0)}
                </div>
                <div className="flex-1 text-lg font-bold -text--clr-silver">
                  {message.sender}
                </div>
              </div>
              <div className="flex justify-between items-center -text--clr-silver-v1">
                <div className="flex-1">
                  {message.description.length > 50
                    ? `${message.description.substring(0, 50)}...`
                    : message.description}
                </div>
                <div className="text-[10px] ml-2">
                  {message.dateTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedMessage && (
          <div className="fixed inset-0 flex items-center justify-center -bg--clr-secondary bg-opacity-50 z-50">
            <div className="-bg--clr-primary p-6 rounded shadow-md w-11/12 md:w-1/2 lg:w-1/3 relative -text--clr-silver-v1">
              <h2 className="text-2xl font-bold mb-4">
                {selectedMessage.sender}
              </h2>
              <p>{selectedMessage.description}</p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageComponent;
