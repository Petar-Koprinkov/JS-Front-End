function solve(number, ...operations) {
    for(let i = 0; i < operations.length; i++) {
        if (operations[i] === "chop") {
            number /= 2
            console.log(number);
        } else if (operations[i] === "dice") {
            number = Math.sqrt(number)
            console.log(number);
        } else if (operations[i] === "spice") {
            number += 1
            console.log(number);
        } else if (operations[i] === "bake") {
            number *= 3
            console.log(number);
        } else if (operations[i] === "fillet") {
            number = number - number * 0.20
            console.log(number);
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')