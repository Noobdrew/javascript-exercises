const add = function (num1, num2) {
  console.log(num1 + num2)
  return (num1 + num2)
};

const subtract = function (num1, num2) {
  console.log(num1 - num2)
  return (num1 - num2)
};

const sum = function (array) {
  const sum = array.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  return sum
};

const multiply = function (array) {
  const sum = array.reduce((partialSum, a) => partialSum * a, 1);
  console.log(sum);
  return sum
};

const power = function (num1, num2) {
  console.log(num1 ** num2)
  return (num1 ** num2)
};

const factorial = function (num) {
  let sum =1
  while (num > 0) {
    sum *=num
    num--
  }
  console.log(sum)
  return sum
};


// add(0, 0);
// subtract(10, 4)
// sum([7, 11])
// multiply([2, 3])
// power(2, 3)
factorial(0)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
