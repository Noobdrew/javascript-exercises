const convertToCelsius = function (temp) {
  // f=(x-32)*5/9
  let roundedFarenheit = Math.round((temp - 32) * (5 / 9) * 10) / 10

  console.log(roundedFarenheit)
  return roundedFarenheit
};

const convertToFahrenheit = function (temp) {
  //c=(x*9/5+32)
  let roundedCelsius = Math.round((temp * (9 / 5) + 32) * 10) / 10

  console.log(roundedCelsius)
  return roundedCelsius
};

convertToCelsius(100)
convertToFahrenheit(0)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
