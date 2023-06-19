import { Message } from "discord.js"

import doesPromptMatchKeyword from '../helpers/utils/doesPromptMatchKeyword'
import Command from '../types/enum/Command'
import usePromptService from '../service/prompt-service'

const handlePrompt = (promptBody: string, message: Message) => {
  const promptService = usePromptService()
  
  switch (true) {
      case doesPromptMatchKeyword(promptBody, Command.HELP):
        promptService.sendHelpCommandsResponse(message)
        break
      default:
        promptService.generateAndSendGPTResponse(promptBody, message)
        break
  }
}

export default handlePrompt