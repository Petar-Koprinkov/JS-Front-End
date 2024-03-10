function Multuplication(firstNumber, secondNumber, thirdNumber) {
    const multiply = (a, b) => a * b;
    const result = multiply(multiply(firstNumber, secondNumber),thirdNumber)

    return result
}

function solve(firstNumber, secondNumber, thirdNumber) {
    if (Multuplication(firstNumber, secondNumber, thirdNumber) > 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

solve(5,
    12,
   -15
   )