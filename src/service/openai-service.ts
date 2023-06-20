import { AttachmentBuilder, Message } from "discord.js"
import { ErrorMessage } from "../types/enum/CommonMessages"
import useGptRepository from "../repository/gpt-repository"
import useDalleRepository from "../repository/dalle-repository"

const useOpenAiService = () => {
    const gptRepository = useGptRepository()
    const dalleRepository = useDalleRepository()

    const generateAndSendGPTResponse = async (promptBody: string, message: Message) => {
        const { fetchGPTResponse } = gptRepository
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

    const generateAndSendImageResponse = async (prompt: string, promptBody: string, message: Message) => {
        const { fetchDalleResponse } = dalleRepository
        
        try {
          message.channel.send("Generating image...")
          const imageUrl = await fetchDalleResponse(prompt)

          if (!imageUrl) {
            throw new Error(ErrorMessage.RESPONSE_EMPTY)
          }
          
          const file = new AttachmentBuilder(imageUrl, { name: 'image.png' })
          const embedImage = {
            title: promptBody,
            image: {
              url: 'attachment://image.png',
            },
          }
    
          if (embedImage) {
            message.channel.send({ 
              embeds: [embedImage], 
              files: [file],
            })
            return
          }
          message.channel.send(ErrorMessage.RESPONSE_EMPTY)
          return
        } catch (error) {
          console.log(error)
          message.channel.send(ErrorMessage.RESPONSE_ERROR)
          return
        }
    }

    return {
        generateAndSendGPTResponse,
        generateAndSendImageResponse,
    }
}

export default useOpenAiService
