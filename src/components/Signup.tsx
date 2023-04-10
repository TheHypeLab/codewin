import React, { useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../supabase/initSupabase';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error(error.message);
      setLoading(false);
    } else {
      router.push('/login');
    }
  };

  return (
    <div className='signup-container'>
      {/* Add UI elements for the Signup component */}
    </div>
  );
};

export default Signup;