function findMissingNum(arr, lastNum) {
    const sum = (lastNum * (lastNum + 1) / 2)
    const actualSum = arr.reduce((accumulator, nextVal) => accumulator + nextVal)

    return sum - actualSum;
}

console.log(findMissingNum([1, 2, 4, 5], 5))