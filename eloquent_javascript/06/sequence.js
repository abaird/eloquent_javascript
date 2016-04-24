//require('chai');
//var expect = require('chai').expect;
//
//describe('sequence', function() {
//  it('', function() {
//   expect().to.equal();
//  });
//});

function ArraySeq(array) {
  this.array = array;
  this.pos = -1;
}

ArraySeq.prototype.next = function() {
  if(this.pos >= this.array.length -1) {
    return false
  }
  this.pos++;
  return true;
};

ArraySeq.prototype.current = function() {
  return this.array[this.pos];
}

function RangeSeq(from, to) {
  this.to = to;
  this.pos = from - 1;
}

RangeSeq.prototype.next = function() {
  if(this.pos >= this.to) {
    return false
  }
  this.pos++;
  return true;
};

RangeSeq.prototype.current = function() {
  return this.pos;
}

function logFive(sequence) {
  var limit = 5;
  for(var i = 0; i < limit; i++) {
    if (!sequence.next()) {
      break;
    }
    console.log(sequence.current());
  }
}

logFive(new ArraySeq([1,2,3,4,5,6,7]));
logFive(new ArraySeq([1,2]));
logFive(new RangeSeq(0,5));
logFive(new RangeSeq(100,200));
