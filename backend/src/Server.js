import Express from 'express'
import dotenv from 'dotenv'

dotenv.config()
export const app = Express()
export const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
    res.status(200).send('API is alive!')
})

app.listen(port, () => {
    console.log(`API is up and running on: http://localhost:${port}`)
})
