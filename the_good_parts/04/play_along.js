var add = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    };
  }
  return a + b;
};

console.log('**************** Invocation *****************');
// 4 different ways of invoking functions:
//METHOD INVOCATION

var myObject = {
  value: 0,
  increment: function(inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
};

myObject.increment();
console.log(myObject.value);
myObject.increment(2);
console.log(myObject.value);

// FUNCTION INVOCATION
var sum = add(3, 4);
console.log(sum);

myObject.double = function() {
  var that = this;
  var helper = function() {
    that.value = add(that.value, that.value);
  };
  helper();
};

console.log(myObject.value);
myObject.double();
console.log(myObject.value);

// CONSTRUCTOR INVOCATION
//  - not recommended
var Quo = function(string) {
  this.status = string;
};

Quo.prototype.get_status = function() {
  return this.status;
};

var myQuo = new Quo('confused');
console.log(myQuo.get_status());

// APPLY INVOCATION PATTERN
var array = [3, 4];
var this_sum = add.apply(null, array);
console.log(this_sum);

var statusObject = {
  status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);

console.log('**************** Exceptions *****************');
var try_it = function() {
  try {
    add('seven');
  } catch (e) {
    console.log(e.name + ': ' + e.message);
  }
};

try_it();

console.log('**************** Augmenting *****************');
Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
};

Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10 / 3).integer());   //returns -3

String.method('trim', function() {
  return this.replace(/^\s+|\s+$/g, '');
});

console.log('   somestring   '.trim());

console.log('***************** Recursion ********************');
var hanoi = function hanoi(disc, src, aux, dst) {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
    hanoi(disc - 1, aux, src, dst);
  }
};
hanoi(3, 'Src', 'Aux', 'Dst');

console.log('********************* Module ********************');
String.method('deentityify', function() {
  var entity = {
    quot: '"',
    lt: '<',
    gt: '>'
  };

  //return function(){
  return this.replace(/&([^&;]+);/g,
    function(a, b) {
      var r = entity[b];
      return typeof r === 'string' ? r : a;
    }
  );
  // };
});

console.log('&lt;&quot;&gt;'.deentityify());

var serial_maker = function() {
  var prefix = '';
  var seq = 0;
  return {
    set_prefix: function(p) {
      prefix = String(p);
    },
    set_seq: function(s) {
      seq = s;
    },
    gensym: function() {
      var result = prefix + seq;
      seq += 1;
      return result;
    }
  }
};

var seqer = serial_maker(0);
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();
console.log(unique);

console.log('*************** Curry *******************');
Function.method('curry', function() {
  var slice = Array.prototype.slice,
    args = slice.apply(arguments),
    that = this;
  return function() {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});

var add1 = add.curry(1);
console.log(add1(6));
console.log(add1(10));

console.log('************** Memoization ***************');
var slow_fibonacci = function(n) {
  return n < 2 ? n : slow_fibonacci(n - 1) + slow_fibonacci(n - 2);
};

for (var i = 0; i <= 10; i += 1) {
  console.log('// ' + i + ': ' + slow_fibonacci(i));
}

var fibonacci = (function() {
  var memo = [0, 1];
  var fib = function(n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result
    }
    return result;
  };
  return fib;
}());

for (var j = 0; j <= 10; j += 1) {
  console.log('// ' + j + ': ' + fibonacci(j));
}

var memoizer = function(memo, formula) {
  var recur = function(n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = formula(recur, n);
      memo[n] = result;
    }
    return result;
  };
  return recur;
};

var fib_memo = memoizer([0, 1], function(recur, n) {
  return recur(n - 1) + recur(n - 2);
});

for (var k = 0; k <= 10; k += 1) {
  console.log('// ' + k + ': ' + fib_memo(k));
}
