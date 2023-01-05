const palindromes = function (text) {
    const re = /([a-z])/

    let textLower = text.toLowerCase()
    //take text and conver to array
    let array = textLower.split('');
    console.log(array)
    //remove all non text charecters from array by using regex
    let regCheck = array.filter(check => re.test(check));
    console.log(regCheck)
    //convert array back to string
    let joinStr = regCheck.join("")
    console.log(joinStr)
    //reverse array and set it to revString variable to check if it is reversed
    let revStr = regCheck.reverse().join("")
    console.log(revStr)
    //check if str is same reversed and not reversed
    if (joinStr == revStr) {
        return true
    } else {
        return false
    }


};

//code from odin solutions 
// const palindromes = function(string) {
//     const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
//   };

palindromes('A car, a man, a maraca.');
// Do not edit below this line
module.exports = palindromes;
