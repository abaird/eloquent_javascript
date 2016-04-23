/**
 * Created by abaird on 3/26/16.
 */

function countBs(string) {
  var count = 0;
  for (var x = 0; x < string.length; x++) {
    if (string.charAt(x) == "B") {
      count++;
    }
  }
  return count;
}

console.log(countBs("BB"));

function countChar(string, char) {
  var count = 0;
  for (var x = 0; x < string.length; x++) {
    if (string.charAt(x) == char) {
      count++;
    }
  }
  return count;
}
console.log(countChar("kaKkerlak", "k"));
console.log(countChar("frufru", "a"));
