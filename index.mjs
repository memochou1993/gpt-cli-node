import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: 'text-davinci-003',
  prompt: '\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI.\nHuman: Hello, who are you?',
  temperature: 0.9,
  max_tokens: 150,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0.6,
  stop: [' Human:', ' AI:'],
});

console.log(response.data.choices);
