function petShop(param1, param2) {
    let dogsAmount = Number(param1);
    let otherAnimals = Number(param2);
    let amountDogs = dogsAmount * 2.5;
    let amountOthers = otherAnimals * 4;
    let totalAmount = amountDogs + amountOthers;
    console.log(`${totalAmount} lv.`);
}

petShop("13", "9");