
const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on("ready", () => {
    console.log("work");
});
client.on("messageCreate", (message) => {
    if (!message.content) {
        message.channel.send("/imagine prompt:planet space cyberpunk");
    }
});

client.login('MTA5NzgzNTI4NjM2NjUzMTY0NQ.GTHFZf.yHaOU4pdGX_sOk6AFsX-UML3Shk8I_OI1Z_bWQ');