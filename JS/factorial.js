// get factorial for given numbers
// 5 --> 120

function getFactorial(num) {
    if (num === 1) return 1;

    return num * getFactorial(num - 1)
}

console.log(getFactorial(5))