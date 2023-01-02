const repeatString = function(string, num) {

let word=string

for (let i =1;i<num;i++){
    
    word += string
}
if(num===0){
word = ""
} else if (num<0){
word = "ERROR"
}
console.log(word)
return word
};

repeatString('hey', -5)


// Do not edit below this line
module.exports = repeatString;
