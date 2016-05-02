var Utils = require('./common');
var Vector = require('./vector');
var Grid = require('./grid');
var View = require('./view');
var Plant = require('./plant');

var World = function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++)
      grid.set(new Vector(x, y),
        Utils.elementFromChar(legend, line[x]));
  });
}

World.prototype.toString = function() {
  var output = '';
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += Utils.charFromElement(element);
    }
    output += '\n';
  }
  return output;
};

World.prototype.turn = function() {
  var acted = [];
  this.grid.forEach(function(critter, vector) {
    if (critter.act && acted.indexOf(critter) == -1) {
      acted.push(critter);
      this.letAct(critter, vector);
    }
  }, this);  // note the change in scope
};

World.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));
  if (action && action.type == 'move') {
    var dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null);
      this.grid.set(dest, critter);
    }
  }
};

World.prototype.checkDestination = function(action, vector) {
  if (Utils.directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(Utils.directions[action.direction]);
    if (this.grid.isInside(dest))
      return dest;
  }
};

module.exports = World;
