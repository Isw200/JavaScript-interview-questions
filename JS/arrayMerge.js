// Merge 2 sotred arrays

function mergeSortedArrays(arrA, arrB) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            result.push(arrA[i])
            i++
        } else {
            result.push(arrB[j])
            j++
        }
    }

    result.push(...arrA.slice(i))
    result.push(...arrB.slice(j))

    return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]))