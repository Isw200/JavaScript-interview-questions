// find 1st non repeated char

function firstNonRepeatedChar(str) {
    const chatMap = {}

    for (let char of str) {
        chatMap[char] = (chatMap[char] || 0) + 1;
    }

    for (let char of str) {
        if (chatMap[char] === 1) {
            return char
        }
    }
}


console.log(firstNonRepeatedChar('programming'))