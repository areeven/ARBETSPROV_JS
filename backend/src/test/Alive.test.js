import Chai from 'chai'
import {describe, it as test} from 'mocha'
import StatusCode from '../configuration/StatusCode.js'
import app from '../Server.js'
import chaiHttp from 'chai-http'

Chai.use(chaiHttp)
const expect = Chai.expect

describe('API Alive Request', () => {
    test('should return API is Alive!', () => {
        Chai.request(app)
            .get('/')
            .then((response) => {
                expect(response.status).to.equal(StatusCode.OK)
                expect(response.text).to.eql('API is Alive!')
            })
    })
})