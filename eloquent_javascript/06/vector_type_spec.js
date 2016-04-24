require('chai');
var expect = require('chai').expect;

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  var new_x = this.x + vector.x;
  var new_y = this.y + vector.y;
  return new Vector(new_x, new_y);
};

Vector.prototype.minus = function(vector) {
  var new_x = this.x - vector.x;
  var new_y = this.y - vector.y;
  return new Vector(new_x, new_y);
}

// Vector.prototype.length = function(){
//  return (Math.sqrt((this.x * this.x) + (this.y * this.y)));
// };
// if you use the above, it returns a function and you have to call it with ()'s

Object.defineProperty(Vector.prototype, 'length', {
  get: function() {
    return (Math.sqrt((this.x * this.x) + (this.y * this.y)));
  }
});

describe('vector', function() {
  it('should exercise plus, minus and length', function() {
    var added = new Vector(1,2).plus(new Vector(2,3));
    expect(added).to.have.property('x',3);
    expect(added).to.have.property('y',5);
    var subtracted = new Vector(1,2).minus(new Vector(2,3));
    expect(subtracted).to.have.property('x',-1);
    expect(subtracted).to.have.property('y',-1);
    expect(new Vector(3,4).length).to.equal(5);
  });
});
