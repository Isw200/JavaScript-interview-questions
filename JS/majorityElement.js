//  Boyer-Moore Voting Algorithm
function majorityElement(arr) {
    let count = 0;
    let majElem;

    for (let item of arr) {
        if (count === 0) {
            majElem = item;
        }

        if (item === majElem) {
            count += 1;
        } else {
            count -= 1;
        }
    }

    return majElem;
}

console.log(majorityElement([3, 3, 4, 4, 5, 3, 3]))