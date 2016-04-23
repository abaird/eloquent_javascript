console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
console.log([1, 2, 3, 2, 1].indexOf(2, 2));
console.log("***************************************");
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
console.log("***************************************");
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
console.log("***************************************");
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log("one two three".indexOf("ee"));
// → 11
console.log("  okay \n ".trim());
// → okay
var string = "abc";
console.log(string.length);
// → 3
console.log(string.charAt(0));
// → a
console.log(string[1]);
// → b
console.log("***************************************");
JOURNAL = [];
function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
  JOURNAL.push(entry);
}
addEntry(true, "work", "touched tree", "pizza",
  "running", "television");
console.log(JOURNAL);
console.log("****************************************");
function randomPointOnCircle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  };
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}
console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138
console.log(Math.random());
// → 0.40180766698904335
console.log(Math.floor(Math.random() * 10));
// → 2
// Also ceil exists

