// Find the 1st not-repeated char
function findFirstChar(str) {
    let charMap = {};

    for (let char of str) {
        if (Object.keys(charMap).includes(char)) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (entry of Object.entries(charMap)) {
        if (entry[1] < 2) {
            return entry[0]
        }
    }
}

console.log(findFirstChar('aabbccde'))