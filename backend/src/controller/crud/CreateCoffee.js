import Logger from '../../utils/Logger.js'
import CoffeeModel from '../../models/CoffeeModel.js'
import StatusCode from '../../configuration/StatusCode.js'

const createCoffee = async (req, res) => {
    const body = req.body
    const {brand, taste, strength, organic} = body
    const minLength = 3
    if(brand.length <= minLength || taste.length <= minLength || strength.length <= minLength) {
        return res.status(StatusCode.BAD_REQUEST).send({message: `Can't create with less than 3 characters`})
    }
    if(organic === false) {
        return res.json({message: 'Coffee must be organic'})
    }
    Logger.http(body)
    const coffee = new CoffeeModel({
        brand,
        taste,
        strength,
        organic
    })
    Logger.debug(coffee)
    try {
        const response = await coffee.save()
        Logger.debug(response)
        res.status(StatusCode.CREATED).send(response)
    } catch(error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: error.message
        })
    }
}

export default {createCoffee}