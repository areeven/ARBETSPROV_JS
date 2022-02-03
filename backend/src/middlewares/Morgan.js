import morgan from 'morgan'
import {environment} from '../utils/DotEnv.js'
import Logger from '../utils/Logger.js'

const stream = {
    write: (message) => Logger.http(message)
}

const skip = () => {
    const devEnv = 'development'
    const env = environment || devEnv
    return env !== devEnv
}

const Morgan = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {stream, skip}
)

export default Morgan