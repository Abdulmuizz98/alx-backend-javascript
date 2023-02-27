const request = require('request');
const {expect} = require('chai');

describe('Index page', function(){
    
    it('should send correct status code', function(done){
        request('http://localhost:7865/', (err, res, body) =>{
            expect(res.statusCode).to.be.equal(200);
            done();
        })
    })
    it('should send a plain text message "Welcome to the payment system"', function(done){
        request('http://localhost:7865/', (err, res, body) =>{
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        })
    })
})