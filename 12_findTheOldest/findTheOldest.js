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
    for (let i = 0; i < people.length; i++) {
        if (!people[i].hasOwnProperty('yearOfDeath')) {
            console.log(`no death on element ${i}`)
            people[i].yearOfDeath = new Date().getFullYear()
        }
    }
      //use foreach to run people[0].age = people[0].yearOfDeath - people[0].yearOfBirth to add age property
    people.forEach(element => element.age = element.yearOfDeath - element.yearOfBirth)

    //compare all the array.age values to find the biggest
    let oldest = Math.max(...people.map(o => o.age))      //=49
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
