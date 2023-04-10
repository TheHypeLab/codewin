import { useState } from 'react';
import styles from './ChatInterface.module.css';

export default function ChatInterface({ apiKey }) {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    // Handle sending message to OpenAI and receiving response here
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>Chat with AI</div>
      <div className={styles.messagesContainer}></div>
      <div className={styles.messageInput}></div>
    </div>
  );
}
