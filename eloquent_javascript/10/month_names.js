var month = function(){
  var months = ['January', 'February', 'March',
                'April', 'May', 'June', 'July',
                'August', 'September', 'October',
                'November', 'December']
  return {
    name: function(name){
      return months.indexOf(name);
    },
    number: function(number){
      return months[number];
    }
  }
}();

console.log(month.number(2));
console.log(month.name('November'));
