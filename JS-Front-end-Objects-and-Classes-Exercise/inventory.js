function solve(input) {
    heroes = []

    for (const row of input) {
        const [heroName, level, items] = row.split(" / ")
        const object = {
            Hero: heroName,
            level: Number(level),
            items: items
        }
        heroes.push(object)
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )