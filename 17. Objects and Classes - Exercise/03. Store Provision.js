function store(stock, products) {
    // Създаваме празен обект, който да държи всички стоки
    let totalStock = {};
    // Въртим цикъл през първи масив през 2 стъпки, за да хванем четните индекси - вида на стоката
    for (let i = 0; i < stock.length; i += 2) {
        // взимаме вида на стоката
        const name = stock[i];
        // добавяме стоката към обекта с пропърти name, взимаме количеството с i+1 и парсваме към число
        totalStock[name] = Number(stock[i + 1]);
    }
    for (let j = 0; j < products.length; j += 2) {
        const name = products[j];
        // Ако обекта (магазина) не съдържа в себе си това пропърти
        if (!totalStock.hasOwnProperty(name)) {
            // добавяме го към него, но със стойност 0
            totalStock[name] = 0;
        }
        // обновяваме количеството му според наличното в масивите
        totalStock[name] += Number(products[j + 1]);
    }
    // взимаме ключовете на обекта и за всеки един принтираме ключ -> всяко пропърти на обекта
    Object.keys(totalStock).forEach(key => {
        console.log(`${key} -> ${totalStock[key]}`);
    })
}

store(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
