var Utils = require('./common');

var WallFollower = function WallFollower() {
  this.dir = 's';
}

WallFollower.prototype.act = function(view) {
  var start = this.dir;
  if (view.look(Utils.dirPlus(this.dir, -3)) != ' ')
    start = this.dir = dirPlus(this.dir, -2);
  while (view.look(this.dir) != ' ') {
    this.dir = Utils.dirPlus(this.dir, 1);
    if (this.dir == start) break;
  }
  return {type: 'move', direction: this.dir};
};

module.exports = WallFollower;
