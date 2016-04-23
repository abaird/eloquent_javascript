var my_array = [1, 2, 3];
console.log(my_array[1]);
console.log(my_array["len" + "gth"]);
console.log(my_array.length);
console.log(my_array.indexOf(1));

console.log("***************************");

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
// → ["Mack", "the", "Knife"]
console.log(mack.join(" "));
// → Mack the Knife
console.log(mack.pop());
// → Knife
console.log(mack); //['Mack', 'the']
mack.unshift("banana");
console.log(mack);
mack.shift();
console.log(mack);

console.log("***************************");
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running",
    "television"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
console.log(day1.events[0]);

var descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
console.log(descriptions.work);

console.log("*****************************");
var anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
// The binary in operator, when applied to a string and an object,
// returns a Boolean value that indicates whether that object has that property
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
console.log("*****************************");
// string immutability
var animal = 'cat';
// this works be cause you are not trying to mutate the string, you are starting over with a new one
animal = 'rat';
console.log(animal);
console.log(animal[0]);
animal[0] = 'c';
console.log(animal);  // returns 'rat' not 'cat' since strings are immutable

console.log("******************************");
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
