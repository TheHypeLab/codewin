import React from 'react';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header>
        <h1>AI Chatbot</h1>
      </header>
      <main>
        <ChatInterface />
      </main>
    </div>
  );
};

export default App;