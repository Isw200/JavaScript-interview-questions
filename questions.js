/*
const a = {}

const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 120
a[c] = 130

console.log(a[b])
*/




/*
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]

console.log(arr1 === arr2)
console.log(arr1 == arr2)

// it compares referance
*/




/*
console.log("6" < "11")
// In JavaScript, when comparing two strings, it uses lexicographic (dictionary) order. "9" comes after "11" in lexicographic order because "9" is greater than "1" when compared character by character.
console.log("9" < 11)

console.log("" > -1)
// Empty sttrings converts to number 0

console.log("Rowdy" > 1)
// Rowdy is not a numeric string, so it represent NaN. Any comparison to NaN returns false.
*/





/*
console.log((1 && 2) || (0 || 3))
console.log(null && undefined)
console.log(0 || 1 && 2 || 3)
console.log(null || 2 && 3 || 4)

// && operator returns the second operand if the first is truthy
// The || operator returns the first truthy value.
*/





/*
console.log("good" > "bad")
// When Js compare 2 strings it use lexicographic order. It take the 1st char of the string. 
// then compare unicode value of each char
*/





/*
console.log(Math.round(5.51))
console.log(Math.round(-5.51))
// normal math round

console.log(Math.floor(5.51))
console.log(Math.floor(-5.51))
// round to lower value

console.log(Math.ceil(5.51))
console.log(Math.ceil(-5.51))
// round to higher value

console.log(Math.abs(5.51));
console.log(Math.abs(-5.51));
// return absolute value regardless - or +
*/






/*
function cName() {
    return { mes: "JavaScript" }
}

console.log(cName())
*/






/*
var arr = [1, 2, 3, 4, 5]
console.log(arr.length)

arr.length = 3

console.log(arr.length)
console.log(arr)

delete arr[0]

console.log(arr)
console.log(arr[0])
console.log(arr.length)
*/