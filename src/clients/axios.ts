import axios from "axios"

const GPT_API_KEY = process.env.GPT_SECRET

const axiosGptClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${GPT_API_KEY}`,
  },
})

const axiosClient = axios.create()

export {
  axiosGptClient,
  axiosClient,
}