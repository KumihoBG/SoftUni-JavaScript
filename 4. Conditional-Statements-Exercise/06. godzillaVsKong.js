function movieBudjet(arg1, arg2, arg3) {
    let budjet = Number(arg1);
    let employees = Number(arg2);
    let oneManClothing = Number(arg3);
    let decor = Number(budjet * 0.1);
    let totalClothing = employees * oneManClothing;

    if(employees >= 150){
        totalClothing = totalClothing - (totalClothing * 0.1);
    }

    let totalExpenses = decor + totalClothing;

    if(totalExpenses > budjet){
        let moneyNeeded = (totalExpenses - budjet).toFixed(2);
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded} leva more.`);
    } else if (totalExpenses <= budjet){
        let moneyLeft = (budjet - totalExpenses).toFixed(2);
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`);
    }
}

movieBudjet("20000", "120", "55.5");
movieBudjet("15437.62","186","57.99");
movieBudjet("9587.88","222","55.68");

