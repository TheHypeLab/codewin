import { useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

function SignOut() {
  const router = useRouter();

  useEffect(() => {
    async function signOut() {
      await supabase.auth.signOut();
      router.push('/signin');
    }
    signOut();
  }, [router]);

  return null;
}

export default SignOut;