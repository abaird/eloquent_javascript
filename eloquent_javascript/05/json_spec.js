require('chai');
var expect = require('chai').expect;

var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

var json_util = require('./json_functions.js');

describe('ANCESTRY', function() {
  it('should exercise the filter function', function() {
    var result = json_util.filter(ancestry, function(person) {
      return person.born > 1900 && person.born < 1925;
    });
    expect(result[0].name).to.equal('Philibert Haverbeke')
  });

  it('should exercise the map function', function() {
    var overNinety = ancestry.filter(function(person) {
      return person.died - person.born > 90;
    });
    var peopleOverNinety = json_util.map(overNinety, function(person) {
      return person.name;
    });
    expect(peopleOverNinety.length).to.equal(3);
    expect(peopleOverNinety[0]).to.equal('Clara Aernoudts');
  });

  it('should exercise the reduce function', function() {
    var sum = json_util.reduce([1, 2, 3, 4, 5], function(a, b) {
      return a + b;
    }, 1);
    expect(sum).to.equal(16);
    var oldest_ancestor = ancestry.reduce(function(min, cur) {
      if (cur.born < min.born) {
        return cur;
      } else {
        return min;
      }
    });
    expect(oldest_ancestor.name).to.equal('Pauwels van Haverbeke');
    expect(oldest_ancestor.born).to.equal(1535);
  });

  it('should find the average ages of males and females', function() {
    var average_male = json_util.average(ancestry.filter(json_util.male).map(json_util.age));
    var average_female = json_util.average(ancestry.filter(json_util.female).map(json_util.age));
    expect(average_male).to.be.closeTo(62, 0.5);
    expect(average_female).to.be.closeTo(55, 0.5);
  });

  it('should find percent shared DNA', function() {
    var byName = {};
    ancestry.forEach(function(person) {
      byName[person.name] = person;
    });
    function reduceAncestors(person, f, defaultValue) {
      function valueFor(person) {
        if (person == null) {
          return defaultValue;
        } else {
          return f(person, valueFor(byName[person.mother]),
            valueFor(byName[person.father]));
        }
      }

      return valueFor(person);
    }

    function sharedDNA(person, fromMother, fromFather) {
      if (person.name == 'Pauwels van Haverbeke') {
        return 1;
      } else {
        return (fromMother + fromFather) / 2;
      }
    }

    var ph = byName['Philibert Haverbeke'];
    expect(reduceAncestors(ph, sharedDNA, 0) / 4).to.be.closeTo(0.00049, 0.00001)
  });

  it('should exercise the bind function', function() {
      var theSet = ['Carel Haverbeke', 'Maria van Brussel', 'Donald Duck'];

      function isInSet(set, person) {
        return set.indexOf(person.name) > -1;
      }

      expect(ancestry.filter(function(person) {
        return isInSet(theSet, person);
      }).length).to.equal(2);
      expect(ancestry.filter(isInSet.bind(null, theSet)).length).to.equal(2);
    }
  )
});

