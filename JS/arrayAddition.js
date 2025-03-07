function arrayAddition(arr) {
    let largest = Math.max(...arr);

    arr = arr.filter((num) => num !== largest)

    function canSum(target, numbers, index) {
        if (target === 0) return true;
        if (target < 0 || index >= numbers.length) return false;

        return canSum(target - numbers[index], numbers, index + 1) || canSum(target, numbers, index + 1);
    }

    return canSum(largest, arr, 0)
}

console.log(arrayAddition([4, 6, 23, 10, 1, 3]))