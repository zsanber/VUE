let server = require('../index.js');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('API TESTS', () => {
    it('Post a new secret and get it back with hash', (done) => {
        let secret = {
            secret: "A kulcsot a kaspó alatt tartom", 
            remainingViews: 2
        }
        //GET /api/secret/ - It should post a new secret
        chai.request(server)
            .post('/api/secret/')
            .send(secret)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('hash');
                response.body.should.have.property('secret');
                response.body.should.have.property('remainingViews');
                response.body.should.have.property('expiresAt');
                response.body.should.have.property('createdAt');
                done();
            });
        
        //GET /api/secret/:hash  - It should return the secret based hash value
        chai.request(server)
            .get('/api/secret/' + secret.hash)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('hash');
                response.body.should.have.property('secret');
                response.body.should.have.property('remainingViews');
                response.body.should.have.property('expiresAt');
                response.body.should.have.property('createdAt');
            done();
            });
    });
});