const send = require('quick.hook');
const Discord = require('discord.js');


exports.run = (client, message, args, tools) => {

	let split = '%%';
	
	if (!args[0]){
		
		const embed = new Discord.MessageEmbed()
			.setColor(0x77B3D5)
			.setTitle('Information')
			.setDescription(`**Usage: \`\`\`!announce embedTitle ${split} embedMsg ${split} msgName ${split} msgIcon ${split} embedColor\`\`\`**`);
		
		return send(message.channel, embed, {
			name: 'Announce Command',
			icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/clipboard-512.png'
		})
	}
	
	args = args.join(' ').split(split);
	
	for (var i = 0; i < args.length; i++) args[i] = args[i].trim();
	
	if (args[4]) args[4] = parseInt(`0x${args[4]}`);
	
	let options = {
		title: args[0] || 'Announcement',
		message: args[1] || undefined,
		name: args[2] || 'Cipher BOT',
		icon: args[3] || 'https://i.imgur.com/UaXq9um.png',
		embedColor: args[4] || 0xfffff
	}
	
	const embed = new Discord.MessageEmbed()
		.setColor(options.embedColor)
		.setTitle(options.title)
		
	if (options.message) embed.setDescription(options.message);

	send(message.channel, embed, {
		name: options.name,
		icon: options.icon
	})	

}


exports.config = {
	name: 'announce',
	aliases: ["an"]
};