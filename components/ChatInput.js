import React from 'react';

const ChatInput = ({ onMessageSend }) => {
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onMessageSend(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center space-x-4'>
      <textarea
        className='w-full p-3 rounded-lg resize-none'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type your message here...'
      />
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'>
        Send
      </button>
    </form>
  );
};

export default ChatInput;