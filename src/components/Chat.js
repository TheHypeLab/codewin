import { useState } from 'react';
import sendMessageToOpenAi from '../utils/openaiApi';

const Chat = ({ apiKey }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { sender: 'user', content: inputMessage }]);
      setInputMessage('');

      try {
        const response = await sendMessageToOpenAi(inputMessage, apiKey);
        setMessages([...messages, { sender: 'assistant', content: inputMessage }, { sender: 'assistant', content: response }]);
      } catch (error) {
        console.error('Error while communicating with the OpenAI API:', error);
      }
    }
  };

  return (
    <div className='chat-container'>
      {/* Chat messages and interface go here */}
    </div>
  );
};

export default Chat;