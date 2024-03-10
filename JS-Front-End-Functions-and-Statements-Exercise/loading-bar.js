function getNumberPercetnage(number) {
    let numberPercentage = number / 10
    return numberPercentage
}

function getNumberDot(number) {
    let numberDot = 10 - number / 10
    return numberDot
}

function solve(number) {
    console.log(`${number}% [${"%".repeat(getNumberPercetnage(number))}${".".repeat(getNumberDot(number))}]`);

    if (number === 100) {
        console.log("Complete!");
    } else {
        console.log("Still loading...");
    }
}

solve(70)
solve(100)