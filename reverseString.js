// 01
function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('hello'))


// 02
function revereseString2(str) {
    let revstr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        revstr += str.charAt(i)
    }

    return revstr
}

console.log(revereseString2('hello'))


// 03
function reverseNum(num) {
    let revNum = num < 0 ? '-' : '';

    num = num.toString();

    for (let i = num.length - 1; i >= 0; i--) {
        revNum += num.charAt(i)
    }

    return parseInt(revNum)
}

console.log(reverseNum(-28))