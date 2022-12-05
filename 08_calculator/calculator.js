const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  let init = 0
  return array.reduce((acc, curr) => acc+curr, init);
};

const multiply = function(array) {
  let init = 1
  return array.reduce((acc, curr) => acc*curr, init);
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(num) {
  quotient = 1;
  while (num > 0) {
    quotient *= num;
    num--;
  }
  return quotient;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
