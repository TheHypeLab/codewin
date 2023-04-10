import { useState, useEffect } from 'react';
import { useSupabase } from '@calvium/supabase-react-hooks';

const useConversations = (userId: string): { loading: boolean, conversations: any[], createConversation: (userId: string, apiKey: string) => void } => {
  // State
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState<any[]>([]);

  // Hooks
  const supabase = useSupabase();

  // Effects
  useEffect(() => {
    if (!userId) return;

    const fetchConversations = async () => {
      const { data, error } = await supabase.from('conversations').select('*').eq('user_id', userId);
      setLoading(false);

      if (error) {
        console.error('Error fetching conversations:', error);
        return;
      }

      setConversations(data || []);
    };

    fetchConversations();
  }, [userId, supabase]);

  // Handlers
  const createConversation = async (userId: string, apiKey: string): Promise<any> => {
    try {
      const response = await supabase.from('conversations').insert({ user_id: userId, apiKey });
      const data = response.data;

      if (data) setConversations([...conversations, data]);

      return data;
    } catch (error) {
      console.error('Error creating conversation:', error);
      return null;
    }
  };

  return { loading, conversations, createConversation };
};

export default useConversations;