const string3 = ["computer", "computing", "compute", "computation"];

function findDuplicates(strings) {
  const uniqueWords = new Set();
  const duplicates = [];

  for (const word of strings) {
    if (uniqueWords.has(word)) {
      duplicates.push(word);
    } else {
      uniqueWords.add(word);
    }
  }

  return duplicates;
}

const duplicates = findDuplicates(string3);
const duplicatesString = duplicates.join(', '); // แปลงอาร์เรย์เป็นสตริงแยกด้วยเครื่องหมาย ", "
console.log(duplicatesString); // ผลลัพธ์คือ "compute"