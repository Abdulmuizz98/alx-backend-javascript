const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./5-payment');

describe('Utils', function(){
    describe('sendPaymentRequestToApi', function(){
        let consoleSpy;

        beforeEach(() => {
            consoleSpy = sinon.spy(console, 'log');
            // calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
          });
        
        afterEach(() => {
            consoleSpy.restore();
            // calculateNumberStub.restore();
          });

        it('should call the Utils.calculateNumber funcion with 100 and 20 as a and b', function(){
            sendPaymentRequestToApi(100, 20);

            // expect(calculateNumberStub.calledOnce).to.be.true;
            // expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
            expect(consoleSpy.calledOnce).to.be.true;
            expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
          })
          
          it('should call the Utils.calculateNumber funcion with 10 and 10 as a and b', function(){
            sendPaymentRequestToApi(10, 10);
            
            // expect(calculateNumberStub.calledOnce).to.be.true;
            // expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
            expect(consoleSpy.calledOnce).to.be.true;
            expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
        })
    });
})