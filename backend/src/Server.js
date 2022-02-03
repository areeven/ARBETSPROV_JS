import Logger from './utils/Logger.js'
import StatusCode from './configuration/StatusCode.js'
import {port} from './utils/DotEnv.js'
import ApplyMiddlewares from './configuration/ApplyMiddlewares.js'
import ExpressApp from './utils/ExpressApp.js'

ApplyMiddlewares()

ExpressApp.get('/', (req, res) => {
    Logger.http('API is alive!')
    res.status(StatusCode.OK).send('API is alive!')
})

ExpressApp.listen(port, () => {
    Logger.http(`API is up and running on: http://localhost:${port}`)
})
