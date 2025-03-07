function findSecondLargest(arr) {
    if (arr.length < 2) return null

    let largest = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            second = largest
            largest = num
        } else if (num > second && num < largest) {
            second = num
        }
    }


    return second === -Infinity ? null : second;
}


console.log(findSecondLargest([2, 1, 8, 5, 0, 7]))