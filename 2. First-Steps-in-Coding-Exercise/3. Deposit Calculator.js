function calculateDeposit(arg1, arg2, arg3) {
    let deposit = arg1;
    let months = Number(arg2);
    let annualInterest = arg3;
    let amountInterest = (deposit * annualInterest)/100;
    let accumulated = (amountInterest / 12);
    let time = (months * accumulated).toFixed(2);
    let finalAmount = parseFloat(deposit) + parseFloat(time);
    console.log(finalAmount);
}

calculateDeposit("2350", "6", "7");