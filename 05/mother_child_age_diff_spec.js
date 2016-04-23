require('chai');
var expect = require('chai').expect;

var json_util = require('./json_functions.js');

function child_difference(ancestry_data) {
  return ancestry_data.filter(json_util.valid_mother).map(json_util.mothers_age_at_childbirth);
}

describe('mother-child age difference', function() {
  it('should be close to 31.2', function() {
    expect(json_util.average(child_difference(json_util.ancestry))).to.be.closeTo(31.2, 0.03)
  });
});
