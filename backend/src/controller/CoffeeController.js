import Logger from '../utils/Logger.js'
import CoffeeModel from '../models/CoffeeModel.js'
import StatusCode from '../configuration/StatusCode.js'

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
        res.status(201).send(response)
    } catch(error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const getAllCoffee = async (req, res) => {
    try {
        const response = await CoffeeModel.find()
        Logger.debug(response)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const updateCoffee = async (req, res) => {
    try {
        const body = req.body
        const {coffeeId} = req.params
        Logger.http(`Coffee id is: ${coffeeId}`)
        const {brand, taste, strength, organic} = body
        Logger.http(body)
        if(organic === false) {
            return res.send("Can't update coffee unless it's organic")
        }
        const response = await CoffeeModel.findByIdAndUpdate(coffeeId, {
            brand,
            taste,
            strength,
            organic
        }, {new: true})
        Logger.debug(response)
        res.status(200).send(response)
    } catch(error) {
        res.status(500).send({
            message: `Error occured while trying to update coffee with ID: ${req.params.coffeeId}`,
            error: error.message
        })
    }
}

const deleteCoffee = async () => {

}


export default {
    createCoffee,
    getAllCoffee,
    updateCoffee
}