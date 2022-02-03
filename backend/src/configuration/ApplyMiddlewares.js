import Morgan from '../middlewares/Morgan.js'
import helmet from 'helmet'
import Express from 'express'
import ExpressApp from '../utils/ExpressApp.js'

const ApplyMiddlewares = () => {
    ExpressApp.use(helmet())
    ExpressApp.use(Express.urlencoded({extended: false}))
    ExpressApp.use(Express.json())
    ExpressApp.use(Morgan)
}

export default ApplyMiddlewares