module.exports = {
    name: 'default',
	description: 'No such command found',
	execute(message, args) {
		message.channel.send('Oh, excuse me \nI am afraid I did not quite get your ' +
        'request\nfor more infos, please type: !help');
	},
};