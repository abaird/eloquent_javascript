var text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/(^(\')|\s(\')|[,.](\'))/g, function(str) {
  return str.replace(/\'/, '\"');
}));
// another potential solution
console.log(text.replace(/(^)'|(\s)'|([,.])'/g, '$1$2$3"'));
// → "I'm the cook," he said, "it's my job."
// book solution:
// depends on the fact that a non-match returns ''
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
