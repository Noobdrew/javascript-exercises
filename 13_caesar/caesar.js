const caesar = function (text, shift) {
    let array = text.toLowerCase().split('')
    console.log(array)
    let oldUni = array.map(x => x.charCodeAt())
    console.log(oldUni)
    let newUni = oldUni.map(x => x + shift)
    console.log(newUni)
    let newText = newUni.map(
        function (x) {
            if (x > 122) {      // || checks for 1st true && checks for 1st false if runs only on true
                return x = x - 26
            } else if (x < 97) {
                return x = x + 26
            }
            else {
                return x
            }
        })
        .map(x => String.fromCharCode(x)).join('')
    console.log(newText)
};



caesar('url', -13)
// Do not edit below this line
module.exports = caesar;
