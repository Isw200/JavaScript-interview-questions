function validateParentheses(str) {
    let first = 0
    let last = str.length - 1;

    const paraMap = { '}': '{', ')': '(', ']': '[' }

    while (first < last) {
        if (str.charAt(first) !== paraMap[str.charAt(last)]) return false
        first++
        last--
    }

    return true
}

console.log(validateParentheses('{[()]}'))