module.exports = {
    name: 'role',
    description: 'displays the user role',
    //args: true,
	usage: '<user> <role>',
	execute(message, args) {
        if (message.guild.available){
            var role = message.guild.roles.find('name', 'Head of Neurosurgery')
            message.member.addRole(role.id);
            message.reply('role addded');
        }
    }
}