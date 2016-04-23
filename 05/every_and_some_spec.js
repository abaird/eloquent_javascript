require('chai');
var expect = require('chai').expect;

function every(ary, f) {
  for (var i = 0; i < ary.length; i++) {
    if (!f(ary[i])) {
      return false
    }
  }
  return true
}

function some(ary, f) {
  for (var i = 0; i < ary.length; i++) {
    if (f(ary[i])) {
      return true
    }
  }
  return false
}

describe('every and some', function() {
  it('should exercise every', function() {
    expect(every([NaN, NaN, NaN, NaN], isNaN)).to.equal(true);
    expect(every([NaN, NaN, 4], isNaN)).to.equal(false);
  });
  it('should exercise some', function() {
    expect(some([NaN, 3, 4], isNaN)).to.equal(true);
    expect(some([2, 3, 4], isNaN)).to.equal(false);
  })
});
