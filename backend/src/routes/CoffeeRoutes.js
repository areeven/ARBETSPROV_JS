import CreateCoffee from '../controller/crud/CreateCoffee.js'
import GetAllCoffees from '../controller/crud/GetAllCoffees.js'
import ExpressApp from '../utils/ExpressApp.js'
import UpdateCoffee from '../controller/crud/UpdateCoffee.js'
import DeleteCoffee from '../controller/crud/DeleteCoffee.js'

const coffeeUrl = '/coffee'
const coffeeUrlId = `${coffeeUrl}/:coffeeId`

const routes = () => {
    ExpressApp.post(coffeeUrl, CreateCoffee.createCoffee)
    ExpressApp.get(coffeeUrl, GetAllCoffees.getAllCoffee)
    ExpressApp.put(coffeeUrlId, UpdateCoffee.updateCoffeeWithId)
    ExpressApp.delete(coffeeUrlId, DeleteCoffee.deleteCoffeeWithId)
}

export default {
    routes
}