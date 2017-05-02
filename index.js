'use strict';

const mineflayer = require('mineflayer');

// See .env
// <---
const options = {
  host: process.env.SERVER_HOST,      // Server hostname
  port: process.env.SERVER_PORT,      // Server port
  username: process.env.BOT_USERNAME, // Bot username,
  version: process.env.BOT_VERSION    // Minecraft version
};

// You must specify host & port
if (!options.host || !options.port) {
  console.log('Please, specify SERVER_HOST & SERVER_PORT');
  process.exit(1)
}

// You must specify password if you want join in online-mode servers.
if (process.env.PASSWORD) {
  options.password = process.env.PASSWORD;
}

const bot = mineflayer.createBot(options);

bot.on('login', () => {
  console.log('Bot connected :D');
});

// Print chat messages on Console.
bot.on('message', (message) => {
  console.log(`[CHAT] ${message.toString()}`);
});

// Bot logic here