const weatherPendingMessages = [
    "Analyzing the sky for weather secrets...",
    "Summoning weather spirits for the latest forecast...",
    "Asking the wind for its secrets...",
    "Communing with the clouds to reveal the weather...",
    "Conducting a meteorological symphony...",
    "Consulting the weather deities for their divine insights...",
    "Cracking the code of weather patterns...",
    "Unraveling the mysteries of the atmosphere...",
    "Gathering weather tidbits from the cosmic realm...",
    "Sending a message to the weather fairy for the latest update...",
]
  
const getRandomWeatherPendingQuote = () => {
    const randomIndex = Math.floor(Math.random() * weatherPendingMessages.length)
    return weatherPendingMessages[randomIndex]
}
  
export {
    getRandomWeatherPendingQuote,
}