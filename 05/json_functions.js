function filter(array, test) {
  var passed = [];
  // not using forEach here because we need i
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++) {
    mapped.push(transform(array[i]));
  }
  return mapped;
}

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++) {
    current = combine(current, array[i]);
  }
  return current;
}

function average(array) {
  function plus(a, b) {
    return a + b;
  }

  return array.reduce(plus) / array.length;
}

function age(p) {
  return p.died - p.born;
}

function male(p) {
  return p.sex == 'm';
}

function female(p) {
  return p.sex == 'f';
}

module.exports = {
  filter: filter,
  map: map,
  reduce: reduce,
  average: average,
  age: age,
  male: male,
  female: female
};

