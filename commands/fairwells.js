module.exports = {
	name: 'fairwells',
	description: 'array containing fairwells',
	execute(message, args) {
        var fairwells = ["bye", "goodbye", "see ya", "arrivederci", "au revoir", "holla at ya", "later", "lets bounce"];
        message.reply('Goodbye friend!');
	},
};