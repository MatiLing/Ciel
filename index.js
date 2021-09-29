const {Client, Intents, Interaction} = require("discord.js")
require("dotenv").config()
const config = require("./config.json")

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS]})

client.once("ready", () => {
    console.log("Listaa uwu")
})

client.on("interactionCreate", async Interaction => {
    if (!Interaction.isCommand()) return

    const { commandName } = Interaction

    if (commandName == "ping") {
        await Interaction.reply("Pong")
    }
})

client.login(config.token)