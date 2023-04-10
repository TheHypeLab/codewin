import { useState } from 'react';
import { supabase } from '../supabaseClient';

function OpenAIKey() {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = supabase.auth.user();
    await supabase.from('users').upsert({ id: user.id, openai_key: apiKey });
  };

  return (
    <div className='main-container'>
      <h1>Enter your OpenAI API key</h1>
      <form onSubmit={handleSubmit} className='api-key-form'>
        <input
          type='text'
          placeholder='API Key'
          required
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button type='submit'>Save API Key</button>
      </form>
    </div>
  );
}

export default OpenAIKey;