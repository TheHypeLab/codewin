import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../supabase/initSupabase';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (!error) {
      router.push('/');
    } else {
      setError(error.message || 'Unable to register.');
    }
  };

  return (
    <div className='main-container'>
      <h1>Register for Chatbot</h1>
      <form onSubmit={handleSubmit} className='register-form'>
        <input
          type='email'
          placeholder='Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;