function PrintStuff(myDocuments) {
  this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
  console.log(this.documents);
};

var newObj = new PrintStuff("I am a new object and I can print");
newObj.print();

console.log("**************************************");

function Plant() {
  this.country = "mexico";
  this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function () {
  console.log("I am a " + this.name + " and my color is " + this.color);
};

Plant.prototype.amIOrganic = function () {
  if (this.isOrganic) {
    console.log("I'm organic baby");
  }
};

function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

// this is where the inheritance comes from, the prototype
Fruit.prototype = new Plant();

var aBanana = new Fruit("Banana", "Yellow");
console.log(aBanana.name);
aBanana.showNameAndColor();
aBanana.amIOrganic();
console.log(aBanana.country);

console.log("**********************************");
function People() {
  this.superstar = "michael jackson";
}

People.prototype.athlete = "tiger woods";
var famousPerson = new People();
famousPerson.superstar = "Steve Jobs";
//overriding an inherited attribute
console.log(famousPerson.superstar);
console.log(famousPerson.athlete);

console.log("***********************************");
function Dog(breed) {
  this.breed = breed;
  this.bark = function () {
    console.log("woof")
  }
}
var fluffy = new Dog("golden retriever");
fluffy.bark();
Dog.prototype.bark = function () {
  console.log("woof woof");
};
fluffy.bark();
var buffy = new Dog("poodle");
// this won't override bark since it's 
buffy.bark();
console.log(buffy.breed);
