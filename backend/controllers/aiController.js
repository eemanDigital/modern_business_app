import { GoogleGenerativeAI } from '@google/generative-ai';

// google ai configuration

const configuration = new GoogleGenerativeAI(process.env.API_KEY);
console.log(configuration);

// model initialization
const modelID = 'gemini-pro';

// controls how gemini generate response (not compulsory)
const generationConfig = {
  stopSequences: ['red'],
  maxOutputTokens: 200,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};

const model = configuration.getGenerativeModel({
  model: modelID,
  generationConfig,
});

/**
 * Generates a response based on the given prompt.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - A promise that resolves when the response is sent.
 */
export const history = [];

export const generateResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    history.push(text);
    console.log(history);

    res.send({ response: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
