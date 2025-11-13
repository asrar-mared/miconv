const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  test('Whole number input', function() {
    assert.equal(convertHandler.getNum('32L'), 32);
  });

  test('Decimal input', function() {
    assert.equal(convertHandler.getNum('3.1mi'), 3.1);
  });

  test('Fractional input', function() {
    assert.equal(convertHandler.getNum('1/2kg'), 0.5);
  });

  test('Invalid number input', function() {
    assert.equal(convertHandler.getNum('3/7.2/4kg'), 'invalid number');
  });

  test('Default number input', function() {
    assert.equal(convertHandler.getNum('kg'), 1);
  });

  test('Valid unit input', function() {
    assert.equal(convertHandler.getUnit('32L'), 'l');
  });

  test('Invalid unit input', function() {
    assert.equal(convertHandler.getUnit('32g'), 'invalid unit');
  });

});
