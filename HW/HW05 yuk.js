function maxProductExplanation(n) {
    const o = n
    if (n === 0) {
      return  'Input: n = 0\nOutput: 0'
    }
    if (n === 1) {
        return  'Input: n = 1\nOutput: 0'
      }
    if (n === 2) {
        return 'Input: n = 2\nOutput: 1\nExplanation: 2 = 1 + 1, 1 × 1 = 1'
      }
    if (n === 3) {
        return 'Input: n = 3\nOutput: 2'
      }


      let product = 1;
      while (n > 4) {
        product *= 3;
        n -= 3;
      }
      product *= n;

      
      return console.log('Input: n = '+ o) , 'Output: '+ product;
}

console.log(maxProductExplanation(2));
console.log(maxProductExplanation(5));
console.log('Explanation: 5 = 2 + 3, 2 × 3 = 6');
console.log(maxProductExplanation(7));
console.log('Explanation: 7 = 2 + 2 + 3, 2 × 2 × 3 = 12');
console.log(maxProductExplanation(10));
console.log('Explanation: 10 = 2 + 2 + 3 + 3, 2 × 2 × 3 × 3 = 36');
console.log(maxProductExplanation(15));
console.log('Explanation: 15 = 3 + 3 + 3 + 3 + 3, 3 × 3 × 3 × 3 × 3 = 243');