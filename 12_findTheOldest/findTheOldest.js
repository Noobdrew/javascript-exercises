const people = [
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const findTheOldest = function () {
    //check if objects have yearOfDeath and adds current year if they dont
    for (let i = 0; i < people.length; i++) {
        if (!people[i].hasOwnProperty('yearOfDeath')) {
            console.log(`no death on element ${i}`)
            people[i].yearOfDeath = new Date().getFullYear()
        }
    }
    //use foreach  to add age property to all objects 
    people.forEach(element => element.age = element.yearOfDeath - element.yearOfBirth)

    //compare all the array.age values to find the biggest
    let oldest = Math.max(...people.map(o => o.age))      
    //return the argument with oldest age
    for (let i = 0; i < people.length; i++) {
        if (people[i].age == oldest) {
            console.log(people[i])
            return people[i]
        }
    }


};

findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
