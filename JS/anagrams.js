function isAnagram(strA, strB) {
    const charMapA = {};

    for (let char of strA) {
        charMapA[char] = (charMapA[char] || 0) + 1
    }

    for (let char of strB) {
        if (!charMapA[char]) {
            return false;
        }
        charMapA[char]--;
    }

    return Math.max(...Object.values(charMapA)) !== 0 ? false : true
}

console.log(isAnagram("abccc", "cba"))