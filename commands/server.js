module.exports = {
	name: 'server',
	description: 'infos of the server',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}
                \nTotal members: ${message.guild.memberCount}`);
	},
};