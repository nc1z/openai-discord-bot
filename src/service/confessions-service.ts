import { Message } from "discord.js"
import useConfessionsRepository from "../repository/confessions-repository"

const CONFESSIONS_COUNT = 5

const useConfessionsService = () => {
    const confessionsRepository = useConfessionsRepository()

    const retrieveAndSendConfessions = async (inputPrompt: string, message: Message) => {
        const { getConfessions, formatConfessions } = confessionsRepository
        
        if (inputPrompt.split(" ").length > 2) {
            return
        }
        
        if (inputPrompt.split(" ").length < 2) {
            try {
                const allConfessions = await getConfessions()
                const trimmedConfessions = allConfessions.confessions.reverse().slice(0, CONFESSIONS_COUNT)
                const formattedConfessions = formatConfessions(trimmedConfessions)
                message.channel.send("🥵 **LATEST SPICY CONFESSIONS**\n\n" + formattedConfessions)
                return
            } catch (error) {
                console.error(error)
                return
            }
        }
    
        const numberOfConfessions = inputPrompt.split(" ")[1]

        const isNotANumber = isNaN(Number(numberOfConfessions))
    
        if (isNotANumber) {
            return
        }
    
        try {
            const allConfessions = await getConfessions()
            const trimmedConfessions = allConfessions.confessions.reverse().slice(0, Number(numberOfConfessions))
            const formattedConfessions = formatConfessions(trimmedConfessions)
            message.channel.send(formattedConfessions)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        retrieveAndSendConfessions,
    }
}

export default useConfessionsService
