# Remote control Telegram Bot
### This is a simple remote control program made for linux that uses the Telegram API for controlling

## Requirements
* [node.js](https://nodejs.org/en)
* [npm](https://www.npmjs.com/)
* [FFmpeg (required for screen recording)](https://www.ffmpeg.org/)

## How to set up
1. Navigate to a folder where you want the project to be stored

2. Clone the repository
```sh
git clone https://github.com/mpineirotroncoso/telegramBot
cd telegramBot/
```
3. Install all required modules
```sh
npm install
```
4. Open the `.env` file and write your bot token. 

[HOW TO GET A TOKEN](https://www.siteguarding.com/en/how-to-get-telegram-bot-api-token)
1. Start your bot
```sh
node index.js
```

## Commands
These commands should be run into a private chat with the bot.

```sh
sh [Command and args] # Execute a command in the host pc
screenshot # Send a screenshot of the screen on the chat
record # Record the screen for a few seconds
```

## :warning: Discharge of responsability
This project is a proof of concept and should not be used to do anything harmful, I'm not responsible for any misuse of this tool.

# Credits
* [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)
* [screenshot-desktop](https://www.npmjs.com/package/screenshot-desktop)
* [record-screen](https://www.npmjs.com/package/record-screen)

This project was made by [me](https://github.com/mpineirotroncoso).