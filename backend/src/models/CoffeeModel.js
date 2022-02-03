import mongoose from 'mongoose'
import {colName} from '../utils/DotEnv.js'

const CoffeeSchema = new mongoose.Schema({
    brand: {type: String, required: true},
    taste: {type: String, required: true},
    strength: {type: String, required: true},
    organic: {type: Boolean, required: true}
}, {timestamps: true})

const CoffeeModel = new mongoose.model(colName, CoffeeSchema)

export default CoffeeModel

