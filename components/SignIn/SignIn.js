import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      router.push('/chat');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mt-8'>
      <div className='w-full'>
        <label htmlFor='email' className='sr-only'>Email address</label>
        <input id='email' name='email' type='email' autoComplete='email' required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address' className='w-full py-2 px-4 mb-2 border border-gray-300 rounded-md' />
      </div>
      <button type='submit' className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md'>Sign in</button>
    </form>
  );
}