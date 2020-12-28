const Discord = require('discord.js')
const client = new Discord.Client()
const commandHandler = require('./commands')

require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', commandHandler)

client.login(process.env.DISCORD_SECRET)