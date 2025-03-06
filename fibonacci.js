// 1. Liner complexity O(n)
function getFibonacciNum(possition) {
    let prev = 0;
    let fib = 1;

    for (let i = 2; i <= possition; i++) {
        let temp = prev + fib;
        prev = fib;
        fib = temp;
    }

    return fib;
}

console.log(getFibonacciNum(6))

// 2. Exponsntial compelexity O(2^n)
function getFibo(n) {
    if (n <= 1) return n;
    return getFibo(n - 1) + getFibo(n - 2)
}

console.log(getFibo(6))