import CoffeeModel from '../../models/CoffeeModel.js'
import Logger from '../../utils/Logger.js'
import StatusCode from '../../configuration/StatusCode.js'

const getAllCoffee = async (req, res) => {
    try {
        const response = await CoffeeModel.find()
        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: error.message
        })
    }
}

export default {
    getAllCoffee
}