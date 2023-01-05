const fibonacci = function (num) {
    //function convers str to int but does not accept negative numbers
    let numInt = parseInt(num)
    if (numInt < 0) {
        return "OOPS"
    }

    let a = 0, b = 1, c = numInt;
  
    for(let i = 2; i <= numInt; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    console.log(c)
    return c
};

fibonacci(5)
// Do not edit below this line
module.exports = fibonacci;
