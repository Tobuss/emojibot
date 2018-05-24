const config = require("./config.json");

const Discord = require("discord.js");
const fs = require('fs');

const bot = new Discord.Client();

// check if json file exists, create if not
if (fs.existsSync("./store.json")) {
    //...
} else {
    //...
}

bot.on('ready', () => {
    console.log('EmojiBot is ready!');
});

bot.on('message', message => {

    if (message.author.bot || !message.content.startsWith(config.prefix)) return;
    
    // prepare message for checks, if input is "!cmd arg1 arg2 arg3" it returns: 
        // command["cmd"]
        // args["arg1", "arg2", "arg3"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    switch (command) {
      case "ping" :
        message.channel.send('Pong!');
        break;
      case "asl" :
        let [age, sex, location] = args;
        message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
        break;
    }

});

bot.login(config.token);
