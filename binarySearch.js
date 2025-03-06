function binarySearch(arr, target) {
    let index;

    function devideSearch(start, end) {
        if (end < start) {
            index = end;
            return;
        };

        const mid = parseInt(((start + end) / 2))

        if (arr[mid] === target) {
            index = mid;
            return;
        }

        start = target > mid ? start + 1 : start;
        end = target < mid ? end - 1 : end;

        devideSearch(start, end)
    }

    devideSearch(0, arr.length - 1)

    return index;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 9], 5))