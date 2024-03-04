function solve(arrayNames) {
    let counter = 1
    arrayNames.sort((a, b) => a.localeCompare(b))
    for (let index = 0; index < arrayNames.length; index++) {
        console.log(`${counter}.${arrayNames[index]}`);
        counter ++
    }
}

solve(["John", "Bob", "Christina", "Ema"])