function maxProductExplanation(n) {
    if (n <= 3) {
      return n;
    }
  
    let maxProduct = 1;
  
    while (n > 4) {
      maxProduct *= 3;
      n -= 3;
    }
  
    return maxProduct * n;
}
  
// Example usage
console.log(maxProductExplanation(2));
console.log(maxProductExplanation(5));  
console.log(maxProductExplanation(7));   
console.log(maxProductExplanation(10));  
console.log(maxProductExplanation(15)); 