import Discord from "discord.js"

const initClient = () => {
  const TOKEN = process.env.BOT_SECRET
  const client = new Discord.Client({
    intents: [
      Discord.GatewayIntentBits.Guilds,
      Discord.GatewayIntentBits.GuildMessages,
      Discord.GatewayIntentBits.MessageContent
    ]
  })

  client.login(TOKEN)

  return client
};

export default initClient