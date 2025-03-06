// O(n) - because inner while loop not executing every time.
function longestConsecutive(arr) {
    if (arr.length < 2) return null;

    let numSet = new Set(arr);
    let longest = 0;

    for (let num of arr) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let long = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                long += 1;
            }

            longest = longest < long && long;
        }
    }

    return longest
}

console.log(longestConsecutive([10, 5, 12, 3, 55, 30, 4, 11, 2]))


// function longestConsecutive(arr) {
//     if (arr.length < 1) return 0;

//     const numSet = new Set(arr);
//     let longest = 0;

//     for (let num of arr) {
//         if (!numSet.has(num - 1)) {
//             let currentNum = num
//             let curretStreak = 1;

//             while (numSet.has(currentNum + 1)) {
//                 currentNum += 1;
//                 curretStreak += 1;
//             }
//             console.log(numSet)

//             longest = Math.max(longest, curretStreak)
//         }
//     }

//     return longest;
// }