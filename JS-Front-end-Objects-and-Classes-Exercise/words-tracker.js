function solve(array) {
    let searcehWords = array.shift().split(" ")
    let object = {}

    for (const word of searcehWords) {
        object[word] = 0
    }

    for (const element of array) {
        if(object.hasOwnProperty(element)) {
            object[element] += 1
        }
    }

    let result = Object.entries(object)
    result
        .sort((a, b) => b[1] - a[1])
        .forEach(el => console.log(`${el[0]} - ${el[1]}`));
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )