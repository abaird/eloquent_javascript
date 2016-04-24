require('chai');
var expect = require('chai').expect;

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function rowHeights(rows) {
    return rows.map(function(row) {
      return row.reduce(function(max, cell) {
        return Math.max(max, cell.minHeight());
      }, 0);
    });
  }

  function colWidths(rows) {
    return rows[0].map(function(_, i) {
      return rows.reduce(function(max, row) {
        return Math.max(max, row[i].minWidth());
      }, 0);
    });
  }

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(' ');
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join('\n');
  }

  return rows.map(drawRow).join('\n');
}

function repeat(string, times) {
  var result = '';
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

// Make a TextCell function (kind of like a Class declaration in Ruby)
function TextCell(text) {
  this.text = text.split('\n');
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  }
  return result;
};


function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat('-', width)]);
};

// from section on inheritance
function RTextCell(text) {
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || '';
    result.push(repeat(' ', width - line.length) + line);
  }
  return result
}

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      var value = row[name];
      if (typeof value == 'number')
        return new RTextCell(String(value));
      else
        return new TextCell(String(value));
    });
  });
  return [headers].concat(body);
}

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  if (this.inner.minWidth() > this.width) {
    return this.inner.minWidth();
  }else{
    return this.width;
  }
}

StretchCell.prototype.minHeight = function() {
  if (this.inner.minHeight() > this.height) {
    return this.inner.minHeight();
  }else{
    return this.height;
  }
}

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
}

var sc = new StretchCell(new TextCell('abc'), 1, 2);

describe('StretchCell', function() {
  it('minwidth should be 3', function() {
    expect(sc.minWidth()).to.equal(3);
  });
  it('minHeight should be 2', function() {
    expect(sc.minHeight()).to.equal(2);
  });
  it('draw should return a cell', function() {
    expect(sc.draw(3,2)).to.eql(['abc', '   ']);
  });
});
