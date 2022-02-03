import Logger from './utils/Logger.js'
import StatusCode from './configuration/StatusCode.js'
import ApplyMiddlewares from './configuration/ApplyMiddlewares.js'
import ExpressApp from './utils/ExpressApp.js'
import CoffeeConfiguration from './configuration/CoffeeConfiguration.js'
import https from 'https'
import {httpsPort} from './utils/DotEnv.js'
import fs from 'fs'
import path from 'path'
import CoffeeRoutes from './routes/CoffeeRoutes.js'

ApplyMiddlewares()

CoffeeRoutes.routes(ExpressApp)

ExpressApp.get('/', (req, res) => {
    Logger.http('API is alive!')
    res.status(StatusCode.OK).send('API is alive!')
})

CoffeeConfiguration.connectDb().then()
CoffeeConfiguration.connectPort()