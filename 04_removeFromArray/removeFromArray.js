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


// Do not edit below this line
module.exports = removeFromArray;
