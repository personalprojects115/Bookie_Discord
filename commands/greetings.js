module.exports = {
	name: 'fairwells',
	description: 'array containing greetings',
	execute(message, args) {
        var greetings = ["hello", "hi", "sup", "yo", "hey", "oi", "eai", "eae", "hola", "que hondale", "bonjour"];
        message.reply('Hi friend!');
	},
};