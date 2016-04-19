var ageGroup = {30: "Children", 100: "Very Old"};
console.log(ageGroup[30]);
console.log(ageGroup["30"]);

// the primitive data type String is stored as a value
var person = "Kobe";
var anotherPerson = person;
person = "Bryant";

console.log(anotherPerson);  // Kobe
console.log(person);         // Bryant

// objects use save-as-reference
var person = {name: "Kobe"};
var anotherPerson = person;
person.name = "Bryant";

console.log(anotherPerson.name);  // Bryant
console.log(person.name);         // Bryant

// This is an empty object initialized using object literal notation
var myBooks = {};

// This is an object w/ 4 times, again using object literal
var mango = {
  color: "yellow",
  shape: "round",
  sweetness: 8,
  howSweetAmI: function () {
    console.log("MMMMMMM Good");
  }
};

mango.howSweetAmI();

// or use the Object constructor
var mango2 = {};
mango2.color = "yellow";
mango2.shape = "round";
mango2.sweetness = 8;
mango2.howSweetAmI = function () {
  console.log("how sweet am I");
};

mango2.howSweetAmI();

function Fruit(theColor, theSweetness, theFruitName, theNativeToLand) {
  this.color = theColor;
  this.sweetness = theSweetness;
  this.fruitName = theFruitName;
  this.nativeToLand = theNativeToLand;

  this.showName = function () {
    console.log("This is a " + this.fruitName);
  };

  this.nativeTo = function () {
    this.nativeToLand.forEach(function (eachCountry) {
      console.log("Grown in:" + eachCountry);
    })
  }
}

var mangoFruit = new Fruit("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName();
mangoFruit.nativeTo();

var pineappleFruit = new Fruit("Brown", 5, "Pineapple", ["United States"]);
pineappleFruit.showName();

var aMango = new Fruit();
aMango.mangoSpice = 'some value';
console.log(aMango.mangoSpice);
aMango.printStuff = function () {
  console.log("printing");
};
aMango.printStuff();

// Prototype pattern
function FruitA() {
}

FruitA.prototype.color = 'Yellow';
FruitA.prototype.sweetness = 7;
FruitA.prototype.fruitName = "Generic Fruit";
FruitA.prototype.nativeToLand = "USA";

FruitA.prototype.showName = function () {
  console.log("This is a " + this.fruitName);
};

FruitA.prototype.nativeTo = function () {
  console.log("Grown in: " + this.nativeToLand);
};

var mangoFruitA = new FruitA();
mangoFruitA.showName();
mangoFruitA.nativeTo();

console.log("**********************");
var school = {schoolName: "MIT", schoolAccredited: true, schoolLocation: "mass"};
console.log("schoolName" in school);
console.log("schoolType" in school);
console.log("toString" in school);
console.log(school.hasOwnProperty("schoolName"));
console.log(school.hasOwnProperty("toString"));
for (var eachItem in school) {
  console.log(eachItem);  //prints properties
}

console.log("**********************");
function HigherLearning() {
  this.educationLevel = "University";
}
// the educationLevel property is not actually inherited by objects that use the HigherLearning
// constructor; instead, the educationLevel property is created as a new property on each object
// that uses the HigherLearning constructor. The reason the property is not inherited is because
// we use of the "this" keyword to define the property.

var new_school = new HigherLearning();
new_school.schoolName = "MIT";
new_school.schoolAccredited = true;
new_school.schoolLocation = "Mass";

for (var eachItem in new_school) {
  console.log(eachItem);
}

console.log("************************");
var christmasList = {mike: 'Book', jason: 'sweater'};
delete christmasList.mike;
for (var prop in christmasList) {
  console.log(prop);
}
delete christmasList.toString;
console.log(christmasList.toString());

console.log(new_school.hasOwnProperty('educationLevel'));

delete new_school.educationLevel;
console.log(new_school.educationLevel);

var thisNewSchool = new HigherLearning();
console.log(thisNewSchool.educationLevel);
HigherLearning.prototype.educationLevel2 = "university 2";

console.log(new_school.hasOwnProperty("educationlevel2"));
console.log(new_school.educationLevel2);

delete new_school.educationLevel2;
console.log(new_school.educationLevel2);

console.log("***********************");
var myList = {mike: 'Book', jason: 'sweater', chelsea: 'iPad'};
console.log(JSON.stringify(myList));

console.log(JSON.stringify(myList, null, 3));

var myListStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
var myListObj = JSON.parse(myListStr);
console.log(myListObj.mike);
