import { Configuration, OpenAIApi } from "openai"

const initOpenAI = () => {
  const configuration = new Configuration({
    apiKey: process.env.GPT_SECRET,
  })

  const openai = new OpenAIApi(configuration)
  return openai
}

export {
  initOpenAI,
}

