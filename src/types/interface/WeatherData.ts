import { WeatherResponse } from "./WeatherResponse";

interface WeatherData {
    data: WeatherResponse[],
    error: string,
}

export default WeatherData