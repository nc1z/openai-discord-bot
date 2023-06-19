import { AxiosResponse } from 'axios'
import { WeatherResponse } from '../types/interface/WeatherResponse'
import WeatherData from '../types/interface/WeatherData'
import initAxios from '../clients/axios'
import cityList from '../helpers/data/city-list'
import ErrorMessage from '../types/enum/ErrorMessage'

const useWeatherRepository = () => {
    const { client } = initAxios()

    const fetchWeatherResponse = async () => {
        const globalWeatherData: WeatherData = { data: [], error: ``}
        
        for (const city of cityList) {
            const queryURL = `${process.env.WEATHER_API_URL}?key=${process.env.WEATHER_SECRET}&q=${city}&aqi=no`
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000))
                const response: AxiosResponse<WeatherResponse> = await client.get(queryURL)
                globalWeatherData.data.push(response.data)
            } catch (error) {
                console.log(error)
                globalWeatherData.error = ErrorMessage.RESPONSE_GENERIC
            }
        }

        return globalWeatherData
    }

    
    return {
        fetchWeatherResponse,
    }
}

export default useWeatherRepository
