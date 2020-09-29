const discord = require('discord.js');
const client = new discord.Client();

client.on("ready", () => {
    console.log("Pedra Papel Bot ligado.")
});

client.on("message", (message) => {

    if (message.author.bot) return;
    if (message.content.startsWith("!ppt")) {
      let types = [
			"Pedra",
			"Papel",
			"Tesoura"
		]
		let type = types[Math.floor(Math.random() * types.length)];
        message.reply(type)
    }
});

client.login("SEU TOKEN AQUI")
