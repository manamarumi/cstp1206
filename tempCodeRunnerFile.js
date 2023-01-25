let listOfNum = [110, -200, 10, 560, 0, -50];

let minimumValue = listOfNum.reduce(function(acc, cV) {
    return acc < cV ? acc : cV;
}, Infinity);

console.log(minimumValue, "Min Value");
