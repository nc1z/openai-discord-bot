import dotenv from "dotenv"
import { Client } from "discord.js"
import initializeServer from "./server"
import initClient from "./clients/discord-client"
import registerEventHandlers from "./events/registerEventHandlers"

dotenv.config()

const main = async () => {
    const client: Client<boolean> = initClient()
    const PORT: number = Number(process.env.PORT) || 3001
    initializeServer(PORT)
    registerEventHandlers(client)
}

main().catch((error) => {
  console.log({ error })
  throw new Error(error)
})
