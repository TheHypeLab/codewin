import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import useUser from '../hooks/useUser';
import useConversations from '../hooks/useConversations';
import Conversation from './Conversation';

export default function Chat() {
  const { user, signOut } = useUser();
  const [apiKey, setApiKey] = useState('');
  const { conversations, loading, createConversation } = useConversations(user ? user.id : null);

  const handleNewConversation = async () => {
    const { data, error } = await createConversation(user.id, apiKey);
    if (error) {
      console.error('Failed to create conversation:', error);
    }
  };

  if (!user) {
    return (
      <div>
        <p>Please sign in to use the chatbot.</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <button onClick={signOut}>Sign out</button>
      </div>
      <div>
        <input
          type='text'
          placeholder='Enter OpenAI API Key'
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
      </div>
      <button onClick={handleNewConversation}>Start a new conversation</button>
      {loading && <div>Loading conversations...</div>}
      <div>
        {conversations.map((conversation) => (
          <Conversation key={conversation.id} data={conversation} />
        ))}
      </div>
    </div>
  );
}