function heroicInventory(input) {
    let heroes = [];
    let items = [];

    for (let line of input) {
        let [name, level, attributes] = line.split(' / ');
        level = Number(level);
        attributes = attributes ? attributes.split(', ') : [];
        for (let el of attributes) {
            items.push(el);
        }

        heroes.push({ name, level, items });
        items = [];
    }
    console.log(JSON.stringify(heroes));
}

heroicInventory(
['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);