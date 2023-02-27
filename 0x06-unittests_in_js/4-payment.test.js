const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment');

describe('Utils', function(){
    describe('sendPaymentRequestToApi', function(){
        let consoleSpy, calculateNumberStub;

        beforeEach(() => {
            consoleSpy = sinon.spy(console, 'log');
            calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
          });
        
        afterEach(() => {
            consoleSpy.restore();
            calculateNumberStub.restore();
          });

        it('should use the Utils.calculateNumber funcion', function(){
            sendPaymentRequestToApi(100, 20);

            expect(calculateNumberStub.calledOnce).to.be.true;
            expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
            expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
        })
    });
})