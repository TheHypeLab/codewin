import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { supabase } from '../lib/supabase';

const Settings = () => {
  const router = useRouter();
  const [apiKey, setApiKey] = useState('');

  const handleSaveApiKey = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('settings').insert([{ api_key: apiKey }]);
    if (data) {
      router.push('/');
    } else {
      console.error('Error saving API key:', error.message);
    }
  };

  return (
    <Layout>
      <h1 className='text-xl'>Settings</h1>
      <form onSubmit={handleSaveApiKey}>
        <label htmlFor='api-key' className='block'>API Key:</label>
        <input
          id='api-key'
          className='block'
          type='text'
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button className='bg-blue-900' type='submit'>Save</button>
      </form>
    </Layout>
  );
};

export default Settings;