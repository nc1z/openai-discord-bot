import { initOpenAI } from '../clients/openAI'
import ErrorMessage from '../types/enum/ErrorMessage'

const useDalleRepository = () => {
  const openai = initOpenAI()

  const fetchDalleResponse = async (userPrompt: string) => {
    try {
     const response = await openai.createImage({
        prompt: userPrompt,
        n: 1,
        size: "1024x1024",
      })
      
      return response.data.data[0].url
    } catch (error) {
      console.log(error)
      return ErrorMessage.RESPONSE_GENERIC
    }
  }
  
  return {
    fetchDalleResponse,
  }
}

export default useDalleRepository
