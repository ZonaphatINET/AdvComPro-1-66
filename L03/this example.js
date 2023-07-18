const cat = {
    name: 'Pipey',
    age: 8,
    whatName() {
    },
};

console.log(cat.whatName()); // Pipey
cat.naem = "Nezzar";
console.log(cat.whatName()); // Nezzar