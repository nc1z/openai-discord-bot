import { Configuration, OpenAIApi } from "openai"

const GPT_API_URL = process.env.GPT_API_URL
const GPI_API_MODEL = process.env.GPI_API_MODEL
const GPT_API_KEY = process.env.GPT_SECRET

const initOpenAI = () => {
  const configuration = new Configuration({
    apiKey: GPT_API_KEY,
  })

  const openai = new OpenAIApi(configuration)
  return openai
}

export {
  initOpenAI,
  GPT_API_URL,
  GPI_API_MODEL,
}

