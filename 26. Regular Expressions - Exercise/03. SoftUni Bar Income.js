function barIncome(arr) {
    let totalPrice = 0;
    let income = 0;

    for (let line of arr) {
        if (line === "end of shift") {
            break;
        }
        let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*.*[|](?<count>[\d]+)[|][^|$%.\d]*[^\d]*(?<price>[\d]+\.?[\d]+)[$]/g;
        let result = pattern.exec(line);
        if (result !== null) {
            let customer = result.groups['customer'];
            let product = result.groups['product'];
            let count = Number(result.groups['count']);
            let price = Number(result.groups['price']);
            totalPrice = count * price;
            income += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

barIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ]);
console.log('--------------------');
  barIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]);