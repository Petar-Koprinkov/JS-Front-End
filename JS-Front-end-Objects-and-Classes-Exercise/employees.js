function solve(input) {
    result = []

    for (const name of input) {
        result.push({
            name: name,
            number: name.length
        })
    }

    for (const object of result) {
        console.log(`Name: ${object.name} -- Personal Number: ${object.number}`);
    }

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )