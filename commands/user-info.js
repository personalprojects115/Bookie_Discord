module.exports = {
	name: 'user-info',
	description: 'informations of a user',
	execute(message, args) {
		message.channel.send(`Your username -> ${message.author.username}\n 
                Your ID -> ${message.author.id}`);
	},
};