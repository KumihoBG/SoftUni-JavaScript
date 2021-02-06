function store(stock, products) {
    let totalStock = {};

    for (let i = 0; i < stock.length; i += 2) {
        const name = stock[i];
        totalStock[name] = Number(stock[i + 1]);
    }
    for (let j = 0; j < products.length; j += 2) {
        const name = products[j];
        if (!totalStock.hasOwnProperty(name)) {
            totalStock[name] = 0;
        }
        totalStock[name] += Number(products[j + 1]);
    }
    Object.keys(totalStock).forEach(key => {
        console.log(`${key} -> ${totalStock[key]}`);
    })
}

store(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
