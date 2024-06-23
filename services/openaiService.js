// openaiService.js

const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function openaiRequest(prompt) {
    try {
        const response = await openai.completions.create({
            engine: 'davinci-codex',
            prompt: prompt,
            max_tokens: 150
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('OpenAI Request Error:', error);
        throw new Error('Failed to make request to OpenAI');
    }
}

module.exports = {
    openaiRequest
};
