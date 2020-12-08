function fuel(arg1, arg2, arg3){
    let distance = Number(arg1);
    let passengers = Number(arg2);
    let pricePerL = Number(arg3);
    let fuel = (distance / 100) * 7;
    let neededMoney = (fuel + (passengers * 0.1)) * pricePerL;
    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}

fuel(260, 9, 2.49);
fuel(90, 14, 2.88);