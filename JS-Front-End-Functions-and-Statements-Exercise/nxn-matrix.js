function makeRow(num) {
    let arrayRow = new Array(num).fill(num)
    return arrayRow
}

function solve(number) {
    for (let index = 0; index < number; index++) {
        console.log(...makeRow(number));
    }
}

solve(7)