let add = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let divide = (a, b) => a / b

function solve(firstNumber, secondNumber, operation) {
    let result
    
    switch (operation) {
        case "add":
            result = add(firstNumber, secondNumber)
            break;
        case "subtract":
            result = subtract(firstNumber, secondNumber)
            break;
        case "multiply":
            result = multiply(firstNumber, secondNumber)
            break;
        case "divide":
            result = divide(firstNumber, secondNumber)
            break;
    }

    console.log(result);
}

solve(40,
    8,
    'divide'
    )