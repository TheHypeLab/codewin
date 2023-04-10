import React, { useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../supabase/initSupabase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
      console.error(error.message);
      setLoading(false);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className='login-container'>
      {/* Add UI elements for the Login component */}
    </div>
  );
};

export default Login;