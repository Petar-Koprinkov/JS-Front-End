function sumDigits(number, filter) {
    const sum = number
                .toString()
                .split("")
                .map(digit => Number(digit))
                .filter(filter)

    const result = sum.reduce((acc, digit) => acc + digit, 0)
    return result
}

function solve(number) {
    const oddNumber = number => number % 2 !== 0
    const evenNumber = number => number % 2 === 0

    const evenResult = sumDigits(number, evenNumber)
    const oddResult = sumDigits(number, oddNumber)

    console.log(`Odd sum = ${oddResult}, Even sum = ${evenResult}`);
}

solve(1000435)