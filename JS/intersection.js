// find intersection of 2 arrays

function intersection(arrA, arrB) {
    const inter = [];

    for (let item of arrA) {
        if (arrB.includes(item)) {
            inter.push(item)
        }
    }

    return inter;
}

function intersection2(arrA, arrB) {
    return arrB.filter(item => arrA.includes(item))
}


console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]))


console.log(intersection2([1, 2, 3, 4], [3, 4, 5, 6]))