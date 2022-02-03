import CoffeeController from '../controller/CoffeeController.js'
import ExpressApp from '../utils/ExpressApp.js'

const coffeeUrl = '/coffee'
const coffeeUrlId = `${coffeeUrl}/:coffeeId`

const routes = (ExpressApp) => {
    ExpressApp.post(coffeeUrl, CoffeeController.createCoffee)
    ExpressApp.get(coffeeUrl, CoffeeController.getAllCoffee)
    ExpressApp.put(coffeeUrlId, CoffeeController.updateCoffeeWithId)
    ExpressApp.delete(coffeeUrlId, CoffeeController.deleteCoffeeWithId)
}

export default {
    routes
}