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
        //reply message in channel with @ directly to the user who sent 'Hello'
        message.reply('Hi friend!');
    }
})

bot.on('message', message => {
    commands(message);
})

function commands(message){
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //ES6 language. ` and arrow functions (lambda expressions)
    if(message.content.startsWith(`${prefix}flemis`)){
        //reply message in channel without @, like an insta message. 
        message.channel.send('É a arte do tudo!\nÉ tudo e ao mesmo tempo não é nada!');
    } else {
        if (message.content.startsWith(`${prefix}author`)){
            message.channel.send("Bookie was created by Marina de Pazzi.");
        } else {
            if(message.content.startsWith(`${prefix}shep`)){
                message.channel.send("Its a beautiful day to save lives!");
            }
            else {
                if (message.content ===  `${prefix}server `){
                        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
                }
                else {
                    if(message.content === `${prefix}user-info`){
                        message.channel.send(`Your username -> ${message.author.username}\n 
                        Your ID -> ${message.author.id}`);
                    }
                }
            }
        }
    }
}

bot.login(token);