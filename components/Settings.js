import React, { useState } from 'react';

const Settings = ({ apiKey, setApiKey }) => {
  const [inputValue, setInputValue] = useState(apiKey);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiKey(inputValue);
  };

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-semibold'>Settings</h2>
      <form className='mt-4 space-y-4' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor='apiKey' className='text-xl'>OpenAI API Key</label>
          <input type='text' id='apiKey' value={inputValue} onChange={handleInputChange} className='p-2 border border-gray-300 rounded-md'/>
        </div>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Save</button>
      </form>
    </div>
  );
};

export default Settings;