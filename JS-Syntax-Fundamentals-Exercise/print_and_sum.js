function solve(firstNumber, secondNumber) {
    let result = 0
    let string = ""
    for(i = firstNumber; i <= secondNumber; i++) {
        string += `${i} `
        result += i
    }
    console.log(string.trim());
    console.log(`Sum: ${result}`);
}

solve(5, 10)