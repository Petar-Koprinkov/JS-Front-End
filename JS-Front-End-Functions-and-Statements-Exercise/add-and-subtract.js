let sum = (a, b) => a + b
let substract = (a, b) => a - b

function solve(first, second, thurd) {
    let result = substract(sum(first, second), thurd)
    console.log(result);
}

solve(23,
    6,
    10
    )