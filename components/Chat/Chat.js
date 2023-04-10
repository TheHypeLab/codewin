import React, { useState, useRef, useEffect } from 'react';
import useUser from '../../hooks/useUser';

export default function Chat() {
  const [message, setMessage] = useState('');
  const { user, signOut } = useUser();
  const messagesEndRef = useRef(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Send message to OpenAI API
    }
  };

  useEffect(() => {
    if (!user) {
      signOut();
    }
  }, [user, signOut]);

  return (
    <div className='container mx-auto h-full'>
      <button onClick={signOut} className='absolute top-5 right-5 text-red-400'>Sign out</button>
      <div className='chat overflow-scroll flex flex-col space-y-4 p-6'>
        {/* Messages area */}
        <div ref={messagesEndRef}></div>
      </div>
      <form onSubmit={handleSendMessage} className='sticky bottom-0 m-6 flex'>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='w-full p-2 border border-black rounded-md'
          maxLength={200}
          placeholder='Type your message...'
        />
        <button type='submit' className='ml-2 py-2 px-4 text-white bg-blue-600 rounded-md'>Send</button>
      </form>
    </div>
  );
}