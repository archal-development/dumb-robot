const Discord = require("discord.js");
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

var prefix = "-";
var token = " ";

client.on("ready", () => {
  console.log("dumb robot | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`with your money`);
});


client.on("message", (message) => {
  if (message.content.toLowerCase().startsWith(prefix + `reddit`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand subreddit`)
    .setDescription(`http://reddit.com/r/dbrand`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `twitter`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand twitter`)
    .setDescription(`http://twitter.com/dbrand`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `instagram`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand instagram`)
    .setDescription(`https://instagram.com/dbrand`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `youtube`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand youtube`)
    .setDescription(`https://youtube.com/c/dbrand`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `grip`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand grip`)
    .setDescription(`https://dbrand.com/grip`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `skin`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand skin`)
    .setDescription(`https://dbrand.com/skin`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `prism`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand prism`)
    .setDescription(`https://dbrand.com/prism`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `discord`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand discord`)
    .setDescription(`https://discord.gg/dbrand`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `how`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand tutorials`)
    .setDescription(`https://dbrand.com/how-to-apply`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `contact`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand discord`)
    .setDescription(`https://dbrand.com/contact`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `shipping`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand shipping`)
    .setDescription(`https://dbrand.com/shipping`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `robot`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand robot skin`)
    .setDescription(`https://dbrand.com/shop/limited-edition/robot`)
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `winners`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFBB00)
    .setTitle(`dbrand winners`)
    .setDescription(`https://dbrand.com/winners`)
    message.channel.send({ embed: embed });
  }
});

client.login(process.env.TOKEN);