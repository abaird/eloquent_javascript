function Tiger() {
  this.energy = 20;
}

Tiger.prototype.act = function(view) {
  var space = view.find(' ');
  if (this.energy > 60 && space) {
    return {type: 'reproduce', direction: space};
  }
  var hippo = view.find('O');
  if (hippo) {
    return {type: 'eat', direction: hippo};
  }
  if (space)
    return {type: 'move', direction: space};
}

module.exports = Tiger;
