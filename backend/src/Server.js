import Logger from './utils/Logger.js'
import StatusCode from './configuration/StatusCode.js'
import ApplyMiddlewares from './configuration/ApplyMiddlewares.js'
import ExpressApp from './utils/ExpressApp.js'
import CoffeeConfiguration from './configuration/CoffeeConfiguration.js'
import https from 'https'
import {httpsPort} from './utils/DotEnv.js'
import fs from 'fs'
import path from 'path'

ApplyMiddlewares()

ExpressApp.get('/', (req, res) => {
    Logger.http('API is alive!')
    res.status(StatusCode.OK).send('API is alive!')
})

CoffeeConfiguration.connectDb().then()

ExpressApp.use('/', (req, res, next) => {
    res.send('Hello from SSL server')
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.resolve('src/utils/security/privateKey.key')),
    cert: fs.readFileSync(path.resolve('src/utils/security/certificate.crt'))
}, ExpressApp)


sslServer.listen(httpsPort, () => {
    Logger.http(`Secure Server responding on https://localhost:${httpsPort}`)
})