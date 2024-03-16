function solve(input) {
    let object = {}

    for (const line of input) {
        let [name, address] = line.split(":")
        object[name] = address
    }

    let arrray = Object.entries(object)
    let sortedArray = arrray.sort((a, b) => a[0].localeCompare(b[0]))
    
    for (const element of sortedArray) {
        console.log(`${element[0]} -> ${element[1]}`);
    }
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)