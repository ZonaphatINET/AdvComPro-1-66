const array = [1, 2, 3, 4, 5];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`);
    return returns;
}

array.reduce(reducer, 0);