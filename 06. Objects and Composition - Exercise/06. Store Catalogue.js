function storeCatalogue(input) {
    let catalogue = {};
    let groups = [];

    for (let line of input) {
        let [product, price] = line.split(' : ');
        let firstLetter = product.slice(0,1);
        if (!groups.includes(firstLetter)) {
            groups.push(firstLetter);
        }
        price = Number(price);
        catalogue[product] = price;
    }
    let sortedGroups = groups.sort((a, b) => a.localeCompare(b));
    let sortedCatalogue = Object.entries(catalogue);
    sortedCatalogue.sort((a, b) => a[0].localeCompare(b[0]));

    for (let letter of sortedGroups) {
        console.log(letter);
        for (let kvp of sortedCatalogue) {
            if (kvp[0].toString().startsWith(letter)) {
                console.log(`  ${kvp[0]}: ${kvp[1]}`);
            }
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
  
console.log('---------------------');

storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);