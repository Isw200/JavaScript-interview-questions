// O(n^2)
function longestSubstring(str) {
    let tempstr = ''
    let substrs = []

    for (let char of str) {
        if (tempstr.includes(char)) {
            substrs.push(tempstr)
            tempstr = ''
        } else {
            tempstr += char
        }
    }

    let longest = substrs[0]
    for (let item of substrs) {
        if (item.length > longest.length) longest = item
    }

    return longest
}

console.log(longestSubstring('abcabcbb'))

// sliding window :  O(n)
function longestSubstringLength(str) {
    let set = new Set();
    let maxLen = 0;
    let left = 0;
    let right = 0;

    for (right; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left])
            left++;
        }

        set.add(str[right])
        maxLen = (right - left + 1) > maxLen ? (right - left + 1) : maxLen;
    }

    return maxLen
}

console.log(longestSubstringLength('abcabcbb'))