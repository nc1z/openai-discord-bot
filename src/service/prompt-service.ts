import { Message } from "discord.js"
import { UserID } from "../types/enum/User"

const usePromptService = () => {
    const sendHelpCommandsResponse = (message: Message) => {
        message.channel.send(`
         **Here are the list of ${UserID.BOT} commands:**
         > **<prompt>** - Get a GPT-3.5.turbo powered response
         > **!confessions** - View all anonymous confessions
         > **/confession** - Submit an anonymous confession
         `)
        return
    }

    const generateAndSendGPTResponse = async (inputPrompt: string, message: Message) => {
        message.channel.send(`Work in progress`)
        message.channel.send(`Your input: ${inputPrompt}`)
        return
      }

    return {
        sendHelpCommandsResponse,
        generateAndSendGPTResponse,
    }
}

export default usePromptService