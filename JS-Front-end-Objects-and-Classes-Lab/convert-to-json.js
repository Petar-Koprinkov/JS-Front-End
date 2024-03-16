function solve(firstName, lastName, hairColor ) {
    const object = {
        name: firstName,
        lastName,
        hairColor,
    }

    const result = JSON.stringify(object)
    console.log(result);
}

solve('George', 'Jones', 'Brown')