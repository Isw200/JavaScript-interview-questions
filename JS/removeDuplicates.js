function removeDuplicates(arr) {
    const newArr = [];

    for (let item of arr) {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }
    }

    return newArr;
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6]))