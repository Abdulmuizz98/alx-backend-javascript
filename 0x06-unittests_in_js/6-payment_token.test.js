
const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token")

describe('getPaymentTokenFromAPI', function(done){
    it('should get the payment token for the API like {data: xxx} ', function(){
        getPaymentTokenFromAPI(true)
        .then( res => {
            expect(res).to.have.property('data')
            expect(res).to.be.equal(1);
            done();
        })
    })
})