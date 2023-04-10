import React, { useState } from "react";
import axios from "axios";
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');

  const submitUserMessage = async (event) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    setChatHistory([...chatHistory, { type: 'user', content: userInput }]);

    try {
      // Retrieve user's OpenAI API key (use your own key or a database lookup)
      const apiKey = 'your_openai_api_key';

      const response = await axios.post(
        `https://api.openai.com/v1/engines/davinci-codex/completions`,
        {
          prompt: userInput,
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const aiReply = response.data.choices[0].text;

      setChatHistory(history => [...history, { type: 'bot', content: aiReply }]);
    } catch (error) {
      console.error('Error retrieving chatbot response:', error);
    }

    setUserInput('');
  };

  return (
    <div className='ChatBot'>
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput userInput={userInput} onInputChange={setUserInput} onSubmit={submitUserMessage} />
    </div>
  );
};

export default ChatBot;
