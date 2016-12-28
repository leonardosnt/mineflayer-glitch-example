'use strict';

const mineflayer = require('mineflayer');

// See .env
// <---
const options = {
  host: process.env.SERVER_HOST,      // Server hostname
  port: process.env.SERVER_PORT,      // Server port
  username: process.env.BOT_USERNAME  // Bot username
};

// You must specify host & port
if (!options.host || !options.port) {
  console.log('Please, specify SERVER_HOST & SERVER_PORT');
  return;
}

// You must specify password if you want join in online-mode servers.
if (process.env.PASSWORD) {
  options.password = process.env.PASSWORD;
}

let bot = mineflayer.createBot(options);

bot.on('login', () => {
  console.log('Bot connected :D');
});

// Print chat messages on Console.
bot.on('message', (message) => {
  // Parse JSON message
  if (message.json.extra) {
    let parsedMsg = '';
    message.json.extra.forEach(c => {
      if (typeof c === 'string') {
        parsedMsg += c;
      } else {
        parsedMsg += c.text;
      }
    });
    console.log(`[CHAT] ${parsedMsg}`);
  }
});

// Bot logic here