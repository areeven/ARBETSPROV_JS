import Logger from './utils/Logger.js'
import StatusCode from './configuration/StatusCode.js'
import ApplyMiddlewares from './configuration/ApplyMiddlewares.js'
import ExpressApp from './utils/ExpressApp.js'
import CoffeeConfiguration from './configuration/CoffeeConfiguration.js'
import CoffeeRoutes from './routes/CoffeeRoutes.js'
import {notFound} from './middlewares/ErrorHandler.js'
import express from 'express'

const app = express()

ApplyMiddlewares()

CoffeeRoutes.routes()

ExpressApp.get('/', (req, res) => {
    Logger.http('API is alive!')
    res.status(StatusCode.OK).send('API is alive!')
})
ExpressApp.use(notFound)

CoffeeConfiguration.connectDb().then()
CoffeeConfiguration.connectPort()

export default app