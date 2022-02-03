import CoffeeModel from '../../models/CoffeeModel.js'
import StatusCode from '../../configuration/StatusCode.js'

const deleteCoffeeWithId = async (req, res) => {
    try {
        const {coffeeId} = req.params
        const response = await CoffeeModel.findByIdAndDelete(coffeeId)
        res.status(StatusCode.OK).send({
            message: `Deleted Coffee with ID: ${response.brand} and brand: ${req.params.coffeeId}`,
        })
    } catch(error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error while trying to delete Coffee with ID: ${req.params.coffeeId}`,
            error: error.message
        })
    }
}

export default {
    deleteCoffeeWithId
}