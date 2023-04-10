import { useState } from 'react';
import { useUser } from '../hooks/useUser';
import useConversations from '../hooks/useConversations';
import Conversation from './Conversation';

export default function Conversations() {
  const { user } = useUser();
  const { conversations, loading, createConversation } = useConversations(user?.id);
  const [apiKey, setApiKey] = useState('');

  const handleApiKeySubmit = async () => {
    if (apiKey.trim() !== '') {
      const { data, error } = await createConversation(user.id, apiKey);
      if (error) {
        console.error('Failed to create conversation', error);
      } else {
        console.log('Created conversation', data);
      }
      setApiKey('');
    }
  };

  return (
    <div>
      <h1 className='text-2xl mb-4'>Conversations</h1>
      {loading ? <div>Loading...</div> : (
        <div className='grid gap-4'>
          {conversations.map((conversation) => (
            <Conversation key={conversation.id} conversation={conversation} />
          ))}
        </div>
      )}
      <div className='mt-6'>
        <input
          type='text'
          className='border rounded w-full px-3 py-2'
          value={apiKey}
          placeholder='Enter your OpenAI API Key'
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button onClick={handleApiKeySubmit} className='mt-2'>Create Conversation</button>
      </div>
    </div>
  );
}