function getDivisors(number) {
    let divisors = []

    for (let index = number - 1; index >= 1; index--) {
        if (number % index === 0) {
            divisors.push(index);
        }
    }
    return divisors
}

function sumDivisors(array) {
    let sum = array.reduce((acc, digit) => acc + digit, 0);
    return sum
}

function solve(number) {
    const resultSum = sumDivisors(getDivisors(number))
    if (resultSum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

solve(3)