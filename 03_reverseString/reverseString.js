const reverseString = function (string) {
    let arrayString = string.split('')
    arrayString.reverse();
    console.log(arrayString)
    let revString = arrayString.join("")
    console.log(revString)
    return revString
};
reverseString('hello')
// Do not edit below this line
module.exports = reverseString;
