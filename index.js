const config = require("./config.json");
const responseObject = require("./responses.json")

const Discord = require("discord.js");
const fs = require("fs");

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('EmojiBot is ready!');
});

bot.on('message', message => {

    if (message.author.bot || !message.content.startsWith(config.prefix)) return;
    
    // prepare message for checks, if input is "!cmd arg1 arg2 arg3" it returns: 
        // command["cmd"]
        // args["arg1", "arg2", "arg3"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    switch (command) {
        case "ping":
            message.channel.send('Pong!');
            break;
        case "asl":
            let [age, sex, location] = args;
            message.channel.send(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
            break;
        case "add":
            if (message.author.id === config.owner) {
                let responses = JSON.parse(fs.readFileSync("./responses.json", "utf8"));
                let [trigger, response] = args;
                responses[trigger] = response;
                fs.writeFile("./responses.json", JSON.stringify(responses), (err) => {
                    if (err) console.error(err);
                });
            }
            break;
        case "list":
            let responses = JSON.parse(fs.readFileSync("./responses.json", "utf8"));
            let keys = [];
            for(let k in responses) keys.push(k);
            keys.toString();
            message.channel.send("`"+keys+"`");
            break;
        default:
            if(responseObject[command]) {
                message.channel.send(responseObject[command]);
            }
            break;
    }

});

bot.login(config.token);
