import React, { useState, useContext } from 'react';
import { OpenAIApiKeyContext } from '../context/OpenAIApiKeyContext';
import axios from 'axios';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const apiKey = useContext(OpenAIApiKeyContext);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        { prompt: input, max_tokens: 50 },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          }
        }
      );
      setMessages([...messages, { type: 'bot', text: response.data.choices[0].text }]);
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };

  return (
    <div className='chat-interface'>
      {/* Add UI elements for the ChatInterface component */}
    </div>
  );
};

export default ChatInterface;