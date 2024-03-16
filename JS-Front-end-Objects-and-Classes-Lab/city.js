function solve(object) {
    for (const line in object) {
        console.log(`${line} -> ${object[line]}`);
    }
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)