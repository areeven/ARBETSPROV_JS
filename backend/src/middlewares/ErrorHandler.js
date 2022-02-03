import {environment} from '../utils/DotEnv.js'
import StatusCode from '../configuration/StatusCode.js'

// Own made middlewares
const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${ req.originalUrl }`)
    res.status(StatusCode.NOT_FOUND)
    next(error)
}

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        statusCode,
        message: error.message,
        stackTrace: environment === 'development' ? error.stack : 'lol'
    })
}

export {
    notFound,
    errorHandler
}