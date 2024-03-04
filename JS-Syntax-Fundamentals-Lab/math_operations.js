function solve(first_number, second_number, operator) {
    if (operator === "+") {
        console.log(first_number + second_number);
    } else if (operator === "-") {
        console.log(first_number - second_number);
    } else if (operator === "*") {
        console.log(first_number * second_number);
    } else if (operator === "/") { 
        console.log(first_number / second_number)
    } else if (operator === "%") { 
        console.log(first_number % second_number)
    } else if (operator === "**") { 
        console.log(first_number ** second_number)
    }
}

solve(6, 5, '%')