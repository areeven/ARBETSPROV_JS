import Morgan from '../middlewares/Morgan.js'
import helmet from 'helmet'
import ExpressApp from '../utils/ExpressApp.js'
import {errorHandler} from '../middlewares/ErrorHandler.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const allowedOrigins = ['https://localhost:8000']
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options = {
    origin: allowedOrigins,
    method: allowedMethods
}

const ApplyMiddlewares = () => {
    ExpressApp.use(helmet())
    ExpressApp.use(bodyParser.json())
    ExpressApp.use(bodyParser.urlencoded({extended: false}))
    ExpressApp.use(bodyParser.json({type: 'application/json'}))
    ExpressApp.use(Morgan)
    ExpressApp.use(bodyParser.text())
    ExpressApp.use(errorHandler)
    ExpressApp.use(cors(options))
}

export default ApplyMiddlewares