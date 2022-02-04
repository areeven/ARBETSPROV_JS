import Logger from '../../utils/Logger.js'
import CoffeeModel from '../../models/CoffeeModel.js'
import StatusCode from '../../configuration/StatusCode.js'

const updateCoffeeWithId = async (req, res) => {
    try {
        const {coffeeId} = req.params
        Logger.http(`Coffee id is: ${coffeeId}`)
        const {brand, taste, strength, organic} = req.body
        const minLength = 3
        Logger.debug(brand.length)
        if(brand.length <= minLength || taste.length <= minLength || strength.length <= minLength) {
            res.status(StatusCode.BAD_REQUEST).send({message: `Can't update with less than 3 characters`})
        }
        if(organic === false) {
            return res.send("Can't update coffee unless it's organic")
        }
        Logger.http(req.body)
        const response = await CoffeeModel.findByIdAndUpdate(coffeeId, {
            brand,
            taste,
            strength,
            organic
        }, {new: true})

        Logger.debug(response)
        res.status(StatusCode.OK).send(response)
    } catch(error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: `Error occurred while trying to update coffee with ID: ${req.params.coffeeId}`,
            error: error.message
        })
    }
}

export default {
    updateCoffeeWithId
}