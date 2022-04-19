function filtraPares(arr) {
    return arr.filter(callBack);
}

function callBack(item) {
    return item % 2 !== 0;
}

const myArray = [230, 20, 2, 100, 3, 87, 86, 309, 13, 302, 1482, 103, 403, 10234]

console.log(filtraPares(myArray));



