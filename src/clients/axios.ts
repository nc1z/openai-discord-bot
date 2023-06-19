import axios from "axios"

const initAxios = () => {
  const GPT_API_SECRET = process.env.GPT_SECRET
  const gptClient = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GPT_API_SECRET}`,
    },
  })
  
  const client = axios.create()

  return {
    gptClient,
    client,
  }
}

export default initAxios