import initAxios from "../clients/axios"
import ErrorMessage from "../types/enum/ErrorMessage"

const PROMPT_WORD_LIMIT = 1000
const PROMPT_SHORT_RESPONSE_THRESHOLD = 5

const useGptRepository = () => {
    const { gptClient } = initAxios()

    const fetchGPTResponse = async (promptBody: string, userId: string) => {
        if (promptBody.split(" ").length > PROMPT_WORD_LIMIT) {
            return `Request exceeds word limit (${PROMPT_WORD_LIMIT})`
        }

        let inputPrompt = promptBody

        if (promptBody.split(" ").length < PROMPT_SHORT_RESPONSE_THRESHOLD) {
            inputPrompt = promptBody + " (Keep the response short and concise)"
        }

        const GPT_API_MODEL = process.env.GPT_API_MODEL

        const promptConfig = {
            model: GPT_API_MODEL,
            prompt: inputPrompt,
            max_tokens: 1000,
            temperature: 0.3,
            top_p: 1,
            n: 1,
            stream: false,
            logprobs: null,
            stop: null,
            user: userId.toString(),
        }

        try {
            const GPT_API_URL = process.env.GPT_API_URL

            if (!GPT_API_URL) {
                throw new Error(ErrorMessage.RESPONSE_ERROR)
            }

            const response = await gptClient.post(
                GPT_API_URL,
                promptConfig,
            )

            if (response.status === 200) {
                if (response.data.choices[0].finish_reason === "length") {
                    return (
                        response.data.choices[0].text + "...(response capped)"
                    )
                }

                console.log(response.data.usage)
                console.log(response.data.choices[0].text)

                return response.data.choices[0].text
            }
        } catch (error) {
            console.log(error)
            return ErrorMessage.RESPONSE_GENERIC
        }
    }

    return {
        fetchGPTResponse,
    }
}

export default useGptRepository
