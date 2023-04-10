import axios from 'axios';

const OpenAI = (apiKey) => {
  const instance = axios.create({
    baseURL: 'https://api.openai.com/v1/',
    headers: {'Authorization': `Bearer ${apiKey}`}
  });

  const generateResponse = async (message) => {
    try {
      const response = await instance.post('engines/davinci-codex/completions', {
        prompt: `You are an AI chatbot using GPT-3.5. Respond to the target user-input: ${message}`,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 0.5
      });

      if (response.data && response.data.choices && response.data.choices.length > 0) {
        return response.data.choices[0].text.trim();
      } else {
        throw new Error('No response received from OpenAI API');
      }
    } catch (error) {
      console.error(error);
      return '[Error] Failed to generate a response.';
    }
  };

  return {
    generateResponse
  };
};

export default OpenAI;