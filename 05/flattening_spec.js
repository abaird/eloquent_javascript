require('chai');
var expect = require('chai').expect;

function flatten(ary) {
  return ary.reduce(function (total, element) {
    return total.concat(element);
  });
}

describe('flattening', function () {
  it('should flatten an array', function () {
    var test_ary = [[1, 2, 3], [4, 5], [6]];
    expect(flatten(test_ary)).to.eql([1, 2, 3, 4, 5, 6]);
  });
  it('should have no problems with a flatter array', function () {
    var test_ary = [[1, 2, 3], 4, 5, 6];
    expect(flatten(test_ary)).to.eql([1, 2, 3, 4, 5, 6]);
  });
  it('should flatten a 3 dimensional array', function () {
    //var test_ary = [[[1,2,3], 4, 5], 6];
    //expect(flatten(test_ary)).to.eql([1,2,3,4,5,6]);
  })
});