//use whenever needed ->    `

//fs is Node's native file system module.
const fs = require('fs');
// require the discord.js module
const Discord = require("discord.js");

//require prefix and token from the JSON file and stores int constants
const { prefix, token } = require('./config.json');

// create a new Discord client
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

fileReaders();

function fileReaders() {
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);

        // set a new item in the Collection
        // with the key as the command name and the value as the exported module
        bot.commands.set(command.name, command);
    }

}

// when the client is ready, run this code
// this event will only trigger one time after logging in
bot.on('ready', () => {
    console.log('Hello mam\', ready for your services!');
})

//ES6 language. '`' and arrow functions (lambda expressions)
bot.on('message', message => {
    sentences(message);
    commandHandler(message);
})


function commandHandler(message) {
    //If the message either doesn't start with the prefix or was sent by a bot, exit early.
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //Create an args variable that slices off the prefix entirely and then splits it into an array by spaces.
    const args = message.content.slice(prefix.length).split(/ +/);
    //Create a command variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array (so that you don't have the command name string inside the args array).
    const commandName = args.shift().toLowerCase();

    if (!bot.commands.has(commandName)) return;

    const command = bot.commands.get(commandName);

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        bot.commands.get('default').execute(message, args);
    }
}

bot.login(token);