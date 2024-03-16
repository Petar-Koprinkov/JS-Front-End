function solve(array) {
    let object = {}

    for (let line of array) {
        let [day, name] = line.split(" ")
        if (!object.hasOwnProperty(day)) {
            object[day] = name
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const element in object) {
        console.log(`${element} -> ${object[element]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)