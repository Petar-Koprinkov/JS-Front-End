function lowestNumber(numbers, minNumber = Number.MAX_SAFE_INTEGER) {
    for (const number of numbers) {
        if (number < minNumber) {
            minNumber = number
        }
    }

    return minNumber;
}

function solve(...numbers) {
        let result = lowestNumber(numbers)
        console.log(result);
}

solve(600,
    342,
    123
    )