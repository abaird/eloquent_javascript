require('chai');
var expect = require('chai').expect;

describe('higher order functions', function() {
  it('should sum a bunch of numbers', function() {
    var numbers = [1, 2, 3, 4, 5], sum = 0;
    numbers.forEach(function(number) {
      sum += number;
    });
    expect(sum).to.equal(15);
  });
});

function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}
var greaterThan10 = greaterThan(10);

describe('greaterThan', function() {
  it('11 > 10', function() {
    expect(greaterThan10(11)).to.equal(true);
  })
});

function noisy(f) {
  return function(arg) {
    console.log('calling with', arg);
    var val = f(arg);
    console.log('called with', arg, '- got', val);
    return val;
  };
}

describe('noisy', function() {
  it('should test the function', function() {
    expect(noisy(Array)(0)).to.be.an('array');
    expect(noisy(Boolean)(0)).to.equal(false);
    expect(noisy(Boolean)(1)).to.equal(true);
    expect(noisy(greaterThan10)(11)).to.equal(true);
  })
});

function unless(test, then) {
  if (!test) then();
}
function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

describe('repeat', function() {
  it('should exercise repeat', function() {
    var ary = [];
    repeat(3, function(n) {
      // 2 % 2 = 0 which evaluates to false
      unless(n % 2, function() {
        ary.push(n);
      })
    });
    expect(ary[0]).to.equal(0);
    expect(ary[1]).to.equal(2);
    expect(ary.length).to.equal(2);
  })
});
