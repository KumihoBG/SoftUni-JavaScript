function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index++]);
    let savedMoney = Number(input[index++]);
    let days = 0;
    let spendingDays = 0;

    while (savedMoney < moneyNeeded) {
        let action = input[index++];
        let money = Number(input[index++]);
        days++;

        if (action === "spend") {
            if (savedMoney < money) {
                savedMoney = 0;
            } else {
                savedMoney -= money;
            }

            spendingDays++;

            if (spendingDays === 5) {
                break;
            }
        } else {
            spendingDays = 0;
            savedMoney += money;
        }
    }
    
    if (spendingDays === 5){
        console.log("You can't save the money.");
        console.log(days);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }
}


vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"
]);

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"]);

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);