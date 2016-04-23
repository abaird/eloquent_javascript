var landscape = function() {
    var result = '';
    var flat = function(size) {
        for (var count = 0; count < size; count++) {
            result += '_';
        }
    };
    var mountain = function(size) {
        result += '/';
        for (var count = 0; count < size; count++) {
            result += "'";
        }
        result += '\\';
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    return result;
};

console.log(landscape());

console.log('The future says: ', future());

function future() {
    return 'We STILL have no flying cards.';
}

function power(base, exponent) {
    if (exponent == undefined)
        exponent = 2;
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
console.log(power(4, 3));

// closures
function wrapValue(n) {
    var localVariable = n;
    return function() {
        return localVariable;
    };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(typeof wrap1);
console.log(wrap1());
console.log(wrap2());

// multiplier
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

// twice is a function that returns function that multiplies it's argument by 2
var twice = multiplier(2);
console.log(typeof twice);
console.log(twice(5));
