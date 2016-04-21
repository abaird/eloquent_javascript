function range(start, end, step) {
  ary = [];
  if (arguments.length < 3) {
    step = (start < end) ? 1 : -1;
  }
  for (var i = start; (step > 0) ? i <= end : i >= end; i = i + step) {
    ary.push(i);
  }
  return ary
}

function sum(ary) {
  result = 0;
  for (var i = 0; i < ary.length; i++) {
    result = result + ary[i];
  }
  return result
}

console.log(range(1, 10));
console.log(range(5, 10, 2));
console.log(range(5, 2, -2));
console.log(range(5, 2));
console.log(range(100, 0, -10));
console.log(range(0, 100, 10));
console.log(sum(range(1, 10)));

