const Discord = require("discord.js");
const bot = new Discord.Client();
const token = 'NjEzNzI5OTE5Mzk4MTgyOTIz.XV1KvQ.G2IgkaOGAeGIOMAsNlHm2DAF7r4';

bot.on('ready', () => {
    console.log('Hello mam\', ready for your services!');
})

bot.on('message', msg =>{
    if(msg.content === 'Hello'){
        msg.reply('Hi friend!');
    }
})

bot.login(token);