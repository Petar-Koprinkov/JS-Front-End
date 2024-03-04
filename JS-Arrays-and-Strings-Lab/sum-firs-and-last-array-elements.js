function solve(numbers) {
    let firstNumber = numbers.pop()
    let lastNumber = numbers.shift()
    console.log(firstNumber + lastNumber);
}

solve([10, 17, 22, 33])
