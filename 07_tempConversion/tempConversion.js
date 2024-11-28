const convertToCelsius = function(num) {
  return parseFloat((((num - 32) * 5) / 9).toFixed(1))
};

const convertToFahrenheit = function(num) {
  return parseFloat(((num * 9 / 5) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
