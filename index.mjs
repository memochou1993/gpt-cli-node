import readline from 'readline';
import fs from 'fs';
import {
  chat,
  TITLE_AI,
  TITLE_HUMAN,
} from './api.mjs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const start = (reply, context = reply) => {
  rl.question(`${reply}\n${TITLE_HUMAN}: `, async (content) => {
    if (content) context += `\n${TITLE_HUMAN}: ${content}`;
    const res = await chat({ context });
    context += res.reply;
    fs.writeFile('context.txt', context, () => {});
    start(res.reply, context);
  });
};

start(`${TITLE_AI}: 嗨！我可以怎麼幫助你？`);
