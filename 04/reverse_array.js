function reverseArray(ary) {
  var reversed_ary = [];
  for (var i = (ary.length - 1); i >= 0; i--) {
    reversed_ary.push(ary[i]);
  }
  return reversed_ary;
}

function reverseArrayInPlace(ary) {
  for (var i = 0; i < Math.floor(ary.length / 2); i++) {
    var tmp = ary[i];
    ary[i] = ary[ary.length - i - 1];
    ary[ary.length - i - 1] = tmp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
var arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


// the second way is more efficient since the number of iterations is half of n
// as opposed to all of n