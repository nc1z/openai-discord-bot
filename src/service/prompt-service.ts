import { Message } from "discord.js"
import { UserID } from "../types/enum/User"
import ErrorMessage from "../types/enum/ErrorMessage"
import useGptRepository from "../repository/gpt-repository"

const usePromptService = () => {
    const gpt = useGptRepository()

    const sendHelpCommandsResponse = (message: Message) => {
        message.channel.send(`
         **Here are the list of ${UserID.BOT} commands:**
         > **<prompt>** - Get a GPT-3.5.turbo powered response
         > **!confessions** - View all anonymous confessions
         > **/confession** - Submit an anonymous confession
         `)
        return
    }

    const generateAndSendGPTResponse = async (promptBody: string, message: Message) => {
        const { fetchGPTResponse } = gpt
        try {
            if (message?.reference?.messageId) {
                const repliedTo = await message.channel.messages.fetch(
                    message.reference.messageId,
                )

                if (repliedTo.content) {
                    promptBody = repliedTo.content + ". " + promptBody
                }
            }

            console.log("<!--------- GPT API TRIGGERED --------->")
            const gptResponse = await fetchGPTResponse(promptBody, message.author.id)

            if (gptResponse) {
                message.channel.send(gptResponse)
                return
            }

            message.channel.send(ErrorMessage.RESPONSE_EMPTY)
        } catch (error) {
            console.log(error)
            message.channel.send(ErrorMessage.RESPONSE_ERROR)
        }
    }

    return {
        sendHelpCommandsResponse,
        generateAndSendGPTResponse,
    }
}

export default usePromptService
