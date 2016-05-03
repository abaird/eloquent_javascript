function promptDirection(question) {
  var result = myPrompt(question, '');
  if (result.toLowerCase() == 'left') return 'L';
  if (result.toLowerCase() == 'right') return 'R';
  throw new Error('Invalid direction: ' + result);
}

function look() {
  if (promptDirection('Which way?') == 'L')
    return 'a house';
  else
    return 'two angry bears';
}

function myPrompt(args) {
  return 'foo';
}

try {
  console.log('You see', look());
} catch (error) {
  console.log('Something went wrong: ' + error);
}

var context = null;
function withContext(newContext, body) {
  var oldContext = context;
  context = newContext;
  try {
    return body();
  } finally {
    context = oldContext;
  }
}

try {
  withContext(5, function() {
    if (context < 10)
      throw new Error('Not enough context!');
  });
} catch (e) {
  console.log('Ignoring: ' + e);
}

console.log(context);

function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = 'InputError';

function promptDirection(question) {
  var result = myPrompt(question, '');
  if (result.toLowerCase() == 'left') return 'L';
  if (result.toLowerCase() == 'right') return 'R';
  throw new InputError('Invalid direction: ' + result);
}

for (var i=0 ; i < 10 ; i++) {
  try {
    var dir = promptDirection('Where?');
    console.log('You chose ', dir);
    break;
  } catch (e) {
    if (e instanceof InputError)
      console.log('Not a valid direction. Try again.');
    else
      throw e;
  }
}

function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, 'empty array in lastElement');
  return array[array.length - 1];
}
