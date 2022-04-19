const maca = {
    valeu: 3,
}
const laranja = {
    valeu: 4,
}

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.valeu;
    }, thisArg);
}


const nums = [1, 2, 3, 4];

console.log("thisArg => maca", mapComThis(nums, maca));
console.log("thisArg => laranja", mapComThis(nums, laranja));


function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    })
}

console.log("sem thisArg", mapSemThis(nums));
