function lowestPrice(input) {
    let products = {};
    let result = [];

    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!products[product]) {
            products[product] = {
                town,
                price,
            };
        } else {
            products[product] = products[product].price <= price ? products[product] : { town, price };
        }
    }

    for (let product in products) {
        result.push(`${product} -> ${products[product].price} (${products[product].town})`)
    }
    return result.join('\n');
}

// lowestPrice(
//     ['Sample Town | Sample Product | 1000',
//         'Sample Town | Orange | 2',
//         'Sample Town | Peach | 1',
//         'Sofia | Orange | 3',
//         'Sofia | Peach | 2',
//         'New York | Sample Product | 1000.1',
//         'New York | Burger | 10'
//     ]
// );

console.log(lowestPrice([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']));

// Audi -> 100000 (Sofia City)
// BMW -> 99999 (Mexico City)
// Mitsubishi -> 1000 (New York City)
// Mercedes -> 1000 (Washington City)
// NoOffenseToCarLovers -> 0 (Sofia City)