//use whenever needed ->    `
// require the discord.js module
const Discord = require("discord.js");

//require prefix and token from the JSON file and stores int constants
const { prefix, token } = require('./config.json');

// create a new Discord client
const bot = new Discord.Client();

//temporary arrays to store potencial greetins, fairwells, and other inputs
var greetings = ["hello", "hi", "sup", "yo", "hey", "oi", "eai", "eae", "hola", "que hondale", "bonjour"];

var fairwells = ["bye", "goodbye", "see ya", "arrivederci", "au revoir", "holla at ya", "later", "lets bounce"];

var compliments = ["thank you", "thanks", "valeu", "eh nois", "grazie", "appreciated", "obrigada", "obrigado"];

// when the client is ready, run this code
// this event will only trigger one time after logging in
bot.on('ready', () => {
    console.log('Hello mam\', ready for your services!');
})

//ES6 language. '`' and arrow functions (lambda expressions)
bot.on('message', message => {
    sentences(message);
    commands(message);
})

function sentences(message) {
    if (greetings.includes(message.content.toLowerCase())) {
        //reply message with @ directly to the user who sent 'Hello'
        message.reply('Hi friend!');
    }
    else {
        if (fairwells.includes(message.content.toLowerCase())) {
            message.reply('Goodbye friend!');
        }
        else {
            if (compliments.includes(message.content.toLowerCase())) {
                message.reply('Your welcome! \nits my pleasure');
            }
        }
    }
}

function commands(message) {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content === `${prefix}help`) {
        message.channel.send('We are undergoing maintence for a while :c.\nOur available commands are:\n' + `${prefix}help` + '\n' + `${prefix}flemis` + '\n' + `${prefix}author` + '\n' + `${prefix}shep` + '\n' + `${prefix}server` + '\n' + `${prefix}user-info`);
        return;
    }

    //reply message without @, like an insta message.
    switch (command) {
        case `flemis`:
            message.channel.send('É a arte do tudo!\nÉ tudo e ao mesmo tempo não é nada!');
            break;
        case `author`:
            message.channel.send("Bookie was created by Marina de Pazzi.");
            break;
        case `shep`:
            message.channel.send("Its a beautiful day to save lives!");
            break;
        case `server`:
            message.channel.send(`Server name: ${message.guild.name}
                \nTotal members: ${message.guild.memberCount}`);
            break;
        case `user-info`:
            message.channel.send(`Your username -> ${message.author.username}\n 
                Your ID -> ${message.author.id}`);
            break;
        case 'kick':
            if (!message.mentions.users.size) {
                return message.reply('you need to tag a user in order to kick them!');
            } else {
                const taggedUser = message.mentions.users.first();
                message.channel.send(`You wanted to kick: ${taggedUser.username}`);
            }
            break;
        case 'avatar':
            if (!message.mentions.users.size){
                return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
            } else {
                const avatarList = message.mentions.users.map(user => {
                    return message.channel.send(`${user.username}'s avatar: <${user.displayAvatarURL}>`);
                });
                // send the entire array of strings as a message
	            // by default, discord.js will `.join()` the array with `\n`
                message.channel.send(avatarList);
            }
            break;
        default:
            message.channel.send('Oh, excuse me \nI am afraid I did not quite get your ' +
                'request\nfor more infos, please type: !help');
            break;

    }
}

bot.login(token);