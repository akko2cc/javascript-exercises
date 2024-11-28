const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0)
};

const multiply = function(...args) {

  if (Array.isArray(args)) {
    let total = 1
    for (let i = 0; i < args[0].length; i++) {
      total *= Number(args[0][i])
    }

    return total
  }

  let total = 1
  for (let i = 0; i < args.length; i++) {
    total *= args[i] 
  }
  return total
};

const power = function() {
	return arguments[0] ** arguments[1]
};

const factorial = function(num) {
  let array = []
  for (let i = 1; i <= num; i++) {
    array.push(i)
  }

	return array.reduce((total, current) => total * current, 1)
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
