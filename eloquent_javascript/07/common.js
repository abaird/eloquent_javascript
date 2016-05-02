var Vector = require('./vector');
var Wall = require('./wall');
var Plant = require('./plant');
var PlantEater = require('./plant_eater')

var Utils = {};

Utils.directions = {
//app.directions = {
  'n':  new Vector( 0, -1),
  'ne': new Vector( 1, -1),
  'e':  new Vector( 1,  0),
  'se': new Vector( 1,  1),
  's':  new Vector( 0,  1),
  'sw': new Vector(-1,  1),
  'w':  new Vector(-1,  0),
  'nw': new Vector(-1, -1)
};

Utils.randomElement = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

Utils.directionNames = 'n ne e se s sw w nw'.split(' ');

Utils.elementFromChar = function(legend, ch) {
  if (ch == ' ')
    return null;
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}

Utils.charFromElement = function(element) {
  if (element == null)
    return ' ';
  else
    return element.originChar;
};

Utils.dirPlus = function(dir, n) {
  var index = Utils.directionNames.indexOf(dir);
  return Utils.directionNames[(index + n + 8) % 8];
};

module.exports = Utils;
