function solve(input) {

    let result = []

    for (const element of input) {
        let [town, latitude, longitude] = element.split(" | ")
        let object = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }

        result.push(object)
    }

    result.forEach(city => console.log(city));
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)