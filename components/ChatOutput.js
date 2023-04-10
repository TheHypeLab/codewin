import React from 'react';

const ChatOutput = ({ messages }) => {
  return (
    <div className='space-y-6'>
      {messages.map((message, index) => (
        <div key={index} className='p-3 rounded-lg w-full text-left'>
          <div className={message.isUser ? 'text-blue-500' : 'text-gray-800'}>{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatOutput;