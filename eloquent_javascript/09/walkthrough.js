var re1 = new RegExp('abc');  // no need to escape "/"
var re2 = /abc/;

console.log(/abc/.test('abcde'));
console.log(/abc/.test('abxde'));

console.log(/[0123456789]/.test('in 1992'));
console.log(/[0-9]/.test('in 1992'));

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test('30-01-2003 15:20'));
console.log(dateTime.test('30-jan-2003 15:20'));

var notBinary = /[^01]/;
console.log(notBinary.test('1100100010100110'));
console.log(notBinary.test('1100100010200110'));

console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

var neighbor = /neighbou?r/;
console.log(neighbor.test('neighbour'));
// → true
console.log(neighbor.test('neighbor'));
// → true

var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test('30-1-2003 8:45'));
// → true

console.log('***************** GROUPING ************************');
var cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test('Boohoooohoohooo'));
// → true

var match = /\d+/.exec('one two 100');
console.log(match);
// → ["100"]
console.log(match.index);
// → 8

console.log('one two 100'.match(/\d+/));

var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
console.log(quotedText.exec("she said 'hello'").input);

console.log(/bad(ly)?/.exec('bad'));
// → ["bad", undefined]
console.log(/(\d)+/.exec('123'));
// → ["123", "3"]

console.log('************************ DATE ***********************');
console.log(new Date());
console.log(new Date(2009, 11, 9));
// → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)

console.log(new Date(2013, 11, 19).getTime());
// → 1387407600000
console.log(new Date(1387407600000));
// → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)
console.log(Date.now());

function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);
  return new Date(Number(match[3]),
                  Number(match[2]) -1,
                  Number(match[1]));
}
console.log(findDate('30-1-2003'));

console.log('********************* BOUNDARIES ***********************');
console.log(/cat/.test('concatenate'));
// → true
console.log(/\bcat\b/.test('concatenate'));
// → false
console.log(/\bcat/.test('category'));
// true

console.log('*********************** REPLACE ************************');
console.log('papa'.replace('p', 'm'));
// → mapa
console.log('Borobudur'.replace(/[ou]/, 'a'));
// → Barobudur
console.log('Borobudur'.replace(/[ou]/g, 'a'));
// → Barabadar

console.log(
  'Hopper, Grace\nMcCarthy, John\nRitchie, Dennis'
    .replace(/([\w ]+), ([\w ]+)/g, '$2 $1'));
// → Grace Hopper
//   John McCarthy
//   Dennis Ritchie
var s = 'the cia and fbi';
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
  return str.toUpperCase();
}));
// → the CIA and FBI

var stock = '1 lemon, 2 cabbages, and 101 eggs';
function minusOne(match, amount, unit) {
  amount = Number(amount) -1;
  if(amount ==1) {
    unit = unit.slice(0, unit.length -1);
  } else if (amount == 0) {
    amount = 'no';
  }
  return amount + ' ' + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

console.log('************************** GREED ***************************');
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, '');
}
console.log(stripComments('1 + /* 2 */3'));
// → 1 + 3
console.log(stripComments('x = 10;// ten!'));
// → x = 10;
console.log(stripComments('1 /* a */+/* b */ 1'));
// → 1  1
function betterStripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '');
}
console.log(betterStripComments('1 /* a */+/* b */ 1'));
// → 1 + 1

console.log('*************************** DYNAMIC CREATION *********************');
var name = 'harry';
var text = 'Harry is a supsicious character.';
var regexp = new RegExp('\\b(' + name + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_'));

var name = 'dea+hl[]rd';
var text = 'This dea+hl[]rd guy is super annoying.';
var escaped = name.replace(/[^\w\s]/g, '\\$&');   //\\$& is the whole match
var regexp = new RegExp('\\b(' + escaped + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_'));
// → This _dea+hl[]rd_ guy is super annoying.

console.log('**************************** SEARCH *****************************');
console.log('  word'.search(/\S/));
// → 2
console.log('    '.search(/\S/));
// → -1

var pattern = /y/g;
pattern.lastIndex = 3;
var match = pattern.exec('xyzzy');
console.log(match.index);
// → 4
console.log(pattern.lastIndex);
// → 5

var input = 'A string w/ 3 numbers in it...42 and 88.';
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input)) {
  console.log('Found', match[1], 'at', match.index);
}

console.log('**************************** INI ********************************');
function parseINI(string) {
  // Start with an object to hold the top-level fields
  var currentSection = {name: null, fields: []};
  var categories = [currentSection];

  string.split(/\r?\n/).forEach(function(line) {
    var match;
    if (/^\s*(;.*)?$/.test(line)) {
      return;
    } else if (match = line.match(/^\[(.*)\]$/)) {
      currentSection = {name: match[1], fields: []};
      categories.push(currentSection);
    } else if (match = line.match(/^(\w+)=(.*)$/)) {
      currentSection.fields.push({name: match[1],
        value: match[2]});
    } else {
      throw new Error("Line '" + line + "' is invalid.");
    }
  });

  return categories;
}

var my_ini = 'foo=bar\nbaz=bar\n; some comment\n[section header]\none=two\nthree=four';
console.log(parseINI(my_ini));
//
// A regular expression has a method test to test whether a given string matches it. It also has an exec method that,
//   when a match is found, returns an array containing all matched groups. Such an array has an index property that
// indicates where the match started.
//
// Strings have a match method to match them against a regular expression and a search method to search for one,
// returning only the starting position of the match. Their replace method can replace matches of a pattern with a
//   replacement string. Alternatively, you can pass a function to replace, which will be used to build up a replacement
// string based on the match text and matched groups.
