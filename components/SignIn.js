import { useState } from 'react';
import supabase from '../supabaseConfig';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
      <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
      <button type='submit'>Sign In</button>
    </form>
  );
}

export default SignIn;