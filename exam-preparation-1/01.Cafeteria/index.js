function solve(inputArray) {
    
    let baristaCount = Number(inputArray.shift());
    
    let baristaTeam = {};
    
    for (let index = 0; index < baristaCount; index++) {
        let newBarista = inputArray.shift()
        let [name, shift, coffeeSkils] = newBarista.split(" ");
        baristaTeam[name] = {
            shift: shift,
            skills: coffeeSkils.split(",")
        }
    }
    
    let newLine = inputArray.shift();
    
    while (newLine !== "Closed") {
        let [command, name, argument1, argument2] = newLine.split(" / ");
        
        switch (command) {
            case "Prepare":
            let shift = argument1;
            let coffeeType = argument2;
            
            if (baristaTeam[name].shift === shift && baristaTeam[name].skills.includes(coffeeType)) {
                console.log(`${name} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${name} is not available to prepare a ${coffeeType}.`);
            }
            break;
            
            case "Change Shift":
            
            let newShift = argument1;
            baristaTeam[name].shift = newShift;
            console.log(`${name} has updated his shift to: ${newShift}`);
            break;
            
            case "Learn":
            let newCoffeeType = argument1;
            if (baristaTeam[name].skills.includes(newCoffeeType)) {
                console.log(`${name} knows how to make ${newCoffeeType}.`);
            } else {
                baristaTeam[name].skills.push(newCoffeeType);
                console.log(`${name} has learned a new coffee type: ${newCoffeeType}.`);
            }
            break;
        }
        
        newLine = inputArray.shift();
    }

    for (const barista in baristaTeam) {
        console.log(`Barista: ${barista}, Shift: ${baristaTeam[barista].shift}, Drinks: ${baristaTeam[barista].skills.join(", ")}`);
    }
}

solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']
);