// CONFIGURATION
const token = 'TOKEN_HERE';
const owner = "101435120161927168";
const adminArr = [
    "165571041433878529"
];

// APPLICATION
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('EmojiBot is ready!');
});

bot.on('message', message => {

  if (message.author.bot) return;

  // prepare message for checks, if input is "!cmd arg1 arg2 arg3" it returns: 
    // command["cmd"]
    // args["arg1", "arg2", "arg3"]
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // test command
  if (command == "") {
      //...
  }

});

bot.login(token);
