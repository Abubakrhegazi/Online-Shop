// Import required modules
const axios = require('axios');
require('dotenv').config();

// Set up Axios instance with default configurations
const apiClient = axios.create({
    baseURL: 'https://api.openai.com/v1', // Example base URL
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Load API key from environment variables
    }
});

// Function to make API request
async function makeApiRequest(data) {
    try {
        const response = await apiClient.post('/engines/davinci-codex/completions', data);
        return response.data;
    } catch (error) {
        console.error('API Request Error:', error);
        throw new Error('Failed to make API request');
    }
}

// Export the function or API client instance for use in other parts of your application
module.exports = {
    makeApiRequest
};
