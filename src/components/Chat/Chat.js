import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import supabase from '../../supabaseConfig';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase.from('messages').orderBy('created_at', { ascending: true }).select('*');
      if (error) console.error('Error fetching messages:', error);
      else setMessages(data);
    };

    fetchMessages();
  }, []);

  const handleSignOut = () => {
    router.push('/');
  };

  return (
    <div>
      <h2>Chat here!</h2>
      <button onClick={handleSignOut}>Sign Out</button>
      {/* Render the chat UI */}
    </div>
  );
}