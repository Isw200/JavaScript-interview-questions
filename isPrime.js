function isPrime(num) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false
            break
        }
    }

    return isPrime
}

console.log(isPrime(10))