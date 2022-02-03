import Logger from '../../utils/Logger.js'
import CoffeeModel from '../../models/CoffeeModel.js'
import StatusCode from '../../configuration/StatusCode.js'

const createCoffee = async (req, res) => {
    const body = req.body
    Logger.http(body)
    const {brand, taste, strength, organic} = body
    const coffee = new CoffeeModel({
        brand,
        taste,
        strength,
        organic
    })
    if(organic === false) {
        return res.json({message: 'Coffee must be organic'})
    }
    Logger.debug(coffee)
    try {
        const response = await coffee.save()
        Logger.debug(response)
        res.status(StatusCode.CREATED).send(response)
    } catch(error) {
        res.status(500).send({
            message: error.message
        })
    }
}

export default {createCoffee}