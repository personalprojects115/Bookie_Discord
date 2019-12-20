module.exports = {
	name: 'author',
	description: 'infos of Bookie\'s creator',
	execute(message, args) {
		message.channel.send("Bookie was created by Marina de Pazzi.");
	},
};