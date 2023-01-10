let server = require('../index.js');
let chai = require('chai');
let request = require('supertest'); //?????
const chaiHttp = require("chai-http");
const { response } = require('../index.js');
let should = chai.should();

chai.should(); //?????
chai.use(chaiHttp);

describe('API TESTS', function() {
    it('Post a new secret and get it back with hash', async function() {
        let secret = {
            secret: "A kulcsot a kaspó alatt tartom", 
            remainingViews: 2
        }
        //POST /api/secret/- should post a new secret
        var resp = await chai.request(server)
            .post('/api/secret/')
            .send(secret)

        resp.should.have.status(200);
        resp.body.should.be.a('object');
        resp.body.should.have.property('hash');
        resp.body.should.have.property('secret');
        resp.body.should.have.property('remainingViews');
        resp.body.should.have.property('expiresAt');
        resp.body.should.have.property('createdAt');

        var hash = resp.body.hash;
        console.log('/api/secret/' + hash)
        
        //GET /api/secret/:hash  - It should return the secret based the previously given hash value
        var resp =  chai.request(server)
            .get('/api/secret/' + hash)
            .end((err, resp) => {
            resp.should.have.status(200);
            resp.body.should.be.a('object');
            resp.body.should.have.property('hash');
            resp.body.should.have.property('secret');
            resp.body.should.have.property('remainingViews');
            resp.body.should.have.property('expiresAt');
            resp.body.should.have.property('createdAt');
            });
    });
});