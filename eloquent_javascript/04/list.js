function arrayToList(ary) {
  var list = {};
  if (ary.length == 1) {
    list.value = ary[0];
    list.rest = null;
  } else {
    list.value = ary.shift();
    list.rest = arrayToList(ary);
  }
  return list;
}

function listToArray(list) {
  var ary = [];
  if (list.rest == null) {
    ary.push(list.value);
  } else {
    ary.push(list.value);
    ary = ary.concat(listToArray(list.rest));
  }
  return ary;
}

function prepend(element, list) {
  list = {
    value: element,
    rest: list
  };
  return list;
}

function nth(list, number) {
  if (number == 0) {
    return list.value;
  } else if (list.rest == null) {
    return undefined
  } else {
    return nth(list.rest, number - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
var my = arrayToList([1, 2, 3, 4, 5]);
console.log(JSON.stringify(my, null, 4));
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30]), 5));
// -> undefined
