function fruit(...params) {
    let fruit = params[0];
    let weight = Number(params[1]/1000);
    let pricePerKg = Number(params[2]);
    let money = weight * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);