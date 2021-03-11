function farming() {
    let input = arguments;
    let index = 0;
    let items = arguments[index].split(' ');
    let shards = 0;
    let fragments = 0;
    let motes = 0;
    let collection = {
        'shards': 0,
        'fragments': 0,
        'motes': 0
    };

    let junk = {};
    let isDone = false;

    while (items.length >= 0) {
        if (isDone == true) {
            break;
        }
        let quantity = Number(items.shift());
        let material = items.shift().toLowerCase();
        switch (material) {
            case "shards":
                if (!collection.hasOwnProperty(material)) {
                    collection[material] = quantity;
                    shards = quantity;
                } else {
                    shards += quantity;
                    collection[material] = shards;
                }
                if (shards >= 250) {
                    console.log(`Shadowmourne obtained!`);
                    collection[material] -= 250;
                    isDone = true;
                }
                break;
            case "fragments":
                if (!collection.hasOwnProperty(material)) {
                    collection[material] = quantity;
                    fragments = quantity;
                } else {
                    fragments += quantity;
                    collection[material] = fragments;
                }
                if (fragments >= 250) {
                    console.log(`Valanyr obtained!`);
                    collection[material] -= 250;
                    isDone = true;
                }
                break;
            case "motes":
                if (!collection.hasOwnProperty(material)) {
                    collection[material] = quantity;
                    motes = quantity;
                } else {
                    motes += quantity;
                    collection[material] = motes;
                }
                if (motes >= 250) {
                    console.log(`Dragonwrath obtained!`);
                    collection[material] -= 250;
                    isDone = true;
                }
                break;
            default:
                if (!junk.hasOwnProperty(material)) {
                    junk[material] = quantity;
                } else {
                    junk[material] += quantity;
                }
                break;
        }
    }

    let sorted = Object.entries(collection).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [ name, quantity] of sorted) {
        console.log(`${name}: ${quantity}`);
    }

    for (let [ name, quantity] of sortedJunk) {
        console.log(`${name}: ${quantity}`);
    }
}

farming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
console.log('-----------');
farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');