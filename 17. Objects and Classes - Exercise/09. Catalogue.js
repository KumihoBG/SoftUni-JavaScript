function catalogue(strArray) {
    let sorted = [];
    let groupLetter = [];

    for (let products of strArray) {
        let elements = products.split(' : ');
        let product = {
            name: elements[0],
            price: parseFloat(elements[1])
        };
        sorted.push(product);
    }
    sorted.sort((a,b) => a.name.localeCompare(b.name));

    for (let groups of sorted) {
        let firstLetter = groups.name.charAt(0);
        if (!groupLetter.includes(firstLetter)) {
            groupLetter.push(firstLetter);
        }
    }

    printCatalogue(groupLetter, sorted);

    function printCatalogue(groupLetters, products) {   
        for (let i = 0; i < groupLetters.length; i++) {
            console.log(`${groupLetters[i]}`);
            let groupLetter = groupLetters[i].charAt(0)
            for (let product of products){
                let productLetter = product.name.charAt(0);
                if (productLetter === groupLetter) {
                    console.log(`  ${product.name}: ${product.price}`);
                }
            }
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);