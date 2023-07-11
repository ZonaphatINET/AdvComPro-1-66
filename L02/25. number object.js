function circumference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
        return 0;
    }
}

console.log(circumference('4.567abcdefgh'));

console.log(circumference('abcdefgh'));
