import dotenv from "dotenv"
import initializeServer from "./server"

dotenv.config()

const main = async () => {
    const PORT: number = Number(process.env.PORT) || 3001
    initializeServer(PORT)
}

main().catch((error) => {
  console.log({ error })
  throw new Error(error)
})
