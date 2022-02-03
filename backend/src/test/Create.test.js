import Chai from 'chai'
import chaiHttp from 'chai-http'
import {describe, it as test} from 'mocha'
import app from '../Server.js'
import StatusCode from '../configuration/StatusCode.js'
import ExpressApp from '../utils/ExpressApp.js'

Chai.should()
Chai.use(chaiHttp)

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const expect = Chai.expect

const random = Math.random().toString(36).substring(7)

const coffeeRoute = '/coffee'

let id = '61fbfa981c39baa60bca2f3b'

let coffee = {
    brand: random,
    taste: random,
    strength: random,
    organic: true
}

const testExistingRoute = () => {
    describe('test existing route', () => {
        test('expecting status 200', (done) => {
            Chai.request(app)
                .get('/')
                .end((req, res) => {
                    expect(res.status).to.deep.equal(200)
                    done()
                })
        })
    })
}

const testOfNonExistingRoute = () => {
    describe('test of non existing route', () => {
        test('expecting status 404', (done) => {
            Chai.request(app)
                .get('/coffee')
                .end((req, res) => {
                    res.should.have.a.status(404)
                    done()
                })
        })
    })
}

const createCoffee = () => {
    describe('test method (POST) create in database', () => {
        test('expecting to create coffee entity', (done) => {
            Chai.request(ExpressApp)
                .post(`${coffeeRoute}`)
                .send(coffee)
                .end((error, response) => {
                    id = response.body.id
                    expect(response.body).be.a('object')
                    done()
                })
        })
    })
}

const getCoffee = () => {
    describe('test method (GET) read in database', () => {
        test('expecting to create coffee entity', (done) => {
            Chai.request(app)
                .get(`${coffeeRoute}`)
                .end((error, response) => {
                    id = response.body.id
                    response.should.have.a.status(200)
                    console.log(response)
                    done()
                })
        })
    })
}

describe('Testing Coffee API', () => {
    createCoffee()
    getCoffee()
    testOfNonExistingRoute()
    testExistingRoute()
})
