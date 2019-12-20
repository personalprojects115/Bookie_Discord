module.exports = {
	name: 'help',
	description: 'you lost bro? ',
	execute(message, args) {
		message.channel.send('We are undergoing maintence for a while :c\nOur available commands are:\n' + `!help` + '\n' + `!flemis` + '\n' + `!author` + '\n' + `!shep` + '\n' + `!server` + '\n' + `!user-info`);
	},
};