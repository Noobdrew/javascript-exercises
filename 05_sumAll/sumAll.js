const sumAll = function (num1, num2) {

    //find if all parameters are integers
    let smallNum = 0
    let bigNum = 0
    if (typeof num1 === 'number' && typeof num2 === 'number' && num1 > 0 && num2 > 0) {
        console.log('is number')

        //find smallest number in parameters 

        if (num1 < num2) {
            smallNum = num1
            bigNum = num2
        } else {
            smallNum = num2
            bigNum = num1
        }
        console.log(`smallNum is ${smallNum}`)
        console.log(`bigNum is ${bigNum}`)
    } else {
        console.log('ERROR')
        return "ERROR"
    }
    let sum = 0
    while (smallNum <= bigNum) {
        sum += smallNum
        smallNum++

    }
    console.log(sum)
    return sum
    //make a fuction that sums all numbers between smallest num and big num


};

sumAll(-1, 4)
//1+2+3+4=10

// Do not edit below this line
module.exports = sumAll;
