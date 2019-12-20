module.exports = {
	name: 'compliments',
	description: 'array containing condolences',
	execute(message, args) {
        var compliments = ["thank you", "thanks", "valeu", "eh nois", "grazie", "appreciated", "obrigada", "obrigado"];
        message.reply('Your welcome! \nits my pleasure');
	}
};