function mergeString(str1, str2) {
    const length = Math.max(str1.length, str2.length)
    let newStr = ''

    for (let i = 0; i < length; i++) {
        if (str1.length > i) {
            newStr += str1.charAt(i)
        }
        if (str2.length > i) {
            newStr += str2.charAt(i)
        }
    }

    return newStr;
}


console.log(mergeString('isuru', 'ariyarathna'))