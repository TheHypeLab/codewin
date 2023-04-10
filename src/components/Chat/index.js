import React, { useState } from 'react';
import sendMessageToOpenAi from '../../utils/openaiApi';

const Chat = ({ apiKey }) => {
  const [messages, setMessages] = useState([]);
  const [messageToSend, setMessageToSend] = useState('');

  const handleSendMessage = async () => {
    try {
      setMessages([...messages, { text: messageToSend, sender: 'user' }]);
      const response = await sendMessageToOpenAi(messageToSend, apiKey);
      setMessages([...messages, { text: response, sender: 'chatbot' }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([...messages, { text: 'An error occurred while sending your message.', sender: 'chatbot' }]);
    }
    setMessageToSend('');
  };

  return (
    <div>
      {/* Render chat UI */}
    </div>
  );
};

export default Chat;