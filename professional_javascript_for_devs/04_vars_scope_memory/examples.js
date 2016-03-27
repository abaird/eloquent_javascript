var obj1 = {};
var obj2 = obj1;
obj1.name = "Alan";
console.log(obj2.name);

function addTen(num) {
  num += 10;
  return num;
}

// primitives passed as args are copies
var count = 20;
var result = addTen(count);
console.log(count);
console.log(result);

// here the object passed in is modified in place
// however, this DOES NOT mean it's passed by reference
function setName(obj) {
  obj.name = "Alan";
}

var person = {};
setName(person);
console.log(person.name);

function funkySetName(obj) {
  obj.name = "Alan";
  obj = {};
  obj.name = "Foo";
}

var person = {};
funkySetName(person);
console.log(person.name);  // returns "Alan"
// here the object is overwitten in funkySetName which,
// if it were passed by reference, person.name would be
// "Foo" instead of "Alan"

// determining instance type of an object
console.log(1 instanceof Object);
console.log([1, 2, 3] instanceof Array);

// scope

var location = {};
location.url = 'something';
location.href = 'yahoo.com';
console.log(location.url);
console.log(location.href);
function buildUrl() {
  var qs = "?debug=true";
  with (location) {
    var url = href + qs;
  }
  return url;
}

console.log(buildUrl());  // this returns undefined - not sure why

// more strangeness
// - curly braces don't define a scope here:
if (true) {
  var color = "blue";
}
console.log(color);

// same here
for (var i = 0; i < 10; i++) {
  //no op
}
console.log(i);
