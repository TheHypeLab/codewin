function ChatMessage({ sender, message }) {
  return (
    <div className={`chat-message ${sender === 'user' ? 'user-message' : 'bot-message'}`}> 
        <p>{message}</p>
    </div>
  );
}

export default ChatMessage;