// largest element of a nested array

function largestElementInNestedArray(arr) {
    let latgest = -Infinity;

    for (let elem of arr) {
        if (Array.isArray(elem)) {
            latgest = Math.max(latgest, largestElementInNestedArray(elem))
        } else {
            latgest = Math.max(elem, latgest)
        }
    }

    return latgest;
}

console.log('max: ', largestElementInNestedArray([1, 7, 3, [5, 3, 2, 9], 8]))