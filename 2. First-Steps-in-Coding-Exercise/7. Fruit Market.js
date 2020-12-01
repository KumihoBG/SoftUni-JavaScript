function fruitMarket(arg1, arg2, arg3, arg4, arg5) {
    let strawberriesPrice = arg1;
    let kgBanana = arg2;
    let kgOranges = arg3;
    let percentageOranges = 40/100;
    let percentageBananas = 80/100;
    let kgMalini = arg4;
    let maliniPrice = arg1/2;
    let orangesPrice = maliniPrice - maliniPrice*percentageOranges;
    let kgStrawberries = arg5;
    let bananaPrice = maliniPrice - maliniPrice*percentageBananas;
    let totalPrice = (strawberriesPrice * kgStrawberries) + (kgBanana * bananaPrice) + (kgOranges * orangesPrice) + (kgMalini * maliniPrice);
    console.log(totalPrice.toFixed(4));
}

fruitMarket
("48",
"10",
"3.3",
"6.5",
"1.7");

