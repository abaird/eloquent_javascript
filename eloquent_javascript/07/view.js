var Utils = require('./common.js');

var View = function View(world, vector) {
  this.world = world;
  this.vector = vector;
}
View.prototype.look = function(dir) {
  var target = this.vector.plus(Utils.directions[dir]);
  if (this.world.grid.isInside(target))
    return Utils.charFromElement(this.world.grid.get(target));
  else
    return '#';
};
View.prototype.findAll = function(ch) {
  var found = [];
  for (var dir in Utils.directions)
    if (this.look(dir) == ch)
      found.push(dir);
  return found;
};
View.prototype.find = function(ch) {
  var found = this.findAll(ch);
  if (found.length == 0) return null;
  return Utils.randomElement(found);
};

module.exports = View;
