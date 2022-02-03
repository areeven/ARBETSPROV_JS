import {environment, port, dbName, mongoDbUrl} from '../utils/DotEnv.js'
import Logger from '../utils/Logger.js'
import ExpressApp from '../utils/ExpressApp.js'
import mongoose from 'mongoose'
import https from 'https'
import fs from 'fs'
import path from 'path'

const listen = ExpressApp.listen(port)

const options = {
    key: fs.readFileSync(path.resolve('src/utils/security/privateKey.key')),
    cert: fs.readFileSync(path.resolve('src/utils/security/certificate.crt'))
}

const checkEnvironmentMode = () => {
    const devEnvironment = 'development'
    const env = environment || devEnvironment
    const isDevMode = env === devEnvironment
    if (isDevMode) {
        Logger.warn('Server is in development mode!'.toUpperCase())
    }
}

const connectDb = async () => {
    const uri = mongoDbUrl + dbName
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        await mongoose.connect(uri, options)
        Logger.info('Successfully connected to database')
    } catch (error) {
        Logger.warn('Error while trying to connect to database'.toUpperCase(), error)
    }
}

const connectPort = () => {
    https.createServer(options, function (req, res){
        checkEnvironmentMode()
        Logger.info(`Server started at https://localhost:${port}`)
    }).listen
}

export default {
    connectDb,
    connectPort
}