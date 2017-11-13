const Discord = require("discord.js");
const request = require("request");
const bot = new Discord.Client();
const token = 'MzM5MTExNTMzODIzMDAwNTc3.DFf7ww.cCYB6D7pExxX73QPE0FKkXgPeys';

bot.on('ready', () => {
  console.log('emoji-bot.js is ready!');
});

bot.on('message', message => {

  if (message.author.bot) return;

  request.get(
    'https://zeue.eu/api/emojibot.php?msg='+message.content,
    function (error, response, body) 
    {
      if (!error && response.statusCode == 200) {try {message.channel.send(body);} catch(error) {return;};}
    }
  );

});

bot.login(token);
