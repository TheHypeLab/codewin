function ChatMessages({ messages }) {
  return (
    <div className='chat-messages'>
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}> 
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;