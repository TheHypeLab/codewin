import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Chat = () => {
  const [message, setMessage] = useState('');
  const router = useRouter();

  const sendMessage = async (event) => {
    event.preventDefault();
    // TODO: Handle sending the message to the chatbot
    setMessage('');
  };

  return (
    <Layout>
      <div className='flex flex-col h-full'>
        <h1 className='text-xl mb-4'>Chat</h1>
        <div className='flex-1 p-4 bg-white rounded-xl shadow-lg'>
          {/* Chat messages go here */}
        </div>
        <form onSubmit={sendMessage} className='mt-4'>
          <input
            type='text'
            placeholder='Type your message here...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full px-4 py-2 rounded-lg shadow-md'
          />
          <button type='submit' className='hidden'>Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default Chat;