function solve(firstName, lastName, age) {
    const result = {
        firstName,
        lastName,
        age,
    }

    for (const element in result) {
        console.log(`${element}: ${result[element]}`);
    }
}

solve("Peter", 
"Pan",
"20"
)