import { Message } from "discord.js"

import doesPromptMatchKeyword from '../helpers/utils/doesPromptMatchKeyword'
import Command from '../types/enum/Command'
import usePromptService from '../service/prompt-service'
import useOpenAiService from "../service/openai-service"
import useWeatherService from "../service/weather-service"
import useConfessionsService from "../service/confessions-service"

const handlePrompt = (prompt: string, promptBody: string, message: Message) => {
  const promptService = usePromptService()
  const openAiService = useOpenAiService()
  const weatherService = useWeatherService()
  const confessionsService = useConfessionsService()
  
  switch (true) {
      case doesPromptMatchKeyword(promptBody, Command.HELP):
        promptService.sendHelpCommandsResponse(message)
        break
      case doesPromptMatchKeyword(promptBody, Command.IMAGINE):
        openAiService.generateAndSendImageResponse(prompt, promptBody, message)
        break
      case doesPromptMatchKeyword(promptBody, Command.WEATHER):
        weatherService.retrieveAndSendGlobalWeatherAndTime(message)
        break
      case doesPromptMatchKeyword(promptBody, Command.CONFESSIONS):
        confessionsService.retrieveAndSendConfessions(promptBody, message)
        break
      default:
        openAiService.generateAndSendGPTResponse(promptBody, message)
        break
  }
}

export default handlePrompt