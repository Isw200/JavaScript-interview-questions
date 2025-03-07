function addSpaces(str) {
    let sentence = ""

    for (let char of str) {
        if (char === char.toUpperCase() && sentence.length > 0) {
            sentence += ` ${char.toLowerCase()}`
        } else {
            sentence += char
        }
    }

    return sentence;
}


console.log(addSpaces("FerariIsTheBest"))
// Ferrari is the best