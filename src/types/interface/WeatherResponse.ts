interface WeatherLocation {
    name: string,
    region: string,
    country: string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime_epoch: number,
    localtime: string,
}

interface WeatherCondition {
    text: string,
}

interface WeatherCurrent {
    last_updated: string,
    condition: WeatherCondition,
    wind_mph: number,
    wind_kph: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    uv: number,
}

interface WeatherResponse {
    location: WeatherLocation,
    current: WeatherCurrent,
}

export {
    WeatherResponse,
}