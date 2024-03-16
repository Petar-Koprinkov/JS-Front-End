function solve(array) {
    let object = {}

    for (let line of array) {
        let [name, number] = line.split(" ")
        object[name] = number
    }

    for (const row in object) {
        console.log(`${row} -> ${object[row]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)