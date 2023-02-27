
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', function(){
    it('should round and add then return 6', function(){
        // expect(calculateNumber)
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    })
    it('should round and subtract then return -4', function(){
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    })
    it('should round and divide then return 0.2', function(){
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    })
    it('should round and divide then return Error', function(){
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    })
});