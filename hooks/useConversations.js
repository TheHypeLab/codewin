import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function useConversations(userId) {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      setLoading(true);
      const fetchData = async () => {
        const { data, error } = await supabase
          .from('conversations')
          .select('*')
          .eq('user_id', userId);
        if (error) {
          console.error('Failed to fetch conversations:', error);
        } else {
          setConversations(data);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [userId]);

  const createConversation = async (userId, apiKey) => {
    const { data, error } = await supabase
      .from('conversations')
      .insert([{ user_id: userId, openai_api_key: apiKey }]);
    if (error) {
      return { error };
    } else {
      setConversations([...conversations, data[0]]);
      return { data: data[0] };
    }
  };

  return { conversations, loading, createConversation };
}