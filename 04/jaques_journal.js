var JOURNAL = require('./jacques_journal_data.js');

var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(["work", "touched tree", "pizza", "running",
  "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
  "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
  "beer"], true);

console.log(journal);
//console.log(JOURNAL);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table
}

console.log(tableFor("pizza", JOURNAL));
console.log(phi(tableFor("pizza", JOURNAL)));
console.log(phi(tableFor("peanuts", JOURNAL)));

console.log("******************************");
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);
console.log(map);

for (var foo in map) {
  console.log("The correlation for '" + foo +
    "' is " + map[foo]);
}

console.log("*******************************");

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

for (var foo in correlations) {
  console.log(foo + "\t\t\t\t: " + correlations[foo]);
}

console.log("**********************************");
console.log("filtering out non-correlated events");
for (var event in correlations) {
  if (correlations[event] <= 0.1 && correlations[event] >= -0.1) {
    //skip
  } else {
    console.log(event + "\t\t\t\t: " + correlations[event]);
  }
}

// stuff a new event "peanut teeth" in the journal when both peanuts and
// not brushed teeth are present
for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry)) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
