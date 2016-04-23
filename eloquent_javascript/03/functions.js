var square = function (x) {
    return x * x;
};

console.log(square(12));

var makeNoise = function () {
    console.log("Pling!");
};

makeNoise();

var power = function (base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
};

console.log(power(2, 10));

var x = "outside";

var f1 = function () {
    var x = "inside f1";
};

f1();
console.log(x);

var f2 = function () {
    //x here is global in scope (?)
    x = "inside f2";
};
f2();
console.log(x);