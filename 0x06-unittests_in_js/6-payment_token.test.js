
const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token")

describe('getPaymentTokenFromAPI', function(){
    it('should get the payment token for the API like {data: xxx} ', function(done){
        let result = getPaymentTokenFromAPI(true);
        result
            .then(res => {
                expect(res).to.have.property('data')
                expect(res.data).to.be.equal('Successful response from the API');
                done();
            })
    })
})