function isEven(num) {
  num = (num < 0) ? (num * -1) : num;
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}


console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));