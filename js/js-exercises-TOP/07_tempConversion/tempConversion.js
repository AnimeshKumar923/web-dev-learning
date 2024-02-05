const convertToCelsius = function(input) {
  let res=((input-32)*(5/9));
  let roundedRes = Math.round(res * 10) / 10
  return roundedRes;
};

const convertToFahrenheit = function(input) {
  let res=(input*(9/5)+32);
  let roundedRes = Math.round(res * 10) / 10
  return roundedRes;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
