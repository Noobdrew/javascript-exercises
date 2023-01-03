const removeFromArray = function () {

    const array = arguments[0]
    let arg = []

    for (i = 1; arguments.length > i; i++) {
        arg.push(arguments[i])
    }

    console.log(`The array we are checking is [${array}]`)
    console.log(`Arguments to check are [${arg}]`)
   

    let intersections = array.filter(e => arg.indexOf(e) == -1);
    
    console.log(`The matches are [${intersections}]`)
   
    return intersections
};


removeFromArray([1, 2, 3, 4], 3)
//7 is false move to next value

// Do not edit below this line
module.exports = removeFromArray;




// const array = [1, 2, 3, 4, 5];

// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//         console.log(`this is num ${num} in cycle i ${i}`)
//         if (num % i === 0) {
//             console.log(`this is num ${num} in cycle i ${i} when it returns false`)
//             return false;
//         }
//     }
//     // goes to here only when num>i is not true so it goes for all i numbers up till then
//     console.log(`this is num ${num} when it returns true`)
//     return true
// }

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
