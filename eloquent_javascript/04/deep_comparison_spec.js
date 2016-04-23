require('chai');
var expect = require('chai').expect;
var deepEqual = require('./deep_comparison');

var obj = {here: {is: 'an'}, object: 2};
var obj1 = {here: null};
var obj2 = {here: null, is: null};
var obj3 = {mack: 10, truck: 20};
var obj4 = {mack: 10, truck: 30};

describe('deep comparison', function() {
  it('should return true when comparing the same object', function() {
    expect(deepEqual(obj, obj)).to.equal(true);
  });
  it('should return false when comparing to an object with the same top level keys', function() {
    expect(deepEqual(obj, {here: 1, object: 2})).to.equal(false);
  });
  it('should return true when comparing the same object literal', function() {
    expect(deepEqual(obj, {here: {is: 'an'}, object: 2})).to.equal(true);
  });
  it('should return false when comparing objects with different keys', function() {
    expect(deepEqual(obj1, obj2)).to.equal(false);
  });
  it('should return true when compared with itself', function() {
    expect(deepEqual(obj1, obj1)).to.equal(true);
  });
  it('should return true when compared with an object with number values', function() {
    expect(deepEqual(obj3, obj3)).to.equal(true);
  });
  it('should return false when compared with a different object with number values', function() {
    expect(deepEqual(obj3, obj4)).to.equal(false);
  });
  it('should return true when both are null', function() {
    expect(deepEqual(null, null)).to.equal(true);
  });
  it('should return false when the second is null', function() {
    expect(deepEqual(null, obj1)).to.equal(false);
  });
});

describe('stringify comparison', function() {
  it('should return true when comparing the same object', function() {
    expect(JSON.stringify(obj) === JSON.stringify(obj)).to.equal(true);
  });
  it('should return false when comparing different objects', function() {
    expect(JSON.stringify(obj) === JSON.stringify(obj1)).to.equal(false);
  });
  it('should return true when comparing a different object', function() {
    expect(JSON.stringify(obj1) === JSON.stringify(obj1)).to.equal(true);
  });
});
