import { useState } from 'react';

function ChatInput({ onSubmit }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className='chat-input'>
      <input
        type='text'
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder='Type your message here...'
        autoComplete='off'
      />
      <button type='submit' disabled={!message.trim()}>
        Send
      </button>
    </form>
  );
}

export default ChatInput;