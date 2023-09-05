function findMaxIndices(numbers) {
    const maxIndices = [];
    
    for (let i = 0; i < numbers.length; i++) {
      if (i === 0 || numbers[i] > numbers[i - 1]) {
        maxIndices.push(i);
      }
    }
    
    return maxIndices;
  }
  
  const numbers1 = [3, 2, 3, 1];
  const numbers2 = [1, 2, 1, 3, 5, 6, 4];
  const numbers3 = [1, 2, 1, 4, 5, 6, 4, 7];
  
  const maxIndices1 = findMaxIndices(numbers1);
  const maxIndices2 = findMaxIndices(numbers2);
  const maxIndices3 = findMaxIndices(numbers3);
  
  console.log("numbers1: ตำแหน่งที่มีค่ามากที่สุดก่อนลดลงคือ index " + maxIndices1.join(", "));
  console.log("numbers2: ตำแหน่งที่มีค่ามากที่สุดก่อนลดลงคือ index " + maxIndices2.join(", "));
  console.log("numbers3: ตำแหน่งที่มีค่ามากที่สุดก่อนลดลงคือ index " + maxIndices3.join(", "));
  