function inventory(strArray){
    let heroes = [];
    for (const line of strArray) {
        let [hero, level, items] = line.split(' / ');
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
        let heroObj = {
            Hero: hero,
            level: Number(level),
            Items: items
        }
        heroes.push(heroObj);
    }
    heroes
    .sort((a,b) => a.level - b.level)
    .forEach(h => {
        console.log(`Hero: ${h.Hero}`);
        console.log(`level => ${h.level}`);
        console.log(`items => ${h.Items}`);
    })
}

inventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);