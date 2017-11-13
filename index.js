const Discord = require("discord.js");
var mysql = require("mysql");
const bot = new Discord.Client();

const token = 'MzM5MTExNTMzODIzMDAwNTc3.DFf7ww.cCYB6D7pExxX73QPE0FKkXgPeys';

var con = mysql.createConnection({
  host: "mysql.stackcp.com",
  port: "49266",
  user: "emojibot-primary-31366625",
  password: "f53497dn8j",
  database: "emojibot-primary-31366625"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

bot.on('ready', () => {
  console.log('emoji-bot.js is ready!');
});

bot.on('message', message => {

  if (message.author.bot) return;

  var sql = "SELECT * FROM autoresponses WHERE cmd = '" + message.content + "'";
  con.query(sql, function (err, result) {
    try {message.channel.send(result[0].msg);} catch(err) {return;};
  });
});

bot.login(token);
