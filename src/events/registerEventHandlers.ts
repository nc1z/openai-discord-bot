import { 
  Message, 
  Client, 
  Events, 
  Interaction, 
  ModalBuilder, 
  ActionRowBuilder, 
  TextInputBuilder, 
  TextInputStyle 
} from 'discord.js'
import { UserID } from '../types/enum/User'
import ErrorMessage from '../types/enum/ErrorMessage'

const registerEventHandlers = (client: Client<boolean>) => {
  client.on('debug', console.log)

  client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`)
    client.user?.setActivity("Listening to @My Discord Bot")
  })

  client.on(Events.InteractionCreate, async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return

    if (interaction.commandName === 'confession') {
      const modal = new ModalBuilder()
        .setCustomId('confessionModal')
        .setTitle('Discord Confessions')

      const confessionInput = new TextInputBuilder()
        .setCustomId('confessionInput')
        .setLabel("Post an anon confession?")
        .setPlaceholder('Enter some text!')
        .setStyle(TextInputStyle.Short)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const firstActionRow: any = new ActionRowBuilder().addComponents(confessionInput)

      modal.addComponents(firstActionRow)

      await interaction.showModal(modal)
    }
  })

  client.on("messageCreate", async (message: Message) => {
    const maintenanceMode = process.env.MAINTENANCE_MODE
    const prompt = message.content
    const startIndex = prompt.indexOf(">") + 2
    let promptBody = prompt.slice(startIndex)
    console.log(`${message.author.username}: ${promptBody}`)

    if (message.author.bot) {
      return
    }

    if (!prompt.startsWith(UserID.BOT)) {
      return 
    }

    if (!prompt || !promptBody) {
      return
    }

    if (maintenanceMode === `ON`) {
      message.channel.send(ErrorMessage.RESPONSE_MAINTENANCE)
      return
    }

    // TODO: handle prompt here
  })
}

export default registerEventHandlers