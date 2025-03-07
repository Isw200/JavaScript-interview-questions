// Find the index of given element using binary search
// Ex:- ([1, 2, 3, 4, 5, 6, 7, 9], 5) --> 4

function binarySearch(arr, target) {
    let index = -1;

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

        if (target > arr[mid]) {
            devideSearch(mid + 1, end);
        } else {
            devideSearch(start, mid - 1);
        }
    }

    devideSearch(0, arr.length - 1)

    return index;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))