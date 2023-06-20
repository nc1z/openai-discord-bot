import { Message } from "discord.js"
import { getRandomWeatherPendingQuote } from "../helpers/utils/common-messages"
import useWeatherRepository from "../repository/weather-repository"

const useWeatherService = () => {
    const weatherRepository = useWeatherRepository()

    const retrieveAndSendGlobalWeatherAndTime = async (message: Message) => {
        const { fetchWeatherResponse } = weatherRepository
    
        message.channel.send(getRandomWeatherPendingQuote())
        const weatherResponse = await fetchWeatherResponse()
    
        if (weatherResponse.error) {
          message.channel.send(weatherResponse.error)
          return
        }
    
        let response = `**=== CURRENT WEATHER AROUND THE WORLD ===**\n\n`
    
        weatherResponse.data.forEach((cityData) => {
          response += `**Location:** ${cityData.location?.country}\n`
          response += `**weather:** ${cityData.current.condition?.text}\n`
          response += `**Feels like (c):** ${cityData.current?.feelslike_c}\n`
          response += `**Feels like (f):** ${cityData.current?.feelslike_f}\n`
          response += `**Humidity:** ${cityData.current?.feelslike_f}\n`
          response += `\n`
        })
    
        message.channel.send(response)
    }

    return {
        retrieveAndSendGlobalWeatherAndTime,
    }
}

export default useWeatherService
