function nThLargestElement(arr, n) {
    arr.sort((a, b) => a - b)
    return arr[n - 1]
}

console.log(nThLargestElement([10, 20, 4, 45, 99, 99], 3))