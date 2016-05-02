var Utils = require('./common');

var BouncingCritter = function BouncingCritter() {
  this.direction = Utils.randomElement(Utils.directionNames);
}

BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != ' ')
    this.direction = view.find(' ') || 's';
  return {type: 'move', direction: this.direction};
};

module.exports = BouncingCritter;
