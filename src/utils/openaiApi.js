import axios from 'axios';

const sendMessageToOpenAi = async (message, apiKey) => {
  const payload = {
    prompt: message,
    max_tokens: 150,
    n: 1,
    stop: null,
    temperature: 0.8
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', payload, { headers });
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error while communicating with the OpenAI API:', error);
    throw error;
  }
};

export default sendMessageToOpenAi;