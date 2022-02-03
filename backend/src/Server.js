import Express from 'express'
import dotenv from 'dotenv'
import Logger from './utils/Logger.js'
import StatusCode from './configuration/StatusCode.js'

dotenv.config()
export const app = Express()
export const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
    Logger.http('API is alive!')
    res.status(StatusCode.OK).send('API is alive!')
})

app.listen(port, () => {
    Logger.http(`API is up and running on: http://localhost:${port}`)
})
