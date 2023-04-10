import axios from 'axios';

const sendMessageToOpenAi = async (inputMessage, apiKey) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: `user: ${inputMessage}\nassistant:`,
        n: 1,
        stop: '\n',
        max_tokens: 50
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );

    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].text.trim();
    } else {
      throw new Error('Failed to get a response from OpenAI API.');
    }
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw error;
  }
};

export default sendMessageToOpenAi;