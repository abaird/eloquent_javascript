(function() {
  function square(x) { return x * x; }
  var hundred = 100;

  console.log(square(hundred));
})();

var weekDay = function() {
  var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}();

console.log(weekDay.name(weekDay.number('Sunday')));

(function(exports) {
  var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(this.weekDay = {});  // this last pair () sends the argument to the hidden function

console.log(weekDay.name(weekDay.number('Saturday')));

// readFile not implemented in Node???
// function ej_require(name) {
//   var code = new Function("exports", readFile(name));
//   var exports = {};
//   code(exports);
//   return exports;
// }

//console.log(ej_require("weekDay").name(1));


// oh that this chapter were more on implementation details and less on how the internals of
// require and define work. Why do I care about that, I just want to use them
