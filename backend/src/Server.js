import Logger from './utils/Logger.js'
import StatusCode from './configuration/StatusCode.js'
import ApplyMiddlewares from './configuration/ApplyMiddlewares.js'
import ExpressApp from './utils/ExpressApp.js'
import CoffeeConfiguration from './configuration/CoffeeConfiguration.js'

ApplyMiddlewares()

ExpressApp.get('/', (req, res) => {
    Logger.http('API is alive!')
    res.status(StatusCode.OK).send('API is alive!')
})

CoffeeConfiguration.connectDb().then()
CoffeeConfiguration.connectPort()

