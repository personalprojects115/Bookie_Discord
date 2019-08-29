//use whenever needed ->    `
// require the discord.js module
const Discord = require("discord.js");

const {prefix, token} = require('./config.json');

// create a new Discord client
const bot = new Discord.Client();

//temporary array to store possible greetings inputs
var greetings = ["Hello", "hello", "Hi", "hi", "sup", "sup!", "Sup", "hey", "Oi", "oi", "eai", "eae", "Oi", "Eai", "Eae" ];

// when the client is ready, run this code
// this event will only trigger one time after logging in
bot.on('ready', () => {
    console.log('Hello mam\', ready for your services!');
})

bot.on('message', message => {
    if(message.content === `${prefix}help`){
        message.channel.send('We are going under maintence for a while :c.\n Our available commands are' + `${prefix}help` + '\n' + `${prefix}flemis` + '\n' + `${prefix}author` + '\n' + `${prefix}shep`)
    }
})

bot.on('message', message =>{
    if(greetings.includes(message.content)){
        //reply message with @ directly to the user who sent 'Hello'
        message.reply('Hi friend!');
    }
})

//ES6 language. ` and arrow functions (lambda expressions)
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot)
    return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //reply message without @, like an insta message.
    switch(message.content){
        case `${prefix}flemis`:
                message.channel.send('É a arte do tudo!\nÉ tudo e ao mesmo tempo não é nada!');
                break;
        case `${prefix}author`:
                message.channel.send("Bookie was created by Marina de Pazzi.");
                break;
        case `${prefix}shep`:
                message.channel.send("Its a beautiful day to save lives!");
                break;
        case `${prefix}server`:
                message.channel.send(`Server name: ${message.guild.name}
                \nTotal members: ${message.guild.memberCount}`);
                break;
        case `${prefix}user-info`:
                message.channel.send(`Your username -> ${message.author.username}\n 
                Your ID -> ${message.author.id}`);
                break;
    }
})

bot.login(token);