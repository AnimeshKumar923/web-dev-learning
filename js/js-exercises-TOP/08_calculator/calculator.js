const add = function(...arg) {
  return arg[0] + arg[1];
};

const subtract = function(...arg) {
	return arg[0] - arg[1];
};

const sum = function(arr) {
  // let total = 0;
  //   arr.forEach(element => {
  //     total += element;
  // });
  // return total;
  return arr.reduce((total, currentVal) => {
    return total + currentVal;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentVal) => {
    return total * currentVal;
  });
};

const power = function(...arg) {
	return arg[0]**arg[1];
};

const factorial = function(num) {
  if(num === 0){
    return 1;
  }
  let fact = 1;
	while(num>1){
    fact*=num;
    num--;
  }
  return fact;
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
