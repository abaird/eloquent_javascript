require('chai');
var expect = require('chai').expect;

var gen_data = require('./json_functions.js');

function life_expectancy(data) {
  var life_exp = data.map(gen_data.age_and_century);
  life_exp = gen_data.group_by(life_exp, 'century');
  for (var n in life_exp) {
    life_exp[n] = gen_data.average(life_exp[n].map(function(x) {
      return x.age;
    }));
  }
  return life_exp
}

describe('historical life expectancy', function() {
  it('should be several values per generation', function() {
    var results = life_expectancy(gen_data.ancestry);
    console.log(results);
    expect(results[16]).to.be.closeTo(43.5, 0.05);
    expect(results[17]).to.be.closeTo(51.2, 0.05);
    expect(results[18]).to.be.closeTo(52.8, 0.05);
    expect(results[19]).to.be.closeTo(54.8, 0.05);
    expect(results[20]).to.be.closeTo(84.7, 0.05);
    expect(results[21]).to.be.closeTo(94, 0.05);
  });
});
