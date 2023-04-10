import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Chatbot from '../components/Chatbot/Chatbot';

export default function Chat() {
  const [apiKey, setApiKey] = useState('');

  const handleApiKeySubmit = (value) => {
    setApiKey(value);
  };

  const handleSignOut = () => {
    setApiKey('');
  };

  return (
    <Layout>
      <div className='bg-white shadow-md p-6 rounded'>
        <Chatbot apiKey={apiKey} onApiKeySubmit={handleApiKeySubmit} onSignOut={handleSignOut} />
      </div>
    </Layout>
  );
}