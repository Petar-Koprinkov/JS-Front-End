function solve(input) {
    let posseCount = input.shift();
    
    let team = {};
    
    for (let index = 0; index < posseCount; index++) {
        let line = input.shift();
        
        let [name, health, bulletsNumber] = line.split(" ");
        
        team[name] = {
            health: Number(health),
            bulletsNumber: Number(bulletsNumber),
        };
    }
    
    let line = input.shift();
    
    while (line !== "Ride Off Into Sunset") {
        
        let [command, name, argument1, argument2] = line.split(" - ");
        
        if (command === "FireShot") {
            let target = argument1
            if(team[name].bulletsNumber){
                team[name].bulletsNumber -= 1;
                console.log(`${name} has successfully hit ${target} and now has ${team[name].bulletsNumber} bullets!`);
            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
            }
            
        } else if (command === "TakeHit") {
            let damage = Number(argument1);
            let attacker = argument2;
            team[name].health -= damage;
            if (team[name].health > 0){
                console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${team[name].health} HP!`);
            } else{
                console.log(`${name} was gunned down by ${attacker}!`);
                delete team[name];
            }
        } else if (command === "Reload") {
            if(team[name].bulletsNumber < 6) {
                let firstCountNumber = team[name].bulletsNumber;
                team[name].bulletsNumber = 6;
                console.log(`${name} reloaded ${6 - firstCountNumber} bullets!`);
            } else {
                console.log(`${name}'s pistol is fully loaded!`);
            }
        } else if (command === "PatchUp") {
            let amount = Number(argument1)
            if (team[name].health === 100){
                console.log(`${name} is in full health!`);
                
            } else{
            let firstHealth = team[name].health;
            team[name].health += amount;
            if (team[name].health > 100){
                team[name].health = 100;
                console.log(`${name} patched up and recovered ${team[name].health - firstHealth} HP!`);
            } else {
                console.log(`${name} patched up and recovered ${team[name].health - firstHealth} HP!`);
            }}
        }
        
        line = input.shift();
    }
    
    
    for (const name in team) {
        console.log(`${name}`);
        console.log( `HP: ${team[name].health}`);
        console.log( `Bullets: ${team[name].bulletsNumber}`);
    }
}

solve((["2",
"Gus 100 0",
"Walt 100 6",
"TakeHit - Gus - 0 - Bandit",
"PatchUp - Gus - 20",
"Ride Off Into Sunset"])
)