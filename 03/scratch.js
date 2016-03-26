var func1 = function print1() {
    console.log("hello")
};
var func2 = function print2() {
    console.log(" there")
};

function printstuff(one, two) {
    one();
    two();
}

printstuff(func1, func2);
console.log("I'm done");