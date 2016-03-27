//single line comment

/* block
 comment
 */

// to trigger strict mode put "use strict"; at the top of a file

//prefer
var test = true;
if (test) {
  console.log(test);
}
//to
if (test)
  console.log(test);

// declaring variables
// var intializes variables to undefined
var message;
var message = "hi";

// omitting var makes it a global variable

// DATA TYPES //
console.log("**************** DATA TYPES ******************");

// getting the type:
var message = "some string";
console.log(typeof message);   // "string"
console.log(typeof 98);        // "number"
console.log(typeof null);      // "object"
// possible return types: undefined, boolean, string, number, object, function

// use null for any time an object is expected but is not available

// Booleans
console.log("Booleans:");
console.log(Boolean(true));
console.log(Boolean(false));
console.log("Strings:");
console.log(Boolean("somestring"));
console.log(Boolean(''));
console.log("Numbers:");
console.log(Boolean(42));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log("Objects:");
console.log(Boolean({foo: 'bar'}));   //object
console.log(Boolean(null));
console.log("Undefined");
console.log(Boolean(undefined));

// Numbers
console.log("********************** Numbers **********************");
// Numbers can be both integers and floats
var floatNum = 1.1;
var floatNum2 = 0.1;
var intNum1 = 1;
var hexNum1 = 0xA;  //10
var octalNum1 = 088;
var convertNum1 = 1.;  // 1
var convertNum2 = 10.0;  // 10
var floatNumSci = 4.15e7;  // 41500000
var moreFloats = 0.2 + 0.1;
console.log(moreFloats);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(isFinite(Number.MAX_VALUE));
console.log(isFinite(Infinity));
console.log(isFinite(Number.MAX_VALUE + Number.MAX_VALUE));
console.log(0 / 0);
console.log(isNaN(NaN));       // true
console.log(isNaN(10));        // false
console.log(isNaN("blue"));    // true
console.log(isNaN("10,0000")); // true
console.log(isNaN("10"));      // false
console.log(isNaN(true));      // false

// Number conversion
console.log("******************** Number Conversion *******************");
console.log(Number(" Hello world!")); // NaN
console.log(Number("")); // 0
console.log(parseInt(""));  // NaN
console.log(Number(" 000011")); // 11
console.log(Number(true)); // 1
console.log(parseInt(" 1234blue")); // 1234
console.log(parseInt("")); // NaN
console.log(parseInt(" 0xA")); // 10 - hexadecimal
console.log(parseInt(22.5)); // 22
console.log(parseInt(" 70")); // 70 - decimal
console.log(parseInt(" 0xf")); // 15 - hexadecimal
console.log(parseInt("0xAF", 16)); // 175
console.log(parseInt("01010", 2)); // 10

// Strings
console.log("******************* String ***************************");
console.log('\u03a3');
console.log("supercalifragilisticexpialadocious".length);
console.log(true.toString());
var string_num = 10;
console.log(string_num.toString());    // "10"
console.log(string_num.toString(16));  // "a"
console.log(String(10));               // "10"
console.log(String(true));             // "true"
var foo;
console.log(String(foo));              // "undefined"

// Comparisons
console.log("******************* Comparison **********************");
// == uses type conversion, === is identity
console.log(null == undefined); // true
console.log("NaN" == NaN);      // false
console.log("555" == 555);      // true
console.log("555" === 555);     // false

