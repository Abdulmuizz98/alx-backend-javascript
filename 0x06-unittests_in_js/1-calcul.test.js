const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', function(){
    it('should round and add then return 6', function(){
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    })
    it('should round and subtract then return -4', function(){
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })
    it('should round and divide then return 0.2', function(){
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })
    it('should round and divide then return Error', function(){
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    })
});