function simplePair(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] * arr[i + 1] === n) {
      return [arr[i], arr[i + 1]];
    }
  }
  return null;
}

console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));