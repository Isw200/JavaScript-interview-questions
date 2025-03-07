function isPlaindrome(str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}


console.log(isPlaindrome('racecar'))