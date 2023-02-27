const expect = require('chai').expect;
const sinon = require('sinon');
// const calculateNumber = require('./2-calcul_chai');
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment');

describe('Utils', function(){
    describe('sendPaymentRequestToApi', function(){
        it('should use the Utils.calculateNumber funcion', function(){
            sinon.spy(Utils, 'calculateNumber');
            sendPaymentRequestToApi(100, 20);

            expect(Utils.calculateNumber.calledOnce).to.be.true;
        })
    });
})