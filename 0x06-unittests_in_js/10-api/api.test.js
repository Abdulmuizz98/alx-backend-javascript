const request = require('request');
const {expect} = require('chai');

describe('Cart page', function(){
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
    it('should send correct status code when :id is a number', function(done){
        request('http://localhost:7865/cart/16', (err, res, body) =>{
            expect(res.statusCode).to.be.equal(200);
            done();
        })
    })
    it('should send correct response body when :id is a number', function(done){
        request('http://localhost:7865/cart/16', (err, res, body) =>{
            expect(body).to.be.equal('Payment methods for cart 16');
            // expect(res.statusCode).to.be.equal(200);
            done();
        })
    })
    it('should send correct status code when :id is not a number', function(done){
        request('http://localhost:7865/cart/wrong', (err, res, body) =>{
            expect(res.statusCode).to.be.equal(404);
            done();
        })
    })
})

describe('GET/ available_payments page', function(){
    it('should send correct status code 200 ', function(done){
        request('http://localhost:7865/available_payments', (err, res, body) =>{
            expect(res.statusCode).to.be.equal(200);
            done();
        })
    })
    it('should send correct response body', function(done){
        request('http://localhost:7865/available_payments', (err, res, body) =>{
            const obj = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            }
            expect(body).to.be.equal(JSON.stringify(obj));
            done();
        })
    })
});

describe('POST/ login page', function(){
    it('should send correct status code 201', function(done){
        request({ 
            method: 'POST',
            url: 'http://localhost:7865/login', 
            json: {userName: 'betty'}
        }, (err, res, body) =>{
            expect(res.statusCode).to.be.equal(201);
            done();
        })
    })
    // it('should send correct response body', function(done){
    //     request.post({ 
    //         url: 'http://localhost:7865/login', 
    //         body: "userName=betty"
    //     }, (err, res, body) =>{  
    //         expect(body).to.be.equal('Welcome betty');
    //         done();
    //     })
    // })
    it('should send correct response body', function(done){
        request({ 
            method: 'POST',
            url: 'http://localhost:7865/login', 
            json: {userName: 'betty'}
        }, (err, res, body) =>{  
            expect(body).to.be.equal('Welcome betty');
            done();
        })
    })
});