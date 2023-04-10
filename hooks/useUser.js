import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = supabase.auth.onAuthStateChange(async (_, session) => {
      if (session) {
        const currentUser = session.user;
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return { user, signOut };
};

export default useUser;