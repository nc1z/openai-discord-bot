import fs from "fs"
import { ErrorMessage } from "../types/enum/CommonMessages"

const useConfessionsRepository = () => {
    const path = process.env.DATABASE_PATH || `./src/database/mock-database.json`

    const formatConfessions = (confessions: string[]) => {
        let tableString = ""

        confessions.forEach(confessions => {
            tableString += `➛ ${confessions}\n\n`
        })

        return tableString.trim()
    }

    const getConfessions = async () => {
        const myData = fs.readFileSync(path, `utf8`)

        if (!myData) {
            return ErrorMessage.RESPONSE_EMPTY
        }

        return JSON.parse(myData)
    }

    const postConfession = async (text: string) => {
        if (!text) {
            return
        }

        try {
            const jsonString = await fs.promises.readFile(path, `utf8`)
            let data = JSON.parse(jsonString)
            data.confessions.push(text)
            await fs.promises.writeFile(path, JSON.stringify(data, null, 2), `utf8`)
            console.log(`Data successfully saved`)
        } catch (error) {
            console.error(error)
            throw new Error(ErrorMessage.RESPONSE_FAILED_SUBMISSION)
        }
    }

    return {
        getConfessions,
        postConfession,
        formatConfessions,
    }
}

export default useConfessionsRepository
