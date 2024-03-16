function solve(string) {
    const object = JSON.parse(string)
    for (const element in object) {
        console.log(`${element}: ${object[element]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')