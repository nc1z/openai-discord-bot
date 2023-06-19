import { Request, Response } from "express"
import express from "express"
import cors from "cors"

const app = express()

const initializeServer = (port: number) => {
  app.use(express.json())
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization", "x-access-token"],
    })
  );

  app.listen(port, () => {
    console.log(`Now listening to port ${port}`)
  })

  app.get("/", (req: Request, res: Response) => {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const date = new Date()
    date.setHours(date.getHours() + 8)
    
    console.log(`called at: ${date.toLocaleString()}. Client IP: ${clientIp}`)
    return res.status(200).json({ data: "Server is live", error: "" })
  })
}

export default initializeServer