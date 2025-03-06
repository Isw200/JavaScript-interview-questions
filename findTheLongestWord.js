function findTheLongestWord(str) {
    let longestWord = ""

    for (let word of str.split(" ")) {
        if (longestWord.length < word.length) {
            longestWord = word
        }
    }

    return longestWord
}

console.log(findTheLongestWord("I love coding in javascript"))