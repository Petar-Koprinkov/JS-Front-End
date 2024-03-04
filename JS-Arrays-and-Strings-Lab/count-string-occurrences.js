function solve(text, word) {
    let array = text.split(" ")
    let counter = 0
    for (let element of array) {
        if (element === word) {
           counter += 1 
        }
    }

    console.log(counter);
}

solve('This is a word and it also is a sentence', 'is')