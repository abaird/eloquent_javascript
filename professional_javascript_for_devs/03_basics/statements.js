var i = 20;
if (i > 25) {
  console.log(" Greater than 25.");
} else if (i < 0) {
  console.log(" Less than 0.");
} else {
  console.log(" Between 0 and 25, inclusive.");
}

var i = 0;
do {
  i += 2;
} while (i < 10);
console.log(i);

var i = 0;
while (i < 10) {
  i += 2;
}
console.log(i);

for (var i = 0; i < 10; i++) {
  console.log(i);
}
// break quits the loop
// continue goes to the next itteration

// using labels:
var num = 0;
outermost:
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i == 5 && j == 5) {
        break outermost;
      }
      num++;
    }
  }
console.log(num); // 55

// switch statement
// switch statements "fall through" by default unless you use a break
switch (i) {
  case 25:
  /* falls through */
  case 35:
    console.log("25 or 35");
    break;
  case 45:
    console.log("45");
    break;
  default:
    console.log("Other");
}
// another trick is to use switch(true) to not have each switch clause tied to a specific variable
var num = 25;
switch (true) {
  case num < 0:
    console.log("Less than 0.");
    break;
  case num >= 0 && num <= 10:
    console.log("Between 0 and 10.");
    break;
  case num > 10 && num <= 20:
    console.log("Between 10 and 20.");
    break;
  default:
    console.log("More than 20.");
}

