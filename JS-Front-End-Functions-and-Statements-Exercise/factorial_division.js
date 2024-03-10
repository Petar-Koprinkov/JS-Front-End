function factorial(number) {

    if (number <= 1) {
        return 1
    }

    let sum = number * (factorial(number - 1))
    return sum
}

function solve(firstNumber, secondNumber) {

    let result = factorial(firstNumber) / factorial(secondNumber)
    console.log(result.toFixed(2));
}

solve(5,
    2
    )