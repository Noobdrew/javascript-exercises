const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]
console.log(books)

const getTheTitles = function () {

    //go through books array and extract elements by object property title
    let result = books.map(a => a.title);
    console.log(result)
    return result
};


getTheTitles(books)
// Do not edit below this line
module.exports = getTheTitles;
