function frequencySort(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    let arr = [...map.entries()];
    arr.sort((a, b) => b[1] - a[1]);
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        res += arr[i][0].repeat(arr[i][1]);
    }
    return res;
}

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));