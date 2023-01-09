const caesar = function (text, shift) {
    if (shift < 0) {
        return caesar(text, shift + 26);
    }
    let output = ''
    // goes through all characters 
    for (let i = 0; i < text.length; i++) {
        let c = text[i]

        //check if character is letter
        if (c.match(/[a-z]/i)) {
            let code = text.charCodeAt(i)

            if (code >= 65 && code <= 90) {
                //%26 prevents c from being bigger than 90 or 122 so it stays in a-z range 
                c = String.fromCharCode(((code - 65 + shift) % 26) + 65)
                
            }
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + shift) % 26) + 97)
            }
        }
        output += c
    }
    console.log(output)
    return output
};



caesar('Mjqqt, Btwqi!', -5)
// Do not edit below this line
module.exports = caesar;
