console.log('******************* METHODS ***********************');

var rabbit = {};
rabbit.speak = function(line) {
  console.log("The rabbit says '" + line + "'");
};

rabbit.speak("I'm alive.");

function speak(line) {
  console.log('The ' + this.type + " rabbit says '" +
    line + "'");
}
var whiteRabbit = {type: 'white', speak: speak};
var fatRabbit = {type: 'fat', speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak('I could sure use a carrot right now.');

speak.apply(fatRabbit, ['Burp!']);
// call is like apply, but doesn't take args as an array
speak.call({type:'old'}, 'Oh my.');

console.log('******************* PROTOTYPES ************************');
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

var protoRabbit = {
  speak: function(line) {
    console.log('The ' + this.type + " rabbit says '" +
      line + "'");
  }
};
// this is a strange way of doing this
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('SKREEEE!');

console.log('********************* CONSTRUCTORS *********************');
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit('killer');
var blackRabbit = new Rabbit('black');
console.log(blackRabbit.type);

Rabbit.prototype.speak = function(line) {
  console.log('The ' + this.type + " rabbit says '" +
    line + "'");
};
blackRabbit.speak('Doom...');

console.log('******************** OVERRIDING DERIVED PROPERTIES *****************');
Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth);
killerRabbit.teeth = 'long, sharp, and bloody';
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

Rabbit.tail = 'fluffy';
console.log(killerRabbit.tail);
console.log(Rabbit.tail);

console.log(Array.prototype.toString ==  Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call([1, 2]));

console.log('******************** PROTOTYPE INTERFERENCE ************************');
// when you iterate with for/in, put a .hasOwnProperty() guard in for it
// or use this:
var map = Object.create(null);
map['pizza'] = 0.069;
console.log('toString' in map);
console.log('pizza' in map);

console.log('******************* POLYMORPHISM *********************************');



//var test_rows = [['one'], ['two'], ['three'], ['four'], ['five'], ['six'], ['seven']];
//console.log(rowHeights(test_rows));

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

var rows = [];
for (var i = 0; i < 5; i++) {
  var row = [];
  for (var j = 0; j < 5; j++) {
    if ((j + i) % 2 == 0)
      row.push(new TextCell('##'));
    else
      row.push(new TextCell('  '));
  }
  rows.push(row);
}
//console.log(rows);
console.log(drawTable(rows));

var MOUNTAINS = [
  {name: 'Kilimanjaro', height: 5895, country: 'Tanzania'},
  {name: 'Everest', height: 8848, country: 'Nepal'},
  {name: 'Mount Fuji', height: 3776, country: 'Japan'},
  {name: 'Mont Blanc', height: 4808, country: 'Italy/France'},
  {name: 'Vaalserberg', height: 323, country: 'Netherlands'},
  {name: 'Denali', height: 6168, country: 'United States'},
  {name: 'Popocatepetl', height: 5465, country: 'Mexico'}
];

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
  TextCell.call(this,text);
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

console.log(drawTable(dataTable(MOUNTAINS)));

console.log('******************** GETTERS AND SETTERS **********************');
var pile = {
  elements: ['eggshell', 'orange peel', 'worm'],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log('Ignoring attempt to set height to', value);
  }
};

console.log(pile.height);
pile.height = 100;

Object.defineProperty(TextCell.prototype, 'heightProp', {
  get: function() { return this.text.length; }
});

var cell = new TextCell('no\nway');
console.log(cell.heightProp);
// this is ignored because there is no setter
cell.heightProp = 100;
console.log(cell.heightProp);

console.log('******************* INHERITANCE *********************************');
// see RTextCell above



console.log('****************** INSTANCEOF *********************************');
console.log(new RTextCell('A') instanceof RTextCell);
console.log(new RTextCell('A') instanceof TextCell);
console.log(new TextCell('A') instanceof RTextCell);
console.log([1] instanceof Array);
