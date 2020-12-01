function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let vacationPrice = Number(arg1);
    let puzzles = Number(arg2);
    let talkingDolls = Number(arg3);
    let teddyBears = Number(arg4);
    let minions = Number(arg5);
    let trucks = Number(arg6);
    let toyCount = Number(puzzles + talkingDolls + teddyBears + minions + trucks);
    let profit = Number(puzzles * 2.6 + talkingDolls * 3 + teddyBears * 4.1 + minions * 8.2 + trucks * 2);

    if (toyCount >= 50) {
        profit = profit - (profit * 0.25);
    }
    let leftOver = profit - (profit * 0.1);
    if (leftOver < vacationPrice) {
        let moneyNeeded = (vacationPrice - leftOver).toFixed(2);
        console.log(`Not enough money! ${moneyNeeded} lv needed.`)
    } else {
        let moneyLeft = (leftOver - vacationPrice).toFixed(2);
        console.log(`Yes! ${moneyLeft} lv left.`)
    }
}

// toyShop("40.8", "20", "25", "30", "50", "10");
toyShop("320", "8", "2", "5", "5", "1");