function SmartPlantEater() {
  this.energy = 20;
  this.turns_since_reproduction = 0;
  this.since_i_ate_last = 0;
}

SmartPlantEater.prototype.act = function(view) {
  var space = view.find(' ');
  this.turns_since_reproduction++;
  this.since_i_ate_last++;
  if (this.energy > 60 && space && this.turns_since_reproduction > 30) {
    this.turns_since_reproduction = 0;
    return {type: 'reproduce', direction: space};
  }
  var plant = view.find('*');
  if (plant && this.since_i_ate_last > 15) {
    this.since_i_ate_last == 0;
    return {type: 'eat', direction: plant};
  }
  if (space)
    return {type: 'move', direction: space};
}

module.exports = SmartPlantEater;
