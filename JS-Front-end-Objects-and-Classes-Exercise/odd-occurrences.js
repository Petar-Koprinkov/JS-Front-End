function solve(words) {
    const object = {}
    let array = words.toUpperCase().split(" ");
    let result = []


    for (const word of array) {
        if(!object.hasOwnProperty(word)) {
            object[word] = 0
        }

        object[word] += 1

    }

    for (const word in object) {
        if(object[word] % 2 !== 0){
            result.push(word.toLocaleLowerCase())
        }
    }

    console.log(result.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')