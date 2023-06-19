import dotenv from "dotenv"
import initializeServer from "./server"
import initClient from "./clients/discord-client"

dotenv.config()

const main = async () => {
    const client = initClient()
    const PORT: number = Number(process.env.PORT) || 3001
    initializeServer(PORT)
}

main().catch((error) => {
  console.log({ error })
  throw new Error(error)
})
