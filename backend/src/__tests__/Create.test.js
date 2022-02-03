import Chai from 'chai'
import chaiHttp from 'chai-http'
import {describe, it as test} from 'mocha'
import ExpressApp from '../utils/ExpressApp.js'
import StatusCode from '../configuration/StatusCode.js'

Chai.use(chaiHttp)
Chai.should()
const expect = Chai.expect

const random = Math.random().toString(36).substring(7)

let id = '61fbfa981c39baa60bca2f3b'

const coffee = {
    brand: random,
    taste: random,
    strength: random,
    organic: true
}

const updatedCoffee = {
    brand: random + random,
    taste: random + random,
    strength: random + random,
    organic: true
}

const route = 'coffee'

const testExistingRoute = () => {
    describe('test existing route', () => {
        test('expecting status 200', (done) => {
            Chai.request(ExpressApp)
                .get('/')
                .end((req, res) => {
                    res.should.have.a.status(200)
                    done()
                })
        })
    })
}

const testOfNonExistingRoute = () => {
    describe('test of non existing route', () => {
        test('expecting status 404', (done) => {
            Chai.request(ExpressApp)
                .get(`/${random}`)
                .end((req, res) => {
                    res.should.have.a.status(404)
                    done()
                })
        })
    })
}

const createCoffee = () => {
    describe('test method create in database', () => {
        test('expecting to create coffee entity', (done) => {
            Chai.request(ExpressApp)
                .post(`/coffee`)
                .send(coffee)
                .end((error, response) => {
                    id = response.body.id
                    expect(response.status).to.equal(StatusCode.CREATED)
                    done()
                })
        })
    })
}

describe('Testing Coffee API', () => {
    createCoffee()
    testOfNonExistingRoute()
    testExistingRoute()
})