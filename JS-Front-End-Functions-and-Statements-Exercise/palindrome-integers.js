function sameNumbers(number) {
    const forwardNumber = number.toString()
    const backwardNumber = forwardNumber.split("").reverse().join("");
    if (forwardNumber == backwardNumber) {
        return "true"
    } else {
        return "false"
    }
}

function solve(numbers) {
    for (const number of numbers) {
        console.log(sameNumbers(number));
    }
}

solve([32,2,232,1010])