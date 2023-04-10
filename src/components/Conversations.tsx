import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import useConversations from '../hooks/useConversations';

const Conversations = () => {
  const { userId, apiKey } = useContext(UserContext);
  const { conversations, loading, createConversation } = useConversations(userId || '');

  const handleCreateConversation = () => {
    if (userId && apiKey) {
      createConversation(userId, apiKey);
    }
  };

  return (
  <div className='conversations'>
      <h2>Conversations</h2>
      {loading ? (
          <p>Loading...</p>
      ) : (
          <ul>
          {conversations.map((conversation, index) => (
              <li key={index}>{conversation.id}</li>
          ))}
          </ul>
      )}
      <button onClick={handleCreateConversation}>New Conversation</button>
  </div>
  );
};

export default Conversations;