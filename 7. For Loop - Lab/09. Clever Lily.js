function lilly(arg1, arg2, arg3) {
    let age = Number(arg1);
    let priceMachine = Number(arg2);
    let toyPrice = Number(arg3);
    let toys = 0;
    let moneyForToys = 0;
    let amountSaved = 0;
    let accumulated = 0;
    let gift = 10;
    let totalAmount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
           accumulated += gift;
           totalAmount += accumulated - 1;
        } 
        else {
            toys++;
        }
    }
    moneyForToys = toys * toyPrice;
    amountSaved = totalAmount + moneyForToys;

    if (amountSaved >= priceMachine) {
        let moneyLeft = amountSaved - priceMachine;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = priceMachine - amountSaved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

lilly("10", "170", "6");
lilly("21", "1570.98", "3");