import { useState, useEffect } from 'react';

function Settings() {
  const [apiKey, setApiKey] = useState('');

  const updateApiKey = async (e) => {
    e.preventDefault();
    // TODO: Save the updated OpenAI API key to the user's account
  };

  useEffect(() => {
    // TODO: Fetch the existing OpenAI API key from the user's account, if any
  }, []);

  return (
    <div className="settings-wrapper">
      <h2>Settings</h2>
      <form onSubmit={updateApiKey} className="settings-form">
        <input
          type="text"
          placeholder="OpenAI API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button type="submit" className="save-apikey-button">Save API Key</button>
      </form>
    </div>
  );
}

export default Settings;