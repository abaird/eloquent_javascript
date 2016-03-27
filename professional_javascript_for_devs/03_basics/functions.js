// the arguments object allows you to tell the length of the args passed
// to a function as well as access their values
// this object always keeps up with named args that are updated in the
// scope of the function
function howManyArgs() {
  console.log(arguments[0]);
  console.log(arguments.length);
}

howManyArgs(1, 2, 3);
howManyArgs();
howManyArgs("one", 2);

// all arguments in ECMAScript are passed by value. It is not possible
// to pass arguments by reference.